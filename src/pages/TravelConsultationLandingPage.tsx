import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Compass,
  FileCheck,
  Gem,
  Globe,
  Handshake,
  MapPin,
  Phone,
  ShieldAlert,
  UserCheck,
  XCircle,
} from 'lucide-react';
import Container from '../components/Container';
import ConsultationModal from '../components/ConsultationModal';
import JsonLdSchema from '../components/JsonLdSchema';
import { FadeInSection } from '../components/FadeInSection';
import { SITE } from '../lib/siteConfig';

/* -------------------------------------------------------------------------- */
/*                                   Content                                  */
/* -------------------------------------------------------------------------- */

const CTA_LABEL = 'Book a 1:1 Travel Consultation';

const SERVICES: Array<{ id: string; icon: LucideIcon; label: string; blurb: string }> = [
  { id: 'luxury', icon: Gem, label: 'Luxury Travel', blurb: 'For journeys designed around you.' },
  {
    id: 'corporate',
    icon: Briefcase,
    label: 'Corporate Travel',
    blurb: 'For businesses that need travel handled professionally.',
  },
  { id: 'visa', icon: FileCheck, label: 'Visa Assistance', blurb: 'For support navigating the application process.' },
];

const LUXURY_INCLUDES = [
  'Premium flight options',
  '5-star hotels and luxury resorts',
  'Private villas and premium stays',
  'Private transfers',
  'Curated experiences',
  'Personalised itineraries',
  'End-to-end travel assistance',
];

const CORPORATE_PAINS = [
  'Employees searching for flights individually',
  'Last-minute itinerary changes',
  'Multiple bookings across different platforms',
  'Time spent coordinating hotels and transfers',
  'Difficulty keeping travel organised',
  'Urgent requests requiring quick assistance',
  'Administrative teams spending hours managing travel',
];

const CORPORATE_ASSIST = [
  'Business flight bookings',
  'Corporate hotel arrangements',
  'Airport and ground transfers',
  'International business travel',
  'Travel coordination',
  'Booking changes and travel support',
  'Dedicated travel assistance',
];

const VISA_ASSIST = [
  'Guidance on application requirements',
  'Documentation assistance',
  'Application process support',
  'Destination-specific visa assistance',
  'Business travel visa support',
  'Family travel visa assistance',
  'Support throughout the applicable process',
];

const THREE_WAYS: Array<{ icon: LucideIcon; title: string; description: string; items: string[]; gradient: string }> = [
  {
    icon: Gem,
    title: 'Luxury Travel',
    description: 'For individuals, couples and families looking for premium international travel experiences.',
    items: [
      'Luxury resorts and hotels',
      'Private villas',
      'Premium flights',
      'Personalised itineraries',
      'Private transfers',
      'Curated experiences',
    ],
    gradient: 'from-primary-teal to-primary-navy',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'For businesses looking for a more organised way to manage employee and executive travel.',
    items: [
      'Business flights',
      'Corporate accommodation',
      'Transfers',
      'Travel coordination',
      'Booking assistance',
      'Ongoing corporate travel support',
    ],
    gradient: 'from-primary-coral to-primary-orange',
  },
  {
    icon: FileCheck,
    title: 'Visa Assistance',
    description: 'For travellers who need support understanding and navigating visa application requirements.',
    items: [
      'Application guidance',
      'Documentation support',
      'Leisure travel visas',
      'Business travel visas',
      'Family travel assistance',
    ],
    gradient: 'from-primary-navy to-primary-teal',
  },
];

const LUXURY_PAINS = [
  'Inconvenient flight timings',
  'The wrong hotel for your travel style',
  'Endless online research',
  'Poorly coordinated transfers',
  'Generic itineraries',
  'Fully booked premium experiences',
  'Last-minute availability problems',
];

const LUXURY_PERFECT_FOR = [
  'Couples and honeymoons',
  'Luxury family holidays',
  'Birthdays and anniversaries',
  'Proposals and milestone celebrations',
  'Private and exclusive escapes',
  'Bucket-list journeys',
  'Festive and winter holidays',
];

