import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PORT = 4321;
const BASE_URL = `http://localhost:${PORT}`;

/**
 * Routes that are real, working pages but deliberately excluded from sitemap.xml (noindex: true in
 * src/lib/seoRoutes.ts). They still need prerendering so: (a) the noindex meta tag itself is present
 * in the raw HTML non-JS crawlers see — currently it only exists after client-side JS runs, which
 * defeats the purpose — and (b) a direct visit/refresh works without depending on client-side routing.
 */
const EXTRA_PRERENDER_ROUTES = ['/privacy-policy', '/terms-and-conditions', '/crisis', '/crisis/form', '/thank-you'];

function loadSitemapRoutes() {
  const xml = readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const base = 'https://www.plutotravels.ae';
  return locs.map((loc) => {
    const p = loc.replace(base, '');
    return p === '' ? '/' : p;
  });
}

function routeToFile(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  const segments = route.split('/').filter(Boolean);
  return path.join(DIST, ...segments, 'index.html');
}

function startPreviewServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let settled = false;
    const onData = (data) => {
      const text = data.toString();
      if (!settled && /Local:|ready in/i.test(text)) {
        settled = true;
        resolve(proc);
      }
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    proc.on('error', reject);
    proc.on('exit', (code) => {
      if (!settled) reject(new Error(`vite preview exited early with code ${code}`));
    });
    setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve(proc); // fall through; the first page.goto will surface any real connection problem
      }
    }, 8000);
  });
}

/** Legitimately thin pages (mostly a third-party iframe) — skip the body-text sanity check for these. */
const THIN_PAGE_ROUTES = new Set(['/crisis/form']);

/**
 * Captures the fully client-rendered HTML for one route. Does NOT write to disk — see the comment
 * in main() on why every route is captured before anything is written.
 */
async function captureRoute(page, route) {
  const url = `${BASE_URL}${route}`;
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  // Let React / react-helmet-async / any viewport-triggered effects settle.
  await new Promise((r) => setTimeout(r, 450));

  const result = await page.evaluate(() => ({
    title: document.title,
    descriptionCount: document.querySelectorAll('meta[name="description"]').length,
    hasJsonLd: !!document.querySelector('script[type="application/ld+json"]'),
    bodyTextLength: document.body?.innerText?.trim().length ?? 0,
    html: '<!doctype html>\n' + document.documentElement.outerHTML,
  }));

  if (!result.title || result.title.trim().length === 0) {
    throw new Error(`[prerender] ${route}: empty <title> — SEOHead likely did not render`);
  }
  if (result.descriptionCount !== 1) {
    throw new Error(`[prerender] ${route}: expected exactly 1 <meta name="description">, found ${result.descriptionCount}`);
  }
  if (!result.hasJsonLd) {
    throw new Error(`[prerender] ${route}: no JSON-LD script found — JsonLdSchema did not render`);
  }
  if (result.bodyTextLength < 80 && !THIN_PAGE_ROUTES.has(route)) {
    throw new Error(`[prerender] ${route}: only ${result.bodyTextLength} chars of body text — page looks blank`);
  }

  return result.html;
}

async function main() {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('[prerender] dist/index.html not found — run `vite build` before prerendering.');
  }
  if (!existsSync(path.join(DIST, 'sitemap.xml'))) {
    throw new Error('[prerender] dist/sitemap.xml not found — run generate-sitemap before vite build.');
  }

  const routes = [...new Set([...loadSitemapRoutes(), ...EXTRA_PRERENDER_ROUTES])];
  console.log(`[prerender] ${routes.length} routes to prerender`);

  const previewProc = await startPreviewServer();
  let browser;
  const captured = new Map();
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    // Prerendering doesn't need real network calls to third parties (fonts/pixels/maps); block them
    // for speed and determinism, and so a flaky third-party host never fails the production build.
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      const thirdPartyHosts = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'facebook.net',
        'facebook.com',
        'google-analytics.com',
        'googletagmanager.com',
        'youtube.com',
        'ytimg.com',
        'images.unsplash.com',
        'crm.plutotravels.ae',
        'google.com/maps',
      ];
      if (!url.startsWith(BASE_URL) && thirdPartyHosts.some((h) => url.includes(h))) {
        req.abort();
      } else {
        req.continue();
      }
    });

    // IMPORTANT: every route is captured into memory BEFORE any file is written to dist/. `vite
    // preview` serves dist/index.html as the SPA fallback for any path it doesn't have a static file
    // for yet. If we wrote dist/index.html (the "/" route) to disk partway through this loop, every
    // route visited afterwards would have that now-content-rich homepage served as its *starting*
    // HTML instead of the pristine empty-root shell vite build produced — main.tsx would then
    // hydrate the wrong page's markup onto the wrong route, corrupting both the content and the
    // Helmet-managed <head> tags (observed as two conflicting <meta name="description"> tags on
    // pages captured after "/"). Writing nothing until the whole pass is done avoids that entirely.
    let ok = 0;
    for (const route of routes) {
      captured.set(route, await captureRoute(page, route));
      ok++;
      if (ok % 10 === 0 || ok === routes.length) {
        console.log(`[prerender] captured ${ok}/${routes.length}`);
      }
    }
  } finally {
    if (browser) await browser.close();
    previewProc.kill();
  }

  for (const [route, html] of captured) {
    const file = routeToFile(route);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, html, 'utf8');
  }
  console.log(`[prerender] done — ${captured.size} pages written to dist/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
