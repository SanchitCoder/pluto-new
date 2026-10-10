import { writeFileSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://www.plutotravels.ae';

/**
 * Routes are read directly from src/data/sitemapRoutes.ts (the single source of truth also used by
 * the prerender script) instead of a second hardcoded list — a duplicated list previously drifted out
 * of sync and silently dropped a published blog post from the sitemap.
 */
function loadRoutes() {
  const tsSource = readFileSync(path.resolve(__dirname, '../src/data/sitemapRoutes.ts'), 'utf8');
  const match = tsSource.match(/SITEMAP_ROUTES:\s*string\[\]\s*=\s*\[([\s\S]*?)\n\];/);
  if (!match) {
    throw new Error('[sitemap] Could not find SITEMAP_ROUTES array in src/data/sitemapRoutes.ts');
  }
  const routes = [...match[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  if (routes.length === 0) {
    throw new Error('[sitemap] Parsed zero routes from src/data/sitemapRoutes.ts — check the regex still matches.');
  }
  return routes;
}

const routes = loadRoutes();

const today = new Date().toISOString().split('T')[0];

const priorityFor = (route) => {
  if (route === '/') return '1.0';
  if (route.startsWith('/blog/') || route.startsWith('/package/') || route.startsWith('/mice/')) return '0.6';
  if (route.startsWith('/visa/')) return '0.7';
  return '0.8';
};

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE}${route === '/' ? '' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : route.startsWith('/blog') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap, 'utf8');
console.log(`[sitemap] Generated ${routes.length} URLs → public/sitemap.xml`);
