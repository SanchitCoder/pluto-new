import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://plutotravels.ae';

/** Keep in sync with src/data/sitemapRoutes.ts */
const routes = [
  '/',
  '/destinations',
  '/contact',
  '/corporate',
  '/corporate-travel',
  '/corporate-travel-dubai',
  '/mice',
  '/mice-dubai',
  '/industries',
  '/personal',
  '/platinum',
  '/luxury-travel',
  '/luxury-travel-dubai',
  '/holidays',
  '/services',
  '/business-travel',
  '/corporate-events',
  '/first-class-travel',
  '/visa/africa',
  '/visa-services-dubai',
  '/privacy-policy',
  '/terms-and-conditions',
  '/business-landing',
  '/travel-agency-business-bay-dubai',
  '/corporate-travel-energy',
  '/marine-crew-travel-dubai',
  '/mining-sector-travel',
  '/sports-team-travel',
  '/qatar-visa-from-dubai',
  '/bishkek-holiday-packages-dubai',
  '/group-travel-booking-dubai',
  '/blog/best-eid-staycation-deals-uae-2026',
  '/blog/plan-unforgettable-luxury-celebrations-corporate-events-2026',
  '/blog/7-common-travel-booking-mistakes-how-to-avoid',
  '/blog/what-happens-if-you-miss-your-flight-travel-guide',
  '/blog/luxury-travel-trends-2026-experiences-over-hotel-stays',
  '/blog/how-to-find-cheap-flights-without-sacrificing-comfort',
  '/blog/best-luxury-staycation-fujairah-48-hour-escape',
  '/blog/top-european-destinations-schengen-visa-guide-pluto-travels',
  '/blog/why-uae-companies-switching-corporate-travel-management-2026',
  '/blog/corporate-travel-policy-guide-uae-companies',
  '/blog/mice-dubai-planners-guide-2026',
  '/blog/best-time-plan-corporate-incentive-trips-uae',
  '/blog/experiencing-ramadan-in-the-uae-customs-tips-travel-guide',
  '/blog/top-visa-free-visa-on-arrival-destinations-uae-residents-2026',
  '/blog/ultimate-travel-guide-best-things-to-do-dubai-2026',
  '/blog/uae-resilience-in-action-navigating-regional-challenges',
  '/blog/eid-al-fitr-travel-top-destinations-2026',
  '/blog/5-unique-corporate-team-building-ideas-that-actually-work',
  '/blog/best-affordable-travel-destinations-2026',
  '/blog/corporate-travel-management-best-practices-2026-part1',
  '/blog/corporate-travel-management-best-practices-2026-part2',
];

const today = new Date().toISOString().split('T')[0];

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE}${route === '/' ? '' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : route.startsWith('/blog') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.startsWith('/blog') ? '0.6' : '0.8'}</priority>
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
