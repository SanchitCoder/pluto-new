import { useLocation } from 'react-router-dom';
import SEOHead from './SEOHead';
import JsonLdSchema from './JsonLdSchema';

/** Applies route-based meta tags, canonical URLs, and sitewide JSON-LD. */
export default function GlobalSEO() {
  const { pathname } = useLocation();

  return (
    <>
      <SEOHead pathname={pathname} />
      <JsonLdSchema pathname={pathname} />
    </>
  );
}
