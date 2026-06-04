import { SITE, absoluteUrl } from './siteConfig';

export type SeoRouteConfig = {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
};

const defaultDesc =
  "IATA-accredited Dubai travel agency since 2007. Corporate travel, MICE, luxury concierge, visas & holidays. 244 reviews, 4.6★. 24/7 support in Business Bay. Request a quote.";

export const SEO_ROUTES: Record<string, SeoRouteConfig> = {
  '/': {
    title: "Pluto Travels | Dubai's Premier Luxury Travel Concierge & Corporate Travel Management",
    description:
      "Dubai's award-winning IATA travel agency since 2007. Corporate travel, MICE, luxury concierge & visa services. 244 Google reviews, 4.6★, 98.7% retention. Get a corporate travel quote today.",
    keywords:
      'luxury travel Dubai, corporate travel management UAE, MICE Dubai, travel agency Business Bay, IATA travel agency',
  },
  '/contact': {
    title: 'Contact Pluto Travels | Request a Quote | Business Bay, Dubai',
    description:
      'Contact Pluto Travels in Business Bay, Dubai. Request a corporate travel quote, MICE enquiry, or luxury trip plan. Call +971 4 392 0930 or +971 50 911 0065. 24/7 support.',
    keywords: 'contact travel agency Dubai, corporate travel quote Dubai, Pluto Travels Business Bay',
  },
  '/corporate': {
    title: 'Corporate Travel Agency Dubai | Business Travel Solutions | Pluto Travels',
    description:
      'Corporate travel agency in Dubai for Fortune 500 & UAE businesses. Negotiated fares, policy compliance, 24/7 support. IATA-accredited since 2007. Request a corporate travel quote.',
    keywords: 'corporate travel agency Dubai, business travel Dubai, corporate travel desk UAE',
  },
  '/corporate-travel': {
    title: 'Corporate Travel Management Dubai | Business Travel Management UAE',
    description:
      'End-to-end corporate travel management in Dubai: booking, policy, reporting & 24/7 assistance. Reduce spend and improve compliance. Request a demo from Pluto Travels.',
    keywords: 'corporate travel management Dubai, business travel management Dubai, travel management company UAE',
  },
  '/corporate-travel-dubai': {
    title: 'Corporate Travel Management Dubai | Business Travel Management UAE',
    description:
      'End-to-end corporate travel management in Dubai: booking, policy, reporting & 24/7 assistance. Reduce spend and improve compliance. Request a demo from Pluto Travels.',
    keywords: 'corporate travel management Dubai, business travel management Dubai',
  },
  '/mice': {
    title: 'MICE Company Dubai | Meetings, Incentives, Conferences & Events',
    description:
      'MICE event management in Dubai — meetings, incentives, conferences & exhibitions. End-to-end planning, venues & group travel. Request an MICE quote from Pluto Travels.',
    keywords: 'MICE company Dubai, MICE event management Dubai, incentive travel Dubai',
  },
  '/mice-dubai': {
    title: 'MICE Company Dubai | Meetings, Incentives, Conferences & Events',
    description:
      'MICE event management in Dubai — meetings, incentives, conferences & exhibitions. End-to-end planning, venues & group travel. Request an MICE quote from Pluto Travels.',
    keywords: 'MICE Dubai, MICE event management Dubai',
  },
  '/industries': {
    title: 'Specialized Industry Travel | Energy, Marine, Mining & Sports | Dubai',
    description:
      'Sector-specific corporate travel for Energy, Marine crew, Mining & Sports in the UAE. Safety protocols, crew rotation & project logistics. Talk to Pluto Travels.',
    keywords: 'energy sector travel UAE, marine crew travel Dubai, mining sector travel, sports team travel UAE',
  },
  '/platinum': {
    title: 'Platinum Travel Concierge Dubai | VIP Luxury Travel Services',
    description:
      'Platinum concierge for HNI clients in Dubai — private aviation, luxury hotels, exclusive access & 24/7 white-glove service. Plan your VIP journey with Pluto Travels.',
    keywords: 'luxury travel agency Dubai, VIP travel concierge Dubai, platinum travel Dubai',
  },
  '/luxury-travel': {
    title: 'Luxury Travel Agency Dubai | VIP & HNI Travel Concierge',
    description:
      'Luxury travel agency in Dubai for discerning travelers. Exclusive hotels, bespoke itineraries & 24/7 concierge. IATA-accredited since 2007. Request a quote.',
    keywords: 'luxury travel agency Dubai, VIP travel Dubai, HNI travel services UAE',
  },
  '/luxury-travel-dubai': {
    title: 'Luxury Travel Agency Dubai | VIP & HNI Travel Concierge',
    description:
      'Luxury travel agency in Dubai for discerning travelers. Exclusive hotels, bespoke itineraries & 24/7 concierge. IATA-accredited since 2007. Request a quote.',
    keywords: 'luxury travel agency Dubai',
  },
  '/holidays': {
    title: 'Dubai Holiday Packages | Luxury & Family Holidays | Pluto Travels',
    description:
      'Curated holiday packages from Dubai — Maldives, Europe, CIS & more. Flights, hotels & visas handled end-to-end. Plan your next escape with Pluto Travels.',
    keywords: 'Dubai holiday packages, holiday packages from Dubai, luxury holidays UAE',
  },
  '/services': {
    title: 'Essential Travel Services Dubai | Flights, Hotels, Visas & More',
    description:
      'Complete travel services in Dubai: flights, hotels, visas, insurance, transfers & concierge. One partner for corporate and leisure. Contact Pluto Travels.',
    keywords: 'travel services Dubai, visa assistance Dubai, flight booking Dubai',
  },
  '/destinations': {
    title: 'Travel Destinations from Dubai | Corporate & Leisure | Pluto Travels',
    description:
      'Explore destinations worldwide with Pluto Travels — corporate hubs, leisure escapes & visa-friendly routes from the UAE. Plan your next trip today.',
    keywords: 'destinations from Dubai, travel destinations UAE',
  },
  '/business-travel': {
    title: 'Business Travel Dubai | Corporate Flight & Hotel Booking',
    description:
      'Business travel solutions in Dubai — corporate fares, flexible booking, policy compliance & 24/7 support for your traveling teams. Request a quote.',
    keywords: 'business travel Dubai, corporate flight booking Dubai',
  },
  '/corporate-events': {
    title: 'Corporate Events Travel Dubai | Group & Event Logistics',
    description:
      'Corporate events travel in Dubai — group bookings, venue coordination, delegate logistics & on-site support. Partner with Pluto Travels for your next event.',
    keywords: 'corporate events travel Dubai, group travel booking Dubai',
  },
  '/first-class-travel': {
    title: 'First Class Travel Dubai | Premium Business & First Class Flights',
    description:
      'First class and premium cabin travel from Dubai. Expert booking, upgrades & VIP airport services for executives. Book with Pluto Travels.',
    keywords: 'first class travel Dubai, premium business travel UAE',
  },
  '/personal': {
    title: 'Personal Travel Dubai | Luxury Leisure & Family Holidays',
    description:
      'Personal travel planning in Dubai — bespoke holidays, honeymoons, family trips & exclusive experiences. White-glove service since 2007.',
    keywords: 'personal travel Dubai, leisure travel agency Dubai',
  },
  '/visa/africa': {
    title: 'Visa Services Dubai | Outbound Visa Assistance | Pluto Travels',
    description:
      'Visa assistance from Dubai — Schengen, UK, USA, Qatar, CIS & worldwide. Document guidance, fast processing & expert support. Apply via Pluto Travels.',
    keywords: 'visa assistance Dubai, outbound visa Dubai, Schengen visa Dubai',
  },
  '/visa-services-dubai': {
    title: 'Visa Services Dubai | Outbound Visa Assistance | Pluto Travels',
    description:
      'Visa assistance from Dubai — Schengen, UK, USA, Qatar, CIS & worldwide. Document guidance, fast processing & expert support. Apply via Pluto Travels.',
    keywords: 'visa services Dubai, visa assistance Dubai outbound',
  },
  '/travel-agency-business-bay-dubai': {
    title: 'Travel Agency Business Bay Dubai | Pluto Travels | Prism Tower',
    description:
      'IATA travel agency in Business Bay, Dubai — Office 2805, Prism Tower. Corporate, MICE, luxury & visa services. 244 reviews, 4.6★. Visit or call +971 4 392 0930.',
    keywords: 'travel agency Business Bay, travel agency near me Dubai, Business Bay travel agency',
  },
  '/corporate-travel-energy': {
    title: 'Corporate Travel for Energy & Oil/Gas Sector UAE | Pluto Travels',
    description:
      'Corporate travel for energy, oil & gas in the UAE — offshore rotations, remote sites, safety compliance & 24/7 emergency support. Request a sector quote.',
    keywords: 'corporate travel energy sector UAE, oil gas travel Dubai, energy sector corporate travel',
  },
  '/marine-crew-travel-dubai': {
    title: 'Marine & Crew Travel Dubai | Shipping Sector Travel Management',
    description:
      'Marine crew travel and shipping logistics in Dubai — crew rotation, port coordination, visa & emergency rebooking. Trusted by 75+ marine clients.',
    keywords: 'marine crew travel Dubai, crew travel management UAE, shipping travel Dubai',
  },
  '/mining-sector-travel': {
    title: 'Mining Sector Corporate Travel UAE | Project Site Logistics',
    description:
      'Mining sector travel in the UAE — remote project sites, team rotations, equipment logistics & safety protocols. Corporate travel built for mining operations.',
    keywords: 'mining sector travel UAE, mining corporate travel Dubai',
  },
  '/sports-team-travel': {
    title: 'Sports Team & Event Travel Management UAE | Pluto Travels',
    description:
      'Sports team travel management in the UAE — fixtures, tournaments, group flights, hotels & MICE logistics. 24/7 support for sports organizations.',
    keywords: 'sports team travel management UAE, sports event travel Dubai, team travel booking Dubai',
  },
  '/qatar-visa-from-dubai': {
    title: 'Qatar Visa from Dubai | Application Help & Fast Processing',
    description:
      'Qatar visa from Dubai for UAE residents — Hayya, tourist & business visas. Document checklist, application support & status tracking. Apply with Pluto Travels.',
    keywords: 'Qatar visa from Dubai, Qatar visa UAE residents, apply Qatar visa Dubai',
  },
  '/bishkek-holiday-packages-dubai': {
    title: 'Bishkek Holiday Packages from Dubai | Kyrgyzstan Tours 2026',
    description:
      'Bishkek & Kyrgyzstan holiday packages from Dubai — flights, hotels, city tours & mountain escapes. Best deals for UAE travelers. Request a package quote.',
    keywords: 'Bishkek holiday packages Dubai, Kyrgyzstan tour from Dubai, Bishkek travel UAE',
  },
  '/group-travel-booking-dubai': {
    title: 'Group Travel Booking Dubai | Corporate & Leisure Groups',
    description:
      'Group travel booking in Dubai — corporate delegations, incentives, family groups & events. Block fares, coordinated itineraries & dedicated support.',
    keywords: 'group travel booking Dubai, group travel agency UAE',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Pluto Travels LLC Dubai',
    description: 'Privacy policy for Pluto Travels LLC — how we collect, use and protect your personal data.',
    noindex: true,
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Pluto Travels LLC Dubai',
    description: 'Terms and conditions for using Pluto Travels services and website.',
    noindex: true,
  },
  '/business-landing': {
    title: 'Corporate & Group Travel Dubai | Pluto Travels Business',
    description:
      'Structured group travel and corporate solutions from Dubai. 17+ years expertise, dedicated account management & global network. Request a consultation.',
    keywords: 'corporate group travel Dubai, business travel solutions UAE',
  },
  '/crisis': {
    title: 'Emergency Travel Assistance | Pluto Travels Dubai',
    description: 'Emergency flight and travel support during regional disruptions. Pluto Travels Dubai — 24/7 assistance.',
    noindex: true,
  },
  '/crisis/form': {
    title: 'Emergency Travel Request | Pluto Travels',
    description: 'Submit an emergency travel request to Pluto Travels Dubai.',
    noindex: true,
  },
  '/thank-you': {
    title: 'Thank You | Pluto Travels',
    description: 'Thank you for contacting Pluto Travels.',
    noindex: true,
  },
  '/blog/corporate-travel-policy-guide-uae-companies': {
    title: 'Corporate Travel Policy Guide for UAE Companies (2026) | Pluto Travels',
    description:
      'How to build a corporate travel policy for UAE companies — approvals, budgets, duty of care, booking rules & compliance. Expert guide from Pluto Travels.',
    keywords: 'corporate travel policy UAE, business travel policy Dubai',
    ogType: 'article',
  },
  '/blog/mice-dubai-planners-guide-2026': {
    title: 'MICE in Dubai: A Planner\'s Guide (2026) | Pluto Travels',
    description:
      'Complete MICE planning guide for Dubai — venues, incentives, visas, logistics & best practices for meetings, conferences and exhibitions in 2026.',
    keywords: 'MICE Dubai guide, event planning Dubai 2026',
    ogType: 'article',
  },
  '/blog/best-time-plan-corporate-incentive-trips-uae': {
    title: 'Best Time to Plan Corporate Incentive Trips from the UAE | Pluto Travels',
    description:
      'When to plan corporate incentive trips from the UAE — seasons, budgeting, lead times & destination tips for HR and event teams.',
    keywords: 'corporate incentive trips UAE, incentive travel planning Dubai',
    ogType: 'article',
  },
};