const PEAK_DEMAND = [
  'Premium flight options',
  'Popular luxury resorts',
  'Preferred suites and room categories',
  'Private villas',
  'Family accommodation',
  'Premium transfers',
  'Popular experiences and reservations',
];

const COMPANY_MANAGES = [
  'Employee flight requirements',
  'Hotel accommodation',
  'Airport and ground transfers',
  'Multiple travellers and itineraries',
  'Last-minute booking changes',
  'International travel coordination',
  'Ongoing travel assistance',
];

const COMPANY_SUITABLE_FOR = [
  'SMEs',
  'Established businesses',
  'Business owners and entrepreneurs',
  'Executives and leadership teams',
  'Companies with travelling employees',
  'Organisations with international travel requirements',
  'Businesses managing frequent travel',
];

const VISA_FACTORS: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Globe, label: 'Nationality' },
  { icon: MapPin, label: 'Destination' },
  { icon: Compass, label: 'Purpose of travel' },
  { icon: CalendarDays, label: 'Travel dates' },
  { icon: UserCheck, label: 'Personal circumstances' },
];

const WHY_PLUTO: Array<{ icon: LucideIcon; title: string; description: string; gradient: string }> = [
  {
    icon: Handshake,
    title: 'One Travel Partner',
    description: 'Bring different travel requirements together rather than coordinating with multiple providers.',
    gradient: 'from-primary-teal to-primary-navy',
  },
  {
    icon: UserCheck,
    title: 'Personalised Assistance',
    description: "Your requirements come first, whether that's a luxury holiday, corporate trip or visa application.",
    gradient: 'from-primary-coral to-primary-orange',
  },
  {
    icon: Gem,
    title: 'Luxury Travel Planning',
    description: 'Premium accommodation, flights, transfers and experiences selected around your preferences.',
    gradient: 'from-accent-gold to-primary-orange',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel Support',
    description: 'Travel coordination for businesses, executives and travelling employees.',
    gradient: 'from-primary-navy to-primary-teal',
  },
  {
    icon: FileCheck,
    title: 'Visa Assistance',
    description: 'Support navigating visa requirements and applications for supported destinations.',
    gradient: 'from-primary-teal to-primary-navy',
  },
  {
    icon: MapPin,
    title: 'Dubai-Based Travel Specialists',
    description: 'A UAE-based team helping individuals, families and businesses with international travel requirements.',
    gradient: 'from-primary-coral to-primary-orange',
  },
];

type Faq = { question: string; intro?: string; items?: string[]; outro?: string };

const FAQS: Faq[] = [
  {
    question: 'What travel services does Pluto Travels provide?',
    intro: 'Pluto Travels provides services across three primary areas:',
    items: ['Luxury Travel', 'Corporate Travel', 'Visa Assistance'],
    outro: 'We help individuals, families and businesses with a range of international travel requirements.',
  },
  {
    question: 'Where is Pluto Travels based?',
    intro:
      'Pluto Travels LLC is based in Dubai, UAE, providing travel planning and assistance for UAE-based travellers and businesses.',
  },
  {
    question: 'Can Pluto Travels plan my complete luxury holiday?',
    intro: 'Depending on your requirements, we can assist with:',
    items: [
      'Flights',
      'Luxury hotels and resorts',
      'Private villas',
      'Transfers',
      'Experiences',
      'Personalised itinerary planning',
    ],
  },
  {
    question: 'Do you only offer pre-designed holiday packages?',
    intro:
      'No. Our luxury travel service can be personalised around your destination, dates, preferences, occasion, travel style and approximate budget.',
  },
  {
    question: "Can you recommend destinations if I haven't decided where to travel?",
    intro: 'Yes. Share details such as:',
    items: ['Travel dates', 'Number of travellers', 'Preferred weather', 'Interests', 'Travel style', 'Approximate budget'],
    outro: 'Our team can then help you explore suitable options.',
  },
  {
    question: 'Can Pluto Travels manage corporate travel for our company?',
    intro: "Yes. Depending on your organisation's requirements, Pluto Travels can assist with:",
    items: [
      'Business flights',
      'Corporate accommodation',
      'Transfers',
      'Travel coordination',
      'Booking changes',
      'Ongoing travel assistance',
    ],
  },
  {
    question: 'Is corporate travel only for large companies?',
    intro:
      'No. Corporate travel assistance can be relevant for SMEs, business owners, executive teams and larger organisations depending on the nature and frequency of their travel.',
  },
  {
    question: 'Does Pluto Travels provide visa assistance?',
    intro:
      'Yes. Visa assistance is available for supported destinations. Our team can help you understand applicable requirements and provide support through the application process.',
  },
  {
    question: 'Does Pluto Travels guarantee visa approval?',
    intro:
      'No. Visa approval cannot be guaranteed. Final decisions are made by the relevant embassy, consulate or immigration authority. Pluto Travels provides assistance with the application process.',
  },
  {
    question: 'Can you assist with both my visa and travel arrangements?',
    intro:
      'Depending on the destination and your requirements, our team can discuss assistance with both your travel arrangements and the applicable visa process.',
  },
  {
    question: 'How early should I start planning my holiday?',
    intro:
      'This depends on the destination and travel period. For festive periods, winter holidays, Christmas, New Year and other peak travel periods, planning earlier can provide a wider selection of:',
    items: ['Flights', 'Hotels and resorts', 'Preferred room categories', 'Private villas', 'Transfers', 'Experiences'],
  },
  {
    question: 'What happens after I book a consultation?',
    intro:
      "A Pluto Travels specialist will review the information you've shared and contact you to better understand your requirements before discussing relevant options.",
  },
];

