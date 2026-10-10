import { useLocation } from 'react-router-dom';
import SEOHead from './SEOHead';
import JsonLdSchema from './JsonLdSchema';
import { getSeoForPath } from '../lib/seoRoutes';

/** Paths that are genuine services (not the homepage, blog, visa index, legal pages, etc.) —
 * these get an additional Service schema entity derived from their title/description. */
const SERVICE_PATHS = new Set([
  '/corporate',
  '/corporate-travel',
  '/mice',
  '/luxury-travel',
  '/platinum',
  '/services',
  '/personal',
  '/business-travel',
  '/first-class-travel',
  '/corporate-events',
  '/industries',
  '/holidays',
  '/corporate-travel-energy',
  '/marine-crew-travel-dubai',
  '/mining-sector-travel',
  '/sports-team-travel',
  '/visa/africa',
  '/visa/middle-east',
  '/visa/europe',
  '/visa/asia',
  '/visa/canada',
  '/visa/usa',
  '/visa/cis',
]);

/** A specific blog post (not the /blog index) — BlogDetailPage renders its own BlogPosting schema. */
function isBlogDetailPath(pathname: string): boolean {
  return /^\/blog\/[^/]+$/.test(pathname);
}

/** Applies route-based meta tags, canonical URLs, and sitewide JSON-LD. */
export default function GlobalSEO() {
  const { pathname } = useLocation();

  if (isBlogDetailPath(pathname)) {
    return <SEOHead pathname={pathname} />;
  }

  const service = SERVICE_PATHS.has(pathname)
    ? (() => {
        const seo = getSeoForPath(pathname);
        return { name: seo.title.split('|')[0].trim(), description: seo.description };
      })()
    : undefined;

  return (
    <>
      <SEOHead pathname={pathname} />
      <JsonLdSchema pathname={pathname} service={service} />
    </>
  );
}
