import { SITE, absoluteUrl } from './siteConfig';

export type SeoRouteConfig = {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
};

const defaultDesc =
  "IATA-accredited Dubai travel agency since 2007. Corporate travel, MICE, luxury concierge, visas & holidays. Request a quote from Pluto Travels' Business Bay team today.";

export const SEO_ROUTES: Record<string, SeoRouteConfig> = {
  '/': {
    title: "Pluto Travels | Corporate Travel & Luxury Concierge Dubai",
    description:
      "IATA-accredited corporate travel management and luxury concierge in Dubai since 2007. MICE, visas, holidays & 24/7 support from Business Bay. Get a quote.",
    keywords:
      'corporate travel management Dubai, luxury travel Dubai, MICE Dubai, travel agency Business Bay, IATA travel agency',
  },
  '/about': {
    title: 'About Pluto Travels | IATA Travel Agency Dubai Since 2007',
    description:
      "Pluto Travels LLC has managed corporate, MICE, luxury and visa travel from Business Bay, Dubai since 2007. Meet the team and our IATA, ISO & ICV credentials.",
    keywords: 'about Pluto Travels, Pluto Travels Dubai, IATA travel agency history, travel agency team Dubai',
  },
  '/blog': {
    title: 'Travel Insights & Guides | Pluto Travels Dubai Blog',
    description:
      'Guides on corporate travel policy, visas, MICE planning and luxury holidays from Pluto Travels — practical advice for UAE businesses and travellers.',
    keywords: 'travel blog Dubai, corporate travel guides, visa guides UAE, Pluto Travels blog',
  },
  '/contact': {
    title: 'Contact Pluto Travels | Request a Quote | Business Bay, Dubai',
    description:
      'Contact Pluto Travels in Business Bay, Dubai for a corporate travel quote, MICE enquiry or luxury trip plan. Call +971 4 392 0930. 24/7 support.',
    keywords: 'contact travel agency Dubai, corporate travel quote Dubai, Pluto Travels Business Bay',
  },
  '/corporate': {
    title: 'Corporate Travel Agency Dubai | Pluto Travels',
    description:
      'Corporate travel agency in Dubai for UAE and global businesses. Negotiated fares, policy compliance and 24/7 support. IATA-accredited since 2007.',
    keywords: 'corporate travel agency Dubai, business travel Dubai, corporate travel desk UAE',
  },
  '/corporate-travel': {
    title: 'Corporate Travel Management Dubai | Pluto Travels',
    description:
      'End-to-end corporate travel management in Dubai — booking, policy, reporting and 24/7 assistance. Reduce spend and improve compliance. Request a demo.',
    keywords: 'corporate travel management Dubai, business travel management Dubai, travel management company UAE',
  },
  '/mice': {
    title: 'MICE Company Dubai | Meetings, Incentives & Events',
    description:
      'MICE event management in Dubai covering meetings, incentives, conferences and exhibitions. End-to-end planning, venues and group travel. Get a quote.',
    keywords: 'MICE company Dubai, MICE event management Dubai, incentive travel Dubai',
  },
  '/industries': {
    title: 'Specialized Industry Travel Dubai | Pluto Travels',
    description:
      'Sector-specific corporate travel for energy, marine crew, mining and sports teams in the UAE — safety protocols, crew rotation and project logistics.',
    keywords: 'energy sector travel UAE, marine crew travel Dubai, mining sector travel, sports team travel UAE',
  },
  '/platinum': {
    title: 'Platinum Travel Concierge Dubai | Pluto Travels',
    description:
      'Platinum concierge for HNI clients in Dubai — private aviation, luxury hotels, exclusive access and 24/7 white-glove service. Plan your VIP journey.',
    keywords: 'luxury travel agency Dubai, VIP travel concierge Dubai, platinum travel Dubai',
  },
  '/luxury-travel': {
    title: 'Luxury Travel Agency Dubai | Pluto Travels',
    description:
      'Luxury travel agency in Dubai for discerning travellers — exclusive hotels, bespoke itineraries and 24/7 concierge. IATA-accredited since 2007.',
    keywords: 'luxury travel agency Dubai, VIP travel Dubai, HNI travel services UAE',
  },
  '/holidays': {
    title: 'Dubai Holiday Packages | Pluto Travels',
    description:
      'Curated holiday packages from Dubai covering the Maldives, Europe, CIS and more. Flights, hotels and visas handled end-to-end. Plan your escape.',
    keywords: 'Dubai holiday packages, holiday packages from Dubai, luxury holidays UAE',
  },
  '/services': {
    title: 'Travel Services Dubai | Flights, Hotels & Visas',
    description:
      'Complete travel services in Dubai — flights, hotels, visas, insurance, transfers and concierge. One partner for corporate and leisure travel.',
    keywords: 'travel services Dubai, visa assistance Dubai, flight booking Dubai',
  },
  '/destinations': {
    title: 'Travel Destinations from Dubai | Pluto Travels',
    description:
      'Explore destinations worldwide with Pluto Travels — corporate hubs, leisure escapes and visa-friendly routes from the UAE. Plan your next trip.',
    keywords: 'destinations from Dubai, travel destinations UAE',
  },
  '/business-travel': {
    title: 'Business Travel Dubai | Pluto Travels',
    description:
      'Business travel solutions in Dubai — corporate fares, flexible booking, policy compliance and 24/7 support for travelling teams. Get a quote.',
    keywords: 'business travel Dubai, corporate flight booking Dubai',
  },
  '/corporate-events': {
    title: 'Corporate Events Travel Dubai | Pluto Travels',
    description:
      'Corporate events travel in Dubai — group bookings, venue coordination, delegate logistics and on-site support. Partner with Pluto Travels for your next event.',
    keywords: 'corporate events travel Dubai, group travel booking Dubai',
  },
  '/first-class-travel': {
    title: 'First Class Travel Dubai | Pluto Travels',
    description:
      'First class and premium cabin travel from Dubai. Expert booking, upgrades and VIP airport services for executives. Book with Pluto Travels.',
    keywords: 'first class travel Dubai, premium business travel UAE',
  },
  '/personal': {
    title: 'Personal Travel Planning Dubai | Pluto Travels',
    description:
      'Personal travel planning in Dubai — bespoke holidays, honeymoons, family trips and exclusive experiences, with white-glove service since 2007. Request a quote.',
    keywords: 'personal travel Dubai, leisure travel agency Dubai',
  },
  '/visa/africa': {
    title: 'Africa Visa Services Dubai | Pluto Travels',
    description:
      'Outbound visa assistance from Dubai for Morocco, Nigeria, South Africa, Tanzania and more African destinations. Document guidance included.',
    keywords: 'Africa visa Dubai, Morocco visa UAE, Nigeria visa Dubai, outbound visa assistance Dubai',
  },
  '/visa/middle-east': {
    title: 'Middle East Visa Services Dubai | Pluto Travels',
    description:
      'Visa assistance from Dubai for Saudi Arabia, Qatar, Kuwait, Oman and other Middle East destinations. Document checklists and status updates handled.',
    keywords: 'Middle East visa Dubai, Saudi visa UAE, Qatar visa Dubai, Gulf visa assistance',
  },
  '/visa/europe': {
    title: 'Europe & Schengen Visa Services Dubai | Pluto Travels',
    description:
      'Schengen and UK visa assistance from Dubai for France, Germany, Italy, Spain, Switzerland and more. Documentation guidance and application support.',
    keywords: 'Schengen visa Dubai, Europe visa UAE, UK visa Dubai, visa assistance Dubai',
  },
  '/visa/asia': {
    title: 'Asia Visa Services Dubai | Pluto Travels',
    description:
      'Outbound visa assistance from Dubai for China, Japan, India, Thailand, Singapore and other Asian destinations. Document review and application support included.',
    keywords: 'Asia visa Dubai, China visa UAE, Japan visa Dubai, Thailand visa assistance',
  },
  '/visa/canada': {
    title: 'Canada Visa Services Dubai | Pluto Travels',
    description:
      'Canada visa assistance from Dubai for UAE residents — document checklists, application guidance and processing support from our experienced visa team.',
    keywords: 'Canada visa Dubai, Canada visa UAE residents, apply Canada visa Dubai',
  },
  '/visa/usa': {
    title: 'USA Visa Services Dubai | Pluto Travels',
    description:
      'USA visa assistance from Dubai for UAE residents — application guidance, documentation review and appointment support from our experienced visa team.',
    keywords: 'USA visa Dubai, US visa UAE residents, apply US visa Dubai',
  },
  '/visa/cis': {
    title: 'CIS Visa Services Dubai | Pluto Travels',
    description:
      'Visa assistance from Dubai for Russia, Kazakhstan, Ukraine, Belarus and other CIS destinations. Document checklists and application support from our Dubai team.',
    keywords: 'Russia visa Dubai, Kazakhstan visa UAE, CIS visa assistance Dubai',
  },
  '/travel-agency-business-bay-dubai': {
    title: 'Travel Agency Business Bay Dubai | Pluto Travels',
    description:
      'IATA travel agency in Business Bay, Dubai, at Office 2805, Prism Tower. Corporate, MICE, luxury and visa services. Call +971 4 392 0930.',
    keywords: 'travel agency Business Bay, travel agency near me Dubai, Business Bay travel agency',
  },
  '/corporate-travel-energy': {
    title: 'Corporate Travel for Energy Sector UAE | Pluto Travels',
    description:
      'Corporate travel for energy, oil and gas companies in the UAE — offshore rotations, remote sites, safety compliance and 24/7 emergency support. Request a quote.',
    keywords: 'corporate travel energy sector UAE, oil gas travel Dubai, energy sector corporate travel',
  },
  '/marine-crew-travel-dubai': {
    title: 'Marine & Crew Travel Dubai | Pluto Travels',
    description:
      'Marine crew travel and shipping logistics managed from Dubai — crew rotation, port coordination, visas and emergency rebooking for shipping sector operations.',
    keywords: 'marine crew travel Dubai, crew travel management UAE, shipping travel Dubai',
  },
  '/mining-sector-travel': {
    title: 'Mining Sector Corporate Travel UAE | Pluto Travels',
    description:
      'Mining sector travel managed from the UAE — remote project sites, team rotations, equipment logistics and safety protocols for mining operations.',
    keywords: 'mining sector travel UAE, mining corporate travel Dubai',
  },
  '/sports-team-travel': {
    title: 'Sports Team Travel Management UAE | Pluto Travels',
    description:
      'Sports team travel management in the UAE covering fixtures, tournaments, group flights, hotels and MICE logistics, with 24/7 support for sports organizations.',
    keywords: 'sports team travel management UAE, sports event travel Dubai, team travel booking Dubai',
  },
  '/qatar-visa-from-dubai': {
    title: 'Qatar Visa from Dubai | Pluto Travels',
    description:
      'Qatar visa from Dubai for UAE residents — Hayya, tourist and business visas. Document checklist, application support and status tracking from our visa team.',
    keywords: 'Qatar visa from Dubai, Qatar visa UAE residents, apply Qatar visa Dubai',
  },
  '/bishkek-holiday-packages-dubai': {
    title: 'Bishkek Holiday Packages from Dubai | Pluto Travels',
    description:
      'Bishkek and Kyrgyzstan holiday packages from Dubai — flights, hotels, city tours and mountain escapes at competitive rates. Request a package quote.',
    keywords: 'Bishkek holiday packages Dubai, Kyrgyzstan tour from Dubai, Bishkek travel UAE',
  },
  '/group-travel-booking-dubai': {
    title: 'Group Travel Booking Dubai | Pluto Travels',
    description:
      'Group travel booking in Dubai for corporate delegations, incentives, family groups and events. Block fares, coordinated itineraries and support.',
    keywords: 'group travel booking Dubai, group travel agency UAE',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Pluto Travels LLC Dubai',
    description:
      'Privacy policy for Pluto Travels LLC, explaining how we collect, use, store and protect the personal data of travellers and corporate clients we work with.',
    noindex: true,
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Pluto Travels LLC Dubai',
    description:
      'Terms and conditions governing the use of Pluto Travels services, bookings and this website for corporate, leisure and visa clients based in the UAE and abroad.',
    noindex: true,
  },
  '/business-landing': {
    title: 'Corporate & Group Travel Dubai | Pluto Travels',
    description:
      'Structured group travel and corporate travel solutions from Dubai, with dedicated account management and a global network. Request a consultation.',
    keywords: 'corporate group travel Dubai, business travel solutions UAE',
  },
  '/travel-consultation': {
    title: 'Book a Travel Consultation | Pluto Travels Dubai',
    description:
      'Book a 1:1 consultation with Dubai-based travel specialists for luxury holidays, corporate travel management and visa assistance. Pluto Travels LLC.',
    keywords:
      'luxury holidays Dubai, corporate travel Dubai, visa assistance Dubai, travel consultation Dubai, travel agency Dubai',
  },
  '/crisis': {
    title: 'Emergency Travel Assistance | Pluto Travels Dubai',
    description: 'Emergency flight and travel support during regional disruptions from Pluto Travels Dubai, with 24/7 assistance for travellers who need urgent rebooking help.',
    noindex: true,
  },
  '/crisis/form': {
    title: 'Emergency Travel Request | Pluto Travels',
    description: 'Submit an emergency travel request to Pluto Travels Dubai and our 24/7 team will contact you to arrange urgent rebooking or travel support as quickly as possible.',
    noindex: true,
  },
  '/thank-you': {
    title: 'Thank You | Pluto Travels',
    description: 'Thank you for contacting Pluto Travels. A member of our Dubai team will be in touch shortly to help with your corporate, luxury or visa travel request.',
    noindex: true,
  },
  '/blog/dubai-visa-vs-uae-visa-is-there-a-difference': {
    title: 'Dubai Visa vs UAE Visa: Is There a Difference?',
    description:
      'Is a Dubai visa different from a UAE visa? How the terms relate, UAE visa types, validity vs duration of stay and what to check before you travel.',
    keywords: 'Dubai visa vs UAE visa, UAE visa types, UAE visa validity, Dubai visa Pluto Travels',
    ogType: 'article',
  },
  '/blog/why-business-trips-more-expensive-2026-guide-uae-companies': {
    title: 'Why Are Business Trips Getting More Expensive in 2026?',
    description:
      'Why business travel costs are rising in 2026 — airfare, fuel and airline capacity — and how UAE companies can control spend with policy, planning and reporting.',
    keywords: 'business travel costs 2026, corporate travel budget UAE, business travel expensive, corporate travel management Dubai',
    ogType: 'article',
  },
  '/blog/how-to-choose-corporate-travel-agency-dubai-10-questions': {
    title: 'How to Choose a Corporate Travel Agency in Dubai',
    description:
      'The 10 questions to ask before choosing a corporate travel agency in Dubai — support, disruption handling, booking platforms, cost control and duty of care.',
    keywords: 'corporate travel agency Dubai, business travel agency UAE, corporate travel management company Dubai',
    ogType: 'article',
  },
  '/blog/schengen-visa-rejection-reasons-common-mistakes': {
    title: 'Schengen Visa Rejection: 15 Common Mistakes',
    description:
      'The 15 most common Schengen visa rejection reasons — financial proof, unexplained deposits, weak itineraries and insurance gaps — and how to avoid each one.',
    keywords: 'Schengen visa rejection reasons, Schengen visa refused, Schengen visa mistakes, Schengen visa application UAE',
    ogType: 'article',
  },
  '/blog/best-eid-staycation-deals-uae-2026': {
    title: 'Best Eid Staycation Deals in the UAE (2026)',
    description:
      'Top Eid staycation hotel deals in the UAE — Fujairah, Abu Dhabi, Dubai and RAK resorts with beach access, family packages and 2026 booking tips.',
    keywords: 'Eid staycation UAE, Eid hotel deals Dubai, Eid packages Abu Dhabi, UAE holiday deals 2026',
    ogType: 'article',
  },
  '/blog/plan-unforgettable-luxury-celebrations-corporate-events-2026': {
    title: 'Plan Luxury Celebrations & Corporate Events in 2026',
    description:
      'Plan unforgettable luxury celebrations and corporate events in the UAE — milestone parties, MICE, team building and incentive trips handled end-to-end.',
    keywords: 'luxury celebrations Dubai, corporate events UAE, MICE planning 2026, incentive travel Dubai',
    ogType: 'article',
  },
  '/blog/7-common-travel-booking-mistakes-how-to-avoid': {
    title: '7 Common Travel Booking Mistakes to Avoid',
    description:
      'Avoid costly travel booking mistakes — late bookings, visa errors, cheap fares and no insurance among them. Expert tips for stress-free travel from the UAE.',
    keywords: 'travel booking mistakes, travel planning tips UAE, avoid travel errors Dubai',
    ogType: 'article',
  },
  '/blog/what-happens-if-you-miss-your-flight-travel-guide': {
    title: 'What Happens If You Miss Your Flight? Full Guide',
    description:
      'Missed your flight from Dubai or the UAE? A step-by-step rebooking guide covering airline policies, ticket types, costs, insurance and 24/7 travel support.',
    keywords: 'missed flight what to do, missed flight Dubai, flight rebooking UAE, travel emergency',
    ogType: 'article',
  },
  '/blog/luxury-travel-trends-2026-experiences-over-hotel-stays': {
    title: 'Luxury Travel Trends 2026: Experiences Over Hotels',
    description:
      'Why HNI travellers in 2026 are choosing curated experiences over traditional luxury hotels — personalisation, private dining and yacht travel.',
    keywords: 'luxury travel trends 2026, experiential travel Dubai, high-end travel experiences UAE',
    ogType: 'article',
  },
  '/blog/how-to-find-cheap-flights-without-sacrificing-comfort': {
    title: 'How to Find Cheap Flights Without Losing Comfort',
    description:
      'Proven tips to save on airfare from the UAE without rough travel — booking timing, flexible routes, hidden fees, comfort hacks and expert flight deal guidance.',
    keywords: 'cheap flights Dubai, affordable flights UAE, save money on airfare, flight booking tips',
    ogType: 'article',
  },
  '/blog/best-luxury-staycation-fujairah-48-hour-escape': {
    title: 'Best Luxury Staycation in Fujairah: 48-Hour Escape',
    description:
      'Complete Fujairah luxury staycation guide — top resorts, a 48-hour itinerary, diving, wellness and how to get there from Dubai in under 2 hours.',
    keywords: 'Fujairah staycation, luxury staycation UAE, Fujairah resorts, weekend escape from Dubai',
    ogType: 'article',
  },
  '/blog/corporate-travel-policy-guide-uae-companies': {
    title: 'Corporate Travel Policy Guide for UAE Companies',
    description:
      'How to build a corporate travel policy for UAE companies — approvals, budgets, duty of care and booking rules. An expert guide from the Pluto Travels team.',
    keywords: 'corporate travel policy UAE, business travel policy Dubai',
    ogType: 'article',
  },
  '/blog/mice-dubai-planners-guide-2026': {
    title: "MICE in Dubai: A Planner's Guide (2026)",
    description:
      'A complete MICE planning guide for Dubai — venues, incentives, visas, logistics and best practices for meetings, conferences and exhibitions in 2026.',
    keywords: 'MICE Dubai guide, event planning Dubai 2026',
    ogType: 'article',
  },
  '/blog/best-time-plan-corporate-incentive-trips-uae': {
    title: 'Best Time to Plan Corporate Incentive Trips (UAE)',
    description:
      'When to plan corporate incentive trips from the UAE — seasons, budgeting, lead times and destination tips for HR and event teams planning a reward programme.',
    keywords: 'corporate incentive trips UAE, incentive travel planning Dubai',
    ogType: 'article',
  },
  '/blog/experiencing-ramadan-in-the-uae-customs-tips-travel-guide': {
    title: 'Experiencing Ramadan in the UAE: Customs & Tips',
    description:
      'A visitor\'s guide to Ramadan in the UAE — local customs, fasting etiquette, Iftar and Suhoor, dress codes and practical tips for a respectful, enjoyable stay.',
    keywords: 'Ramadan UAE guide, Ramadan Dubai etiquette, visiting Dubai during Ramadan, UAE travel customs',
    ogType: 'article',
  },
  '/blog/top-visa-free-visa-on-arrival-destinations-uae-residents-2026': {
    title: 'Top Visa-Free Destinations for UAE Residents (2026)',
    description:
      'A guide for UAE residents on visa-free entry, visa on arrival and e-visa options — Maldives, Georgia, Thailand, Sri Lanka, Oman and more for easy 2026 travel.',
    keywords: 'visa free countries UAE residents, visa on arrival Dubai, e-visa UAE residents 2026',
    ogType: 'article',
  },
  '/blog/ultimate-travel-guide-best-things-to-do-dubai-2026': {
    title: 'Ultimate Guide: Best Things to Do in Dubai (2026)',
    description:
      'A comprehensive guide to Dubai\'s top attractions, beaches, desert safaris, culture, shopping, dining and events — everything you need to plan the perfect trip.',
    keywords: 'things to do in Dubai 2026, Dubai attractions guide, Dubai travel guide',
    ogType: 'article',
  },
  '/blog/uae-resilience-in-action-navigating-regional-challenges': {
    title: 'UAE Resilience: Navigating Regional Challenges',
    description:
      'How the UAE government, private sector and community worked together to protect residents, support stranded travellers and maintain stability during disruption.',
    keywords: 'UAE travel resilience, UAE regional disruption support, stranded travellers UAE',
    ogType: 'article',
  },
  '/blog/eid-al-fitr-travel-top-destinations-2026': {
    title: 'Eid Al Fitr Travel: Top Destinations for 2026',
    description:
      'Discover the best destinations for Eid Al Fitr travel in 2026, from Azerbaijan and Georgia to Kenya and Russia, with festive cultural experiences.',
    keywords: 'Eid Al Fitr travel destinations, Eid holiday ideas 2026, Eid travel from Dubai',
    ogType: 'article',
  },
  '/blog/5-unique-corporate-team-building-ideas-that-actually-work': {
    title: '5 Corporate Team-Building Ideas That Actually Work',
    description:
      'Proven corporate team-building ideas that go beyond routine activities, improve employee engagement and create meaningful connections for UAE-based teams.',
    keywords: 'corporate team building ideas UAE, team building Dubai, employee engagement activities',
    ogType: 'article',
  },
  '/blog/best-affordable-travel-destinations-2026': {
    title: 'Best Affordable Travel Destinations for 2026',
    description:
      'Discover budget-friendly international destinations that offer excellent value for money in 2026, with practical tips for planning an affordable UAE departure.',
    keywords: 'affordable travel destinations 2026, budget travel from Dubai, cheap international destinations',
    ogType: 'article',
  },
  '/blog/corporate-travel-management-best-practices-2026-part1': {
    title: 'Corporate Travel Management Best Practices, Part 1',
    description:
      'Essential strategies for optimising corporate travel spend, improving employee satisfaction and maintaining policy compliance across a UAE travel programme.',
    keywords: 'corporate travel management best practices, travel policy compliance, corporate travel spend',
    ogType: 'article',
  },
  '/blog/corporate-travel-management-best-practices-2026-part2': {
    title: 'Corporate Travel Management Best Practices, Part 2',
    description:
      'Advanced strategies for 24/7 traveller support, data-driven decisions and sustainable corporate travel programmes for growing UAE businesses in 2026.',
    keywords: 'corporate travel management strategy, sustainable corporate travel, data-driven travel programme',
    ogType: 'article',
  },
  '/blog/top-european-destinations-schengen-visa-guide-pluto-travels': {
    title: 'Top European Destinations with a Schengen Visa',
    description:
      'UAE residents can explore multiple European countries on one trip with a Schengen visa. Discover Italy, Greece, Spain, Austria and hidden gems worth visiting.',
    keywords: 'Schengen visa destinations, Europe trip Schengen visa, Italy Greece Spain visa UAE',
    ogType: 'article',
  },
  '/blog/why-uae-companies-switching-corporate-travel-management-2026': {
    title: 'Why UAE Companies Are Switching Travel Management',
    description:
      'Why businesses in Dubai, Abu Dhabi and across the UAE are moving from DIY booking to corporate travel management to cut hidden costs and gain control of spend.',
    keywords: 'corporate travel management UAE, switch travel management company, DIY booking vs managed travel',
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
        'Visa guidance for UAE residents — requirements, documents and processing support from the Pluto Travels team, covering destinations worldwide from Dubai.',
      keywords: 'visa Dubai, visa assistance UAE',
    };
  }
  if (pathname.startsWith('/package/')) {
    return {
      title: 'Holiday Package Details | Pluto Travels Dubai',
      description: 'Explore this curated holiday package from Dubai — flights, hotels, activities and visa support bundled into one itinerary by the Pluto Travels team.',
    };
  }
  if (pathname.startsWith('/mice/')) {
    return {
      title: 'MICE Event Solutions Dubai | Pluto Travels',
      description: 'Specialized MICE event travel and logistics in Dubai from Pluto Travels, covering meetings, incentives, conferences and exhibitions end-to-end.',
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
