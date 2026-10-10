/** Canonical site & NAP — keep identical across schema, footer, GBP, and directories. */
export const SITE = {
  name: 'Pluto Travels LLC',
  legalName: 'Pluto Travels LLC',
  url: 'https://www.plutotravels.ae',
  domain: 'www.plutotravels.ae',
  locale: 'en_AE',
  foundingDate: '2007',
  email: 'sales@plutotravels.ae',
  contactEmail: 'sapna@plutotravels.ae',
  /** Primary office line (schema + local SEO) */
  phoneOffice: '+97143920930',
  phoneOfficeDisplay: '+971 4 392 0930',
  /** Mobile / WhatsApp line */
  phoneMobile: '+971509110065',
  phoneMobileDisplay: '+971 50 911 0065',
  whatsapp: '971509110065',
  address: {
    streetAddress: 'Office 2805, Prism Tower, Business Bay',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '',
    addressCountry: 'AE',
    addressCountryName: 'United Arab Emirates',
  },
  geo: {
    latitude: 25.1874761,
    longitude: 55.2611572,
  },
  googleMapsUrl:
    'https://www.google.com/maps/place/Pluto+Travels+LLC+Dubai/@25.1873455,55.2598099,18z/data=!4m6!3m5!1s0x3e5f4314df2d91b9:0xc4d4a502001393c9!8m2!3d25.1874761!4d55.2611572!16s%2Fg%2F11bbwr4pbz',
  aggregateRating: {
    ratingValue: '4.6',
    reviewCount: '244',
    bestRating: '5',
  },
  social: {
    instagram: 'https://www.instagram.com/luxurytravellerdubai',
    facebook: 'https://www.facebook.com/Plutotravelsdubai',
    linkedin: 'https://www.linkedin.com/company/plutotravelsdubai/',
    youtube: 'https://www.youtube.com/@plutotravelsdubai9722/',
  },
  knowsAbout: [
    'Corporate travel',
    'MICE',
    'Luxury travel',
    'Visa services',
    'Marine crew travel',
    'Energy sector travel',
    'Business travel management',
  ],
  defaultOgImage: 'https://plutotravels.ae/Pluto_Final_logo.png',
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Single source of truth for "X+ years" company-age badges, derived from foundingDate.
 * Do not hardcode "17+", "18+", "19+" etc. elsewhere — those drift out of sync (flagged in the
 * Oct 2026 SEO audit as a trust-signal inconsistency). This does NOT apply to an individual's
 * personal career length (e.g. a founder's bio), which is a different, legitimately separate number.
 */
export function yearsOfExperience(asOf: Date = new Date()): number {
  return asOf.getFullYear() - Number(SITE.foundingDate);
}

/** "19+ Years" — ready-to-render company-age badge text. */
export function yearsOfExperienceLabel(asOf: Date = new Date()): string {
  return `${yearsOfExperience(asOf)}+ Years`;
}
