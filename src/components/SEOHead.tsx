import { Helmet } from 'react-helmet-async';
import { SITE } from '../lib/siteConfig';
import { getCanonicalUrl, getSeoForPath, type SeoRouteConfig } from '../lib/seoRoutes';

type SEOHeadProps = {
  pathname: string;
  override?: Partial<SeoRouteConfig>;
};

export default function SEOHead({ pathname, override }: SEOHeadProps) {
  const seo = { ...getSeoForPath(pathname), ...override };
  const canonical = getCanonicalUrl(pathname);
  const gscVerification = import.meta.env.VITE_GSC_VERIFICATION as string | undefined;

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <link rel="canonical" href={canonical} />
      {seo.noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      <meta property="og:type" content={seo.ogType ?? 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={SITE.defaultOgImage} />
      <meta property="og:locale" content={SITE.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={SITE.defaultOgImage} />

      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {gscVerification && <meta name="google-site-verification" content={gscVerification} />}
    </Helmet>
  );
}