const faqToPlainText = (faq: Faq) =>
  [faq.intro, faq.items?.join(', '), faq.outro].filter(Boolean).join(' ');

/* -------------------------------------------------------------------------- */
/*                               Shared building blocks                       */
/* -------------------------------------------------------------------------- */

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

type ConsultCTAProps = {
  onClick: () => void;
  /** "light" = white button for gradient / dark backgrounds, "brand" = site gradient button. */
  tone?: 'brand' | 'light';
  className?: string;
};

const ConsultCTA: React.FC<ConsultCTAProps> = ({ onClick, tone = 'brand', className = '' }) => {
  const reduceMotion = useReducedMotion();
  const toneClasses =
    tone === 'light'
      ? 'bg-white text-primary-navy hover:bg-luxury-canvas shadow-2xl'
      : 'bg-gradient-to-r from-primary-navy via-primary-teal to-primary-coral text-white hover:brightness-110 shadow-lg hover:shadow-xl';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={`group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 sm:w-auto sm:px-9 sm:py-5 sm:text-base ${toneClasses} ${className}`}
      style={{ touchAction: 'manipulation' }}
    >
      <span className="relative z-10">{CTA_LABEL}</span>
      <ArrowRight
        size={20}
        className={`relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${
          tone === 'light' ? 'text-primary-coral' : ''
        }`}
      />
      {!reduceMotion && tone === 'brand' && (
        <motion.span
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </motion.button>
  );
};

const SectionHeading: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  light?: boolean;
  align?: 'center' | 'left';
  className?: string;
}> = ({ eyebrow, title, subtitle, light = false, align = 'center', className = '' }) => (
  <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
    {eyebrow && (
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${
          light ? 'text-accent-gold' : 'text-primary-coral'
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`text-balance text-3xl/[1.25] font-extrabold sm:text-4xl/[1.25] md:text-[2.75rem]/[1.25] ${
        light ? 'text-white' : 'text-luxury-darkBlue'
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg leading-relaxed sm:text-xl ${light ? 'text-white/85' : 'text-gray-600'}`}>{subtitle}</p>
    )}
  </div>
);

type ListTone = 'check' | 'cross' | 'light';

