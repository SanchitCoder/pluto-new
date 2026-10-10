import { SITE, absoluteUrl } from '../lib/siteConfig';

export type BreadcrumbItem = { name: string; path: string };

type JsonLdSchemaProps = {
  pathname?: string;
  type?: 'TravelAgency' | 'BlogPosting' | 'FAQPage';
  variant?: 'full' | 'faq-only';
  article?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    /** Display name for the byline, e.g. "Travel Team" — rendered as a Pluto Travels team credit. */
    author?: string;
    image?: string;
  };
  faqs?: Array<{ question: string; answer: string }>;
  /** Pushes a Service entity for the page (service pages only — see SERVICE_PATHS in GlobalSEO). */
  service?: { name: string; description: string };
  /** Explicit breadcrumb trail; falls back to one auto-derived from pathname when omitted. */
  breadcrumbs?: BreadcrumbItem[];
};

/** Humanizes a URL segment into a breadcrumb label, e.g. "corporate-travel" -> "Corporate Travel". */
function labelFromSegment(segment: string): string {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function autoBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const crumbs: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];
  let acc = '';
  for (const seg of segments) {
    acc += `/${seg}`;
    crumbs.push({ name: labelFromSegment(seg), path: acc });
  }
  return crumbs;
}

export default function JsonLdSchema({
  pathname = '/',
  type = 'TravelAgency',
  variant = 'full',
  article,
  faqs,
  service,
  breadcrumbs,
}: JsonLdSchemaProps) {
  const schemas: Record<string, unknown>[] = [];

  if (variant === 'faq-only' && faqs?.length) {
    const graph = [
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ];
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
        }}
      />
    );
  }

  // TravelAgency is already a LocalBusiness subtype in schema.org's hierarchy, so a single entity
  // carries both types instead of describing the same business twice (flagged in the Oct 2026 SEO
  // audit as a duplicate-entity issue). No AggregateRating here by design: schema.org ratings should
  // only be marked up when the matching reviews are visibly shown on the page — mismatched/self-serving
  // rating markup risks a Google structured-data manual action.
  const business = {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl('/Pluto_Final_logo.png'),
    image: absoluteUrl('/Pluto_Final_logo.png'),
    telephone: SITE.phoneOffice,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: ['United Arab Emirates', 'Worldwide'],
    knowsAbout: SITE.knowsAbout,
    hasMap: SITE.googleMapsUrl,
    // Instagram omitted here until the exact handle backing this legal entity is confirmed — an
    // unverified sameAs link risks attributing someone else's profile to this business.
    sameAs: [SITE.social.facebook, SITE.social.linkedin, SITE.social.youtube],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en-AE',
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': absoluteUrl(pathname),
    url: absoluteUrl(pathname),
    name: SITE.name,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
  };

  schemas.push(business, webSite, webPage);

  const crumbs = breadcrumbs ?? autoBreadcrumbs(pathname);
  if (crumbs.length > 1) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    });
  }

  if (service) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: { '@id': `${SITE.url}/#organization` },
      areaServed: ['United Arab Emirates', 'Worldwide'],
    });
  }

  if (type === 'BlogPosting' && article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.headline,
      description: article.description,
      image: article.image ? absoluteUrl(article.image) : absoluteUrl('/Pluto_Final_logo.png'),
      datePublished: article.datePublished,
      dateModified: article.dateModified ?? article.datePublished,
      author: {
        '@type': 'Organization',
        name: article.author ? `Pluto Travels — ${article.author}` : SITE.name,
        url: SITE.url,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
        logo: { '@type': 'ImageObject', url: absoluteUrl('/Pluto_Final_logo.png') },
      },
      mainEntityOfPage: absoluteUrl(pathname),
    });
  }

  if (type === 'FAQPage' && faqs?.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  const graph = schemas.map(({ '@context': _c, ...rest }) => rest);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph.length === 1 ? [graph[0]] : graph,
        }),
      }}
    />
  );
}