export function getSeoForPath(pathname: string): SeoRouteConfig {
  if (SEO_ROUTES[pathname]) return SEO_ROUTES[pathname];

  if (pathname.startsWith('/blog/')) {
    return {
      title: 'Travel Insights & Guides | Pluto Travels Dubai Blog',
      description: defaultDesc,
      ogType: 'article',
    };
  }
  if (pathname.startsWith('/visa/')) {
    return {
      title: 'Visa Services & Requirements | Pluto Travels Dubai',
      description:
        'Visa guidance for UAE residents — requirements, documents & processing support from Pluto Travels.',
      keywords: 'visa Dubai, visa assistance UAE',
    };
  }
  if (pathname.startsWith('/package/')) {
    return {
      title: 'Holiday Package Details | Pluto Travels Dubai',
      description: 'Explore this curated holiday package from Dubai — flights, hotels, activities & visa support.',
    };
  }
  if (pathname.startsWith('/mice/')) {
    return {
      title: 'MICE Event Solutions Dubai | Pluto Travels',
      description: 'Specialized MICE event travel and logistics in Dubai from Pluto Travels.',
      keywords: 'MICE Dubai, corporate events UAE',
    };
  }

  return {
    title: `${SITE.name} | Corporate & Luxury Travel Dubai`,
    description: defaultDesc,
  };
}

export function getCanonicalUrl(pathname: string): string {
  return absoluteUrl(pathname === '/' ? '/' : pathname.replace(/\/$/, '') || '/');
}
