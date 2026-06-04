import type { LucideIcon } from 'lucide-react';
import {
  Zap,
  Anchor,
  HardHat,
  Trophy,
  MapPin,
  FileText,
  Plane,
  Mountain,
} from 'lucide-react';

export type LandingPageConfig = {
  slug: string;
  h1: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  icon: LucideIcon;
  intro: string[];
  features: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedLinks: Array<{ href: string; label: string }>;
  ctaLabel?: string;
  proofPoints?: string[];
};

export const LANDING_PAGES: Record<string, LandingPageConfig> = {
  'travel-agency-business-bay-dubai': {
    slug: 'travel-agency-business-bay-dubai',
    h1: 'Travel Agency in Business Bay, Dubai',
    subtitle: 'IATA-accredited corporate & luxury travel — Office 2805, Prism Tower',
    heroImage: '/corporate-travel-terminal.png',
    heroImageAlt: 'Pluto Travels corporate travel agency office Business Bay Dubai',
    icon: MapPin,
    intro: [
      'Pluto Travels LLC is an IATA-accredited travel agency in Business Bay, Dubai — serving corporate clients, MICE planners, and luxury travelers since 2007.',
      'Visit us at Office 2805, Prism Tower, or reach our team 24/7 for corporate travel quotes, visa assistance, and white-glove concierge services.',
      'With 244 Google reviews at 4.6 stars and 98.7% client retention, we are one of Dubai\'s most trusted travel partners for B2B and HNI travel.',
    ],
    proofPoints: ['244 Google reviews · 4.6★', 'IATA accredited · Est. 2007', '24/7 travel support', '98.7% client retention'],
    features: [
      { title: 'Corporate & MICE Travel', description: 'Dedicated account management, negotiated fares, and policy-compliant booking for UAE businesses.' },
      { title: 'Luxury & VIP Concierge', description: 'First class, private aviation, exclusive hotels, and bespoke itineraries for discerning travelers.' },
      { title: 'Visa & Holiday Services', description: 'Outbound visa processing, Schengen support, and curated holiday packages from Dubai.' },
      { title: 'Sector Specialists', description: 'Energy, marine crew, mining, and sports team travel — logistics built for complex operations.' },
    ],
    faqs: [
      { question: 'Where is Pluto Travels located in Business Bay?', answer: 'Office 2805, Prism Tower, Business Bay, Dubai, UAE. We welcome appointments for corporate travel consultations.' },
      { question: 'What are your office hours?', answer: 'Our travel desk operates 24/7 for corporate clients and emergencies. Office visits are by appointment.' },
      { question: 'Do you handle corporate travel only?', answer: 'No — we serve corporate, MICE, luxury leisure, visa, and holiday clients from our Business Bay headquarters.' },
    ],
    relatedLinks: [
      { href: '/corporate-travel', label: 'Corporate Travel Management' },
      { href: '/mice', label: 'MICE & Events' },
      { href: '/contact', label: 'Contact & Directions' },
    ],
  },
  'corporate-travel-energy': {
    slug: 'corporate-travel-energy',
    h1: 'Corporate Travel for Energy & Oil/Gas Sector UAE',
    subtitle: 'Offshore rotations, remote sites & safety-compliant travel logistics',
    heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80',
    heroImageAlt: 'Energy sector corporate travel offshore oil gas UAE',
    icon: Zap,
    intro: [
      'Energy and oil/gas companies face unique travel challenges — remote locations, strict safety requirements, weather disruptions, and regulatory compliance across borders.',
      'Pluto Travels provides sector-specific corporate travel for energy clients in the UAE: offshore rotations, emergency rebooking, and dedicated protocols for high-risk environments.',
    ],
    proofPoints: ['50+ energy sector clients', 'Emergency response protocols', 'Remote site expertise', '24/7 duty-of-care support'],
    features: [
      { title: 'Offshore & Remote Travel', description: 'Coordinated flights, helicopter transfers, and accommodation near project sites worldwide.' },
      { title: 'Safety & Compliance', description: 'Travel aligned with HSE requirements, insurance, and company policy — every booking documented.' },
      { title: 'Emergency Response', description: '24/7 rebooking when weather, strikes, or operational changes disrupt schedules.' },
      { title: 'Cost Control', description: 'Negotiated corporate fares and consolidated reporting — clients report up to 30% savings.' },
    ],
    faqs: [
      { question: 'Do you manage crew rotations for offshore projects?', answer: 'Yes — we coordinate multi-leg itineraries, visa requirements, and schedule changes for rotating teams.' },
      { question: 'Can you support last-minute operational changes?', answer: 'Our 24/7 desk handles urgent rebooking, alternative routing, and on-ground assistance globally.' },
    ],
    relatedLinks: [
      { href: '/industries', label: 'All Specialized Industries' },
      { href: '/corporate-travel', label: 'Corporate Travel Management' },
      { href: '/marine-crew-travel-dubai', label: 'Marine & Crew Travel' },
    ],
  },
  'marine-crew-travel-dubai': {
    slug: 'marine-crew-travel-dubai',
    h1: 'Marine & Crew Travel Dubai',
    subtitle: 'Crew rotation, port logistics & shipping sector travel management',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80',
    heroImageAlt: 'Marine crew travel management shipping port Dubai',
    icon: Anchor,
    intro: [
      'Shipping and marine operators depend on precise crew rotation and port-side logistics. Delays cost money; missed connections strand crew.',
      'Pluto Travels is a Dubai-based marine crew travel specialist — managing sign-on/sign-off, visa coordination, and emergency rebooking for 75+ marine clients.',
    ],
    proofPoints: ['75+ marine & shipping clients', 'Port coordination expertise', 'Crew rotation management', 'International regulatory support'],
    features: [
      { title: 'Crew Rotation Planning', description: 'End-to-end itineraries aligned with vessel schedules and port windows.' },
      { title: 'Port & Visa Logistics', description: 'Seafarer visas, transit rules, and documentation handled by experienced agents.' },
      { title: 'Group & Block Bookings', description: 'Coordinated travel for full crew changes and multi-national teams.' },
      { title: '24/7 Disruption Support', description: 'Immediate rebooking when ports, flights, or weather change plans.' },
    ],
    faqs: [
      { question: 'What is marine crew travel management?', answer: 'It is specialized corporate travel for shipping companies — coordinating crew joiners, leavers, and emergency replacements across global routes.' },
      { question: 'Do you operate outside the UAE?', answer: 'Yes — we book and support crew travel worldwide with Dubai as our operations hub.' },
    ],
    relatedLinks: [
      { href: '/corporate-travel-energy', label: 'Energy Sector Travel' },
      { href: '/industries', label: 'Industry Solutions' },
      { href: '/contact', label: 'Request a Marine Travel Quote' },
    ],
  },
  'mining-sector-travel': {
    slug: 'mining-sector-travel',
    h1: 'Mining Sector Corporate Travel UAE',
    subtitle: 'Project site logistics, team rotations & remote operations support',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80',
    heroImageAlt: 'Mining sector corporate travel project site UAE',
    icon: HardHat,
    intro: [
      'Mining operations require travel to remote project sites, often under tight timelines and strict safety protocols.',
      'Pluto Travels delivers mining-sector corporate travel — coordinating multi-leg journeys, equipment-adjacent logistics, and team movements for 100+ project-based clients.',
    ],
    proofPoints: ['100+ project-based clients', 'Remote site expertise', 'Team coordination', 'Safety-first protocols'],
    features: [
      { title: 'Project-Based Planning', description: 'Travel schedules built around project milestones and shift patterns.' },
      { title: 'Remote Site Access', description: 'Flights, charters, and ground transport to challenging destinations.' },
      { title: 'Team Movements', description: 'Bulk bookings for engineers, contractors, and management rotations.' },
      { title: 'Compliance & Reporting', description: 'Policy-compliant booking with full expense visibility for finance teams.' },
    ],
    faqs: [
      { question: 'Can you handle travel to remote mining sites?', answer: 'Yes — we plan multi-modal journeys including charter connections where commercial routes are limited.' },
    ],
    relatedLinks: [
      { href: '/corporate-travel-energy', label: 'Energy Travel' },
      { href: '/corporate-travel', label: 'Corporate Travel Management' },
      { href: '/group-travel-booking-dubai', label: 'Group Travel Booking' },
    ],
  },
  'sports-team-travel': {
    slug: 'sports-team-travel',
    h1: 'Sports Team & Event Travel Management UAE',
    subtitle: 'Fixtures, tournaments, MICE logistics & group travel for sports organizations',
    heroImage: 'https://images.unsplash.com/photo-1574629810360-7dfe2e195786?w=1600&q=80',
    heroImageAlt: 'Sports team travel management UAE tournaments events',
    icon: Trophy,
    intro: [
      'Sports organizations need reliable group travel — fixtures, training camps, international tournaments, and sponsor events.',
      'Pluto Travels manages sports team travel across the UAE and globally: group fares, hotel blocks, visa support, and on-site coordination for events of any scale.',
    ],
    proofPoints: ['Group fare negotiation', 'Tournament logistics', 'Visa & documentation', '24/7 event support'],
    features: [
      { title: 'Team & Squad Travel', description: 'Coordinated flights and hotels for entire squads, staff, and equipment allowances.' },
      { title: 'Tournament Logistics', description: 'Multi-city itineraries, match-day timing, and contingency planning.' },
      { title: 'MICE for Sports', description: 'Sponsor events, award ceremonies, and fan experiences alongside competitive travel.' },
      { title: 'Visa & Documentation', description: 'Fast-track support for athletes, coaches, and support staff.' },
    ],
    faqs: [
      { question: 'Do you manage travel for international tournaments?', answer: 'Yes — we plan multi-leg group travel, accommodation blocks, and emergency support for sports federations and clubs.' },
    ],
    relatedLinks: [
      { href: '/mice', label: 'MICE & Events' },
      { href: '/group-travel-booking-dubai', label: 'Group Travel Booking' },
      { href: '/corporate-events', label: 'Corporate Events Travel' },
    ],
  },
  'qatar-visa-from-dubai': {
    slug: 'qatar-visa-from-dubai',
    h1: 'Qatar Visa from Dubai',
    subtitle: 'Hayya, tourist & business visas — application support for UAE residents',
    heroImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80',
    heroImageAlt: 'Qatar visa application from Dubai UAE residents',
    icon: FileText,
    intro: [
      'UAE residents planning trips to Qatar need the right visa type — Hayya, tourist, or business — with correct documentation and timing.',
      'Pluto Travels provides Qatar visa assistance from Dubai: eligibility checks, document preparation, application support, and status tracking.',
    ],
    features: [
      { title: 'Visa Type Guidance', description: 'We help you choose the correct Qatar visa category for your nationality and travel purpose.' },
      { title: 'Document Checklist', description: 'Passport validity, photos, insurance, and supporting letters — reviewed before submission.' },
      { title: 'Application Support', description: 'Step-by-step assistance through official channels to reduce rejections and delays.' },
      { title: 'Travel Packages', description: 'Combine your Qatar visa with flights and hotels for a seamless trip from Dubai.' },
    ],
    faqs: [
      { question: 'Can UAE residents get a Qatar visa on arrival?', answer: 'Rules vary by nationality. We confirm your eligibility and recommend the fastest approved route.' },
      { question: 'How long does a Qatar visa take from Dubai?', answer: 'Processing times depend on visa type — typically 2–7 business days. We advise based on your travel dates.' },
    ],
    relatedLinks: [
      { href: '/visa/africa', label: 'All Visa Services' },
      { href: '/holidays', label: 'Holiday Packages' },
      { href: '/contact', label: 'Apply for Qatar Visa Help' },
    ],
  },
  'bishkek-holiday-packages-dubai': {
    slug: 'bishkek-holiday-packages-dubai',
    h1: 'Bishkek Holiday Packages from Dubai',
    subtitle: 'Kyrgyzstan city breaks, mountain escapes & curated tours for UAE travelers',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
    heroImageAlt: 'Bishkek Kyrgyzstan holiday packages from Dubai',
    icon: Mountain,
    intro: [
      'Bishkek and Kyrgyzstan offer stunning mountain landscapes, nomadic culture, and excellent value — a rising favourite for UAE holidaymakers.',
      'Pluto Travels builds Bishkek holiday packages from Dubai: return flights, hotels, city tours, and optional extensions to Issyk-Kul and the Tian Shan mountains.',
    ],
    features: [
      { title: 'Flights from Dubai', description: 'Competitive return fares on routes via Istanbul, Almaty, or direct options when available.' },
      { title: 'Curated Itineraries', description: '3–7 night packages covering Bishkek, Ala-Archa, Burana Tower, and lake regions.' },
      { title: 'Visa Support', description: 'Guidance on Kyrgyzstan entry requirements for UAE residents and passport holders.' },
      { title: 'Custom Extensions', description: 'Add ski trips, trekking, or corporate incentive elements to your package.' },
    ],
    faqs: [
      { question: 'Do UAE residents need a visa for Kyrgyzstan?', answer: 'Many nationalities enjoy visa-free or e-visa entry. We confirm requirements for your passport before booking.' },
      { question: 'What is included in a Bishkek package?', answer: 'Typical packages include flights, hotel, airport transfers, and guided tours — customized to your budget and dates.' },
    ],
    relatedLinks: [
      { href: '/holidays', label: 'All Holiday Packages' },
      { href: '/destinations', label: 'Destinations' },
      { href: '/contact', label: 'Request Bishkek Package Quote' },
    ],
  },
  'group-travel-booking-dubai': {
    slug: 'group-travel-booking-dubai',
    h1: 'Group Travel Booking Dubai',
    subtitle: 'Corporate delegations, incentives, family groups & event travel',
    heroImage: '/global-business-travel-package.png',
    heroImageAlt: 'Group travel booking corporate delegations Dubai',
    icon: Plane,
    intro: [
      'Group travel requires block fares, synchronized itineraries, and a single point of contact — whether for corporate delegations, incentive trips, or family reunions.',
      'Pluto Travels handles group travel booking in Dubai with negotiated rates, flexible payment terms, and dedicated coordinators for groups of 10 to 500+.',
    ],
    features: [
      { title: 'Corporate Groups', description: 'Board meetings, site visits, and training delegations with policy-compliant booking.' },
      { title: 'Incentive Travel', description: 'Reward trips designed for HR and marketing teams — destinations, activities, and logistics included.' },
      { title: 'Event & MICE Groups', description: 'Conference delegates, exhibition teams, and sponsor groups coordinated end-to-end.' },
      { title: 'Leisure Groups', description: 'Family holidays, wedding groups, and special-interest tours from Dubai.' },
    ],
    faqs: [
      { question: 'What size groups do you handle?', answer: 'From 10-person corporate teams to 500+ delegate events — with scalable support and reporting.' },
    ],
    relatedLinks: [
      { href: '/mice', label: 'MICE & Events' },
      { href: '/corporate-events', label: 'Corporate Events' },
      { href: '/sports-team-travel', label: 'Sports Team Travel' },
    ],
  },
};

export function getLandingPageConfig(slug: string): LandingPageConfig | undefined {
  return LANDING_PAGES[slug];
}

export const LANDING_PAGE_SLUGS = Object.keys(LANDING_PAGES);
