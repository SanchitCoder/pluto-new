import { SITE, absoluteUrl } from '../lib/siteConfig';

type JsonLdSchemaProps = {
  pathname?: string;
  type?: 'TravelAgency' | 'Article' | 'FAQPage';
  variant?: 'full' | 'faq-only';
  article?: {
    headline: string;
    datePublished: string;
    description: string;
  };
  faqs?: Array<{ question: string; answer: string }>;
};

export default function JsonLdSchema({ pathname = '/', type = 'TravelAgency', variant = 'full', article, faqs }: JsonLdSchemaProps) {
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

  const travelAgency = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl('/Pluto_Final_logo.png'),
    image: absoluteUrl('/Pluto_Final_logo.png'),
    telephone: SITE.phoneOffice,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.aggregateRating.ratingValue,
      reviewCount: SITE.aggregateRating.reviewCount,
      bestRating: SITE.aggregateRating.bestRating,
    },
    sameAs: Object.values(SITE.social),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneOffice,
    email: SITE.email,
    image: absoluteUrl('/Pluto_Final_logo.png'),
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressCountry: SITE.address.addressCountry,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.aggregateRating.ratingValue,
      reviewCount: SITE.aggregateRating.reviewCount,
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

  schemas.push(travelAgency, localBusiness, webSite, webPage);

  if (type === 'Article' && article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.headline,
      description: article.description,
      datePublished: article.datePublished,
      author: { '@type': 'Organization', name: SITE.name },
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