const IconList: React.FC<{ items: string[]; tone?: ListTone; columns?: 1 | 2; className?: string }> = ({
  items,
  tone = 'check',
  columns = 1,
  className = '',
}) => {
  const Icon = tone === 'cross' ? XCircle : CheckCircle2;
  const iconColor = tone === 'cross' ? 'text-primary-coral' : tone === 'light' ? 'text-accent-gold' : 'text-primary-teal';
  const textColor = tone === 'light' ? 'text-white/90' : 'text-gray-700';
  return (
    <ul className={`grid gap-x-8 gap-y-3 ${columns === 2 ? 'sm:grid-cols-2' : ''} ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Icon className={`mt-0.5 flex-shrink-0 ${iconColor}`} size={22} />
          <span className={`text-base leading-snug sm:text-lg ${textColor}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

/** White card wrapped in the site's animated shimmer border (same treatment as the other landing pages). */
const ShimmerCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className="group relative h-full">
    <div className="relative h-full overflow-hidden rounded-3xl shadow-lg shadow-gray-200/80 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
      <div className="client-review-shimmer-ring" aria-hidden />
      <div
        className={`relative z-10 m-[2px] flex h-full flex-col rounded-[calc(1.5rem-2px)] border border-gray-100/80 bg-white transition-transform duration-500 ease-out group-hover:-translate-y-0.5 ${className}`}
      >
        {children}
      </div>
    </div>
  </div>
);

const IconTile: React.FC<{ icon: LucideIcon; gradient: string; size?: 'md' | 'lg' }> = ({
  icon: Icon,
  gradient,
  size = 'md',
}) => (
  <div
    className={`flex flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md ${gradient} ${
      size === 'lg' ? 'h-16 w-16' : 'h-12 w-12'
    }`}
  >
    <Icon className="text-white" size={size === 'lg' ? 30 : 24} />
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

type ServiceDetailProps = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bg: string;
  listHeading: string;
  list: string[];
  onCta: () => void;
  children: React.ReactNode;
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  icon: Icon,
  eyebrow,
  title,
  image,
  imageAlt,
  reverse = false,
  bg,
  listHeading,
  list,
  onCta,
  children,
}) => (
  <FadeInSection id={id} className={`scroll-mt-20 py-14 sm:py-20 ${bg}`}>
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={reverse ? 'lg:order-2' : ''}>
          <div className="mb-4 flex items-center gap-3">
            <IconTile icon={Icon} gradient="from-primary-teal to-primary-navy" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-coral sm:text-sm">{eyebrow}</span>
          </div>
          <h2 className="mb-6 text-3xl/[1.25] font-extrabold text-luxury-darkBlue sm:text-4xl/[1.25]">{title}</h2>
          <div className="space-y-5 text-lg leading-relaxed text-gray-700">{children}</div>
          <div className="mt-8">
            <ConsultCTA onClick={onCta} />
          </div>
        </Reveal>

        <Reveal delay={0.1} className={reverse ? 'lg:order-1' : ''}>
          <div className="relative">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="h-64 w-full rounded-3xl object-cover shadow-xl sm:h-80"
            />
            <div className="relative z-10 -mt-12 px-4 sm:px-8">
              <ShimmerCard className="p-6 sm:p-7">
                <p className="mb-4 text-base font-bold text-luxury-darkBlue sm:text-lg">{listHeading}</p>
                <IconList items={list} />
              </ShimmerCard>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  </FadeInSection>
);

const TravelConsultationLandingPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showSticky, setShowSticky] = useState(false);
  const reduceMotion = useReducedMotion();

  const openConsult = () => setConsultOpen(true);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 640);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-luxury-canvas pb-24 sm:pb-0">
      <JsonLdSchema
        pathname="/travel-consultation"
        type="FAQPage"
        variant="faq-only"
        faqs={FAQS.map((faq) => ({ question: faq.question, answer: faqToPlainText(faq) }))}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/15 bg-gradient-to-r from-primary-navy via-primary-teal to-primary-coral shadow-lg">
        <Container>
          <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
            <Link to="/" className="flex flex-shrink-0 items-center" aria-label="Pluto Travels home">
              <img src="/Pluto_Final_logo.png" alt="Pluto Travels" className="h-9 w-auto sm:h-10" />
            </Link>
            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href={`tel:${SITE.phoneMobile}`}
                className="hidden items-center gap-2 text-sm font-semibold text-white/95 transition-colors hover:text-white sm:flex"
              >
                <Phone size={16} />
                {SITE.phoneMobileDisplay}
              </a>
              <button
                type="button"
                onClick={openConsult}
                className="rounded-lg bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-primary-navy shadow-md transition-colors hover:bg-luxury-canvas sm:px-5 sm:text-sm"
                style={{ touchAction: 'manipulation' }}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-navy via-primary-teal to-primary-coral">
        <img
          src="/global-coverage-hand-globe.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-[0.1] mix-blend-overlay"
        />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-primary-orange/25 blur-3xl" aria-hidden />

        <Container className="relative py-14 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                Pluto Travels LLC &middot; Dubai, UAE
              </span>
              <h1 className="mb-5 text-4xl font-extrabold leading-[1.05] text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl">
                Travel,
                <span className="block text-accent-gold">Handled Better.</span>
              </h1>
              <p className="mb-6 text-xl font-bold text-white sm:text-2xl">
                Luxury Holidays. Corporate Travel. Visa Assistance.
              </p>
              <p className="mb-4 max-w-2xl text-lg leading-relaxed text-white/90">
                Whether you're planning an unforgettable holiday, managing frequent business travel, or need support with
                your next visa application, Pluto Travels brings the important details together.
              </p>
              <p className="mb-9 max-w-2xl text-lg leading-relaxed text-white/80">
                From premium flights and 5-star stays to corporate travel management and visa assistance, our Dubai-based
                travel specialists help individuals, families and businesses travel with greater convenience.
              </p>
              <ConsultCTA onClick={openConsult} tone="light" />
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-3xl border border-white/25 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8"
            >
              <h2 className="mb-1 text-2xl font-bold text-white sm:text-3xl">Tell us what you need.</h2>
              <p className="mb-6 text-base text-white/85 sm:text-lg">
                We'll connect you with the right travel specialist.
              </p>
              <div className="space-y-3">
                {SERVICES.map(({ id, icon: Icon, label, blurb }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={openConsult}
                    className="group flex w-full items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <IconTile icon={Icon} gradient="from-primary-teal to-primary-navy" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-bold text-luxury-darkBlue sm:text-lg">{label}</span>
                      <span className="block text-sm leading-snug text-gray-600">{blurb}</span>
                    </span>
                    <ArrowRight
                      size={20}
                      className="flex-shrink-0 text-primary-coral transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What can we help you with */}
      <FadeInSection className="bg-luxury-canvas pb-4 pt-14 sm:pt-20">
        <Container>
          <Reveal>
            <SectionHeading title="What Can We Help You With?" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {SERVICES.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToId(id)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-teal/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary-navy shadow-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-primary-navy hover:via-primary-teal hover:to-primary-coral hover:text-white sm:text-base"
                  style={{ touchAction: 'manipulation' }}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </div>
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Luxury Travel */}
      <ServiceDetail
        id="luxury"
        icon={Gem}
        eyebrow="Luxury Travel"
        title="Your Holiday Should Feel Exceptional — Not Exhausting to Plan."
        image="/hotel-solutions-luxury.png"
        imageAlt="Luxury 5-star resort hotel illuminated at dusk"
        bg="bg-white"
        listHeading="Your journey can include:"
        list={LUXURY_INCLUDES}
        onCta={openConsult}
      >
        <p>Planning a family holiday, romantic escape, festive getaway, honeymoon or bucket-list journey?</p>
        <p>Let us help bring together the details around the way you want to travel.</p>
        <p className="font-semibold text-luxury-darkBlue">
          No generic itinerary. No one-size-fits-all holiday.
        </p>
        <p>Tell us where you want to go, how you like to travel and what matters to you.</p>
      </ServiceDetail>

      {/* Corporate Travel */}
      <ServiceDetail
        id="corporate"
        icon={Briefcase}
        eyebrow="Corporate Travel"
        title="Business Travel Shouldn't Become Another Business Problem."
        image="/corporate-travel-terminal.png"
        imageAlt="Business colleagues with luggage meeting in an airport terminal"
        reverse
        bg="bg-luxury-canvas"
        listHeading="Depending on your organisation's requirements, we can assist with:"
        list={CORPORATE_ASSIST}
        onCta={openConsult}
      >
        <div className="rounded-2xl border border-primary-coral/20 bg-primary-coral/5 p-5 sm:p-6">
          <p className="mb-4 text-base font-bold text-luxury-darkBlue sm:text-lg">
            Managing corporate travel can quickly mean:
          </p>
          <IconList items={CORPORATE_PAINS} tone="cross" />
        </div>
        <p>
          Pluto Travels helps businesses bring their corporate travel requirements under one professional travel partner.
        </p>
        <p className="font-semibold text-luxury-darkBlue">
          Whether your team travels occasionally or frequently, speak with us about your corporate travel requirements.
        </p>
      </ServiceDetail>

      {/* Visa Assistance */}
      <ServiceDetail
        id="visa"
        icon={FileCheck}
        eyebrow="Visa Assistance"
        title="Visa Applications Already Have Enough Paperwork."
        image="/blog-european-schengen-destinations.png"
        imageAlt="European city skyline at sunset with a passport and map pins in the sky"
        bg="bg-white"
        listHeading="Our assistance can include:"
        list={VISA_ASSIST}
        onCta={openConsult}
      >
        <p>
          Understanding requirements, preparing documentation and navigating the application process can become confusing,
          especially when you're travelling internationally for an important holiday or business trip.
        </p>
        <p>
          Pluto Travels provides visa assistance for supported destinations, helping travellers better understand and
          navigate the application process.
        </p>
        <div className="flex items-start gap-3 rounded-2xl border-l-4 border-primary-orange bg-primary-orange/10 p-4 sm:p-5">
          <ShieldAlert className="mt-0.5 flex-shrink-0 text-primary-orange" size={22} />
          <p className="text-base leading-relaxed text-gray-700">
            <strong className="text-luxury-darkBlue">Important:</strong> Visa decisions are made solely by the relevant
            embassy, consulate or immigration authority. Pluto Travels provides application assistance and does not
            guarantee visa approval.
          </p>
        </div>
      </ServiceDetail>

      {/* One Travel Partner. Three Ways. */}
      <FadeInSection className="bg-luxury-canvas py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Pluto Travels"
              title={
                <>
                  One Travel Partner.
                  <br className="hidden sm:block" /> Three Ways We Can Help.
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {THREE_WAYS.map(({ icon, title, description, items, gradient }, index) => (
              <Reveal key={title} delay={index * 0.1} className="h-full">
                <ShimmerCard className="p-6 sm:p-8">
                  <IconTile icon={icon} gradient={gradient} size="lg" />
                  <h3 className="mb-2 mt-5 text-2xl font-bold text-luxury-darkBlue">{title}</h3>
                  <p className="mb-5 leading-relaxed text-gray-600">{description}</p>
                  <IconList items={items} className="mt-auto" />
                </ShimmerCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <ConsultCTA onClick={openConsult} />
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Planning a Luxury Holiday? */}
      <FadeInSection className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Planning a Luxury Holiday?"
              title="Luxury Is More Than Booking an Expensive Hotel."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal className="h-full">
              <div className="h-full rounded-3xl border border-primary-coral/20 bg-primary-coral/5 p-6 sm:p-8">
                <p className="mb-5 text-lg font-bold text-luxury-darkBlue">
                  You can spend significantly on a holiday and still end up dealing with:
                </p>
                <IconList items={LUXURY_PAINS} tone="cross" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-full">
              <div className="h-full rounded-3xl border border-primary-teal/20 bg-primary-teal/5 p-6 sm:p-8">
                <p className="mb-5 text-lg font-bold text-luxury-darkBlue">Perfect For:</p>
                <IconList items={LUXURY_PERFECT_FOR} />
              </div>
            </Reveal>
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <p className="mb-3 text-2xl font-extrabold text-luxury-darkBlue">Your time is valuable.</p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Instead of managing flights, hotels, transfers and experiences separately, let a travel specialist help bring
              the journey together.
            </p>
            <ConsultCTA onClick={openConsult} />
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Festive / Winter */}
      <FadeInSection className="relative overflow-hidden bg-gradient-to-br from-luxury-darkBlue via-primary-navy to-primary-teal py-14 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-coral/20 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Planning Your Festive or Winter Holiday?"
              title="The Best Experiences Aren't Always Available at the Last Minute."
              subtitle="Planning travel around Diwali, UAE National Day/Eid Al Etihad, Christmas, New Year or the winter holiday period?"
            />
          </Reveal>
          <Reveal className="mt-12">
            <p className="mb-6 text-center text-lg font-semibold text-white">
              Peak travel periods can mean increased demand for:
            </p>
            <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
              {PEAK_DEMAND.map((item) => (
                <li
                  key={item}
                  className="flex w-full items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3.5 backdrop-blur-sm sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.5625rem)]"
                >
                  <CheckCircle2 className="flex-shrink-0 text-accent-gold" size={20} />
                  <span className="text-sm font-medium leading-snug text-white sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="mb-8 text-lg leading-relaxed text-white/90">
              Planning earlier gives you more opportunity to choose based on what you actually want, rather than simply
              what remains available.
            </p>
            <ConsultCTA onClick={openConsult} tone="light" />
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Managing Travel for Your Company? */}
      <FadeInSection className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Managing Travel for Your Company?"
                title={
                  <>
                    Your Team Focuses on Business.
                    <span className="mt-1 block bg-gradient-to-r from-primary-coral to-primary-orange bg-clip-text pb-1 text-transparent">
                      We Help With the Travel.
                    </span>
                  </>
                }
              />
              <p className="mb-2 mt-6 text-lg font-semibold text-luxury-darkBlue">
                Corporate travel is rarely just about booking a flight.
              </p>
              <p className="mb-5 text-lg text-gray-700">Businesses also need to manage:</p>
              <IconList items={COMPANY_MANAGES} />
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Pluto Travels can work as a corporate travel partner for businesses that want a more organised way to
                coordinate their travel requirements.
              </p>
              <div className="mt-8">
                <ConsultCTA onClick={openConsult} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ShimmerCard className="p-6 sm:p-9">
                <div className="mb-6 flex items-center gap-4">
                  <IconTile icon={Briefcase} gradient="from-primary-navy to-primary-teal" size="lg" />
                  <p className="text-2xl font-bold text-luxury-darkBlue">Suitable For:</p>
                </div>
                <ul className="space-y-3">
                  {COMPANY_SUITABLE_FOR.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-luxury-canvas px-4 py-3.5 text-base font-medium text-luxury-darkBlue sm:text-lg"
                    >
                      <BadgeCheck className="flex-shrink-0 text-primary-teal" size={22} />
                      {item}
                    </li>
                  ))}
                </ul>
              </ShimmerCard>
            </Reveal>
          </div>
        </Container>
      </FadeInSection>

      {/* Need help with your visa? */}
      <FadeInSection className="bg-luxury-canvas py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Need Help With Your Visa?" title="Understand the Process Before You Travel." />
          </Reveal>
          <Reveal className="mt-12">
            <p className="mb-6 text-center text-lg font-semibold text-luxury-darkBlue">
              Visa requirements can vary based on:
            </p>
            <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-5">
              {VISA_FACTORS.map(({ icon: Icon, label }, index) => (
                <li
                  key={label}
                  className={`flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-md ${
                    index === VISA_FACTORS.length - 1 ? 'col-span-2 md:col-span-1' : ''
                  }`}
                >
                  <IconTile icon={Icon} gradient="from-primary-teal to-primary-navy" />
                  <span className="mt-3 text-sm font-bold leading-snug text-luxury-darkBlue sm:text-base">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl space-y-4 text-center text-lg leading-relaxed text-gray-700">
            <p>
              Instead of relying on conflicting information online, speak with our team about visa assistance available for
              your destination.
            </p>
            <p>
              Whether you're travelling for leisure, family or business, we'll help you understand the applicable process
              and documentation requirements for supported destinations.
            </p>
            <div className="pt-4">
              <ConsultCTA onClick={openConsult} />
            </div>
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Why Pluto Travels */}
      <FadeInSection className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading title="Why Pluto Travels?" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {WHY_PLUTO.map(({ icon, title, description, gradient }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.08} className="h-full">
                <ShimmerCard className="p-6 sm:p-8">
                  <IconTile icon={icon} gradient={gradient} size="lg" />
                  <h3 className="mb-2 mt-5 text-xl font-bold text-luxury-darkBlue sm:text-2xl">{title}</h3>
                  <p className="leading-relaxed text-gray-600">{description}</p>
                </ShimmerCard>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <ConsultCTA onClick={openConsult} />
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Tell us what you need */}
      <FadeInSection id="book" className="scroll-mt-20 bg-luxury-canvas py-14 sm:py-20">
        <Container maxWidth="lg">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-luxury-darkBlue via-primary-navy to-primary-teal p-8 text-center text-white shadow-2xl sm:p-12">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary-coral/25 blur-3xl" aria-hidden />
              <div className="relative">
                <h2 className="text-3xl/[1.2] font-extrabold sm:text-4xl/[1.2] md:text-5xl/[1.2]">Tell Us What You Need.</h2>
                <p className="mt-3 text-xl font-bold text-accent-gold sm:text-2xl">Book Your 1:1 Travel Consultation</p>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
                  Complete a few details so we can connect you with the right Pluto Travels specialist.
                </p>

                <p className="mb-4 mt-9 text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                  What can we help you with?
                </p>
                <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
                  {SERVICES.map(({ id, icon: Icon, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={openConsult}
                      className="group flex flex-col items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary-navy"
                      style={{ touchAction: 'manipulation' }}
                    >
                      <Icon size={28} className="text-accent-gold transition-colors group-hover:text-primary-coral" />
                      <span className="text-base font-bold sm:text-lg">{label}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-9">
                  <ConsultCTA onClick={openConsult} tone="light" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </FadeInSection>

      {/* FAQ */}
      <FadeInSection className="bg-white py-14 sm:py-20">
        <Container maxWidth="md">
          <Reveal>
            <SectionHeading title="Frequently Asked Questions" />
          </Reveal>
          <div className="mt-12 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-luxury-canvas sm:p-6"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span className="text-base font-bold text-luxury-darkBlue sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      size={22}
                      className={`flex-shrink-0 text-primary-teal transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 px-5 pb-5 text-base leading-relaxed text-gray-600 sm:px-6 sm:pb-6 sm:text-lg">
                          {faq.intro && <p>{faq.intro}</p>}
                          {faq.items && (
                            <ul className="grid gap-2 sm:grid-cols-2">
                              {faq.items.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-primary-teal" size={20} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {faq.outro && <p>{faq.outro}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <Reveal className="mt-10 text-center">
            <ConsultCTA onClick={openConsult} />
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Final CTA */}
      <FadeInSection className="relative overflow-hidden bg-gradient-to-br from-primary-navy via-primary-teal to-primary-coral py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal className="text-center">
            <h2 className="text-3xl/[1.2] font-extrabold drop-shadow-lg sm:text-4xl/[1.2] md:text-5xl/[1.2] lg:text-6xl/[1.2]">
              Wherever You're Going,
              <span className="block text-accent-gold">Start With Pluto Travels.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {SERVICES.map(({ id, icon: Icon, label, blurb }) => (
              <div key={id} className="rounded-2xl border border-white/25 bg-white/10 p-6 text-center backdrop-blur-sm">
                <Icon className="mx-auto mb-3 text-accent-gold" size={30} />
                <h3 className="mb-1 text-xl font-bold">{label}</h3>
                <p className="text-white/85">{blurb}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-12 text-center">
            <p className="text-xl font-bold sm:text-2xl">One Dubai-Based Travel Partner.</p>
            <p className="mb-8 mt-1 text-lg text-white/90 sm:text-xl">Three Ways to Make Travelling Easier.</p>
            <ConsultCTA onClick={openConsult} tone="light" />
          </Reveal>
        </Container>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-luxury-darkBlue py-10 text-center text-white">
        <Container maxWidth="lg">
          <p className="text-lg font-bold">Pluto Travels LLC | Dubai, UAE</p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/60">
            Travel arrangements, pricing and availability are subject to destination, travel dates and supplier
            availability. Visa requirements vary by traveller and destination. Visa decisions are made solely by the
            relevant embassy, consulate or immigration authority.
          </p>
          <div className="mt-5 flex justify-center gap-6 text-sm text-white/70">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </footer>

      {/* Sticky CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-3 sm:pb-6">
        <AnimatePresence>
          {showSticky && (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 80 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pointer-events-auto w-full sm:w-auto"
              style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
              <ConsultCTA onClick={openConsult} className="shadow-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
};

export default TravelConsultationLandingPage;
