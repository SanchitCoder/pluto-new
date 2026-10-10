import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Building2, CheckCircle, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import { FadeInSection } from '../components/FadeInSection';
import { SITE, yearsOfExperienceLabel } from '../lib/siteConfig';

const CREDENTIALS = [
  { icon: ShieldCheck, title: 'IATA Accredited', description: 'Accredited by the International Air Transport Association for issuing airline tickets and fares directly.' },
  { icon: Award, title: 'ISO 9001 Certified', description: 'Certified against the ISO 9001 quality management standard for consistent service delivery.' },
  { icon: CheckCircle, title: 'ICV Certified', description: 'Holds an In-Country Value certificate — view the certificate below.', href: '/ICV Certificate.pdf' },
  { icon: Building2, title: `Est. ${SITE.foundingDate}`, description: `${yearsOfExperienceLabel()} serving corporate, luxury and leisure travellers from Dubai.` },
];

const TIMELINE = [
  { year: '2007', text: 'Pluto Travels founded as a boutique travel agency in Dubai.' },
  { year: '2012', text: 'Became an IATA-accredited travel agency.' },
  { year: 'Today', text: 'A full-service travel partner for corporate, MICE, luxury and visa clients across the UAE and beyond, based in Business Bay, Dubai.' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />

      <FadeInSection className="bg-gradient-to-br from-luxury-darkBlue via-primary-navy to-luxury-darkBlue py-20 text-white sm:py-28">
        <Container>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">About Us</p>
          <h1 className="mb-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            An IATA-accredited travel agency in Dubai since {SITE.foundingDate}
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Pluto Travels LLC manages corporate travel, MICE events, luxury concierge journeys and outbound visa
            applications for businesses and individuals from our Business Bay office.
          </p>
        </Container>
      </FadeInSection>

      <FadeInSection className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="mb-5 text-2xl font-bold text-luxury-darkBlue sm:text-3xl">Our Story</h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Pluto Travels was founded in Dubai in {SITE.foundingDate} with a simple goal: make business and
                luxury travel genuinely easier to manage, not just cheaper to book. Since then we have grown into a
                full-service travel partner, working with UAE companies on corporate travel policy and reporting,
                with event teams on MICE logistics, with individuals on bespoke luxury holidays, and with travellers
                of every kind on outbound visa applications.
              </p>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our team of corporate travel consultants brings {yearsOfExperienceLabel().toLowerCase()} of combined
                experience to every account, from policy design and negotiated fares to 24/7 support when a trip
                doesn't go to plan. From our Business Bay office we serve clients across the UAE and arrange travel
                to destinations worldwide.
              </p>
              <p className="leading-relaxed text-gray-700">
                We also support sector-specific travel for energy, marine crew, mining and sports team operations —
                work that depends on safety protocols, crew rotation planning and remote-site logistics as much as it
                does on flights and hotels. See our{' '}
                <Link to="/industries" className="font-semibold text-primary-teal hover:underline">
                  specialized industry travel services
                </Link>{' '}
                for more.
              </p>

              <div className="mt-10 space-y-4">
                {TIMELINE.map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="w-20 flex-shrink-0 font-bold text-primary-coral">{item.year}</div>
                    <div className="border-l border-gray-200 pb-4 pl-4 text-gray-700">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
                <h3 className="mb-5 text-xl font-bold text-luxury-darkBlue">Credentials</h3>
                <div className="space-y-5">
                  {CREDENTIALS.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-teal/10 text-primary-teal">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-luxury-darkBlue">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="block transition-opacity hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      <div key={item.title}>{content}</div>
                    );
                  })}
                </div>

                <div className="mt-8 border-t border-gray-100 pt-6">
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Business Bay Office</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-start gap-2">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary-coral" />
                      <span>
                        {SITE.address.streetAddress}, {SITE.address.addressLocality}, UAE
                      </span>
                    </p>
                    <a href={`tel:${SITE.phoneOffice}`} className="flex items-center gap-2 hover:text-primary-teal">
                      <Phone size={16} className="text-primary-coral" />
                      {SITE.phoneOfficeDisplay}
                    </a>
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary-teal">
                      <Mail size={16} className="text-primary-coral" />
                      {SITE.email}
                    </a>
                  </div>
                  <Link to="/travel-agency-business-bay-dubai" className="mt-3 inline-block text-sm font-semibold text-primary-teal hover:underline">
                    Directions &amp; local info →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="mb-2 text-2xl font-bold text-luxury-darkBlue sm:text-3xl">What We Do</h2>
          <p className="mb-8 max-w-2xl text-gray-600">Four areas of travel, handled by one team.</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Corporate Travel', href: '/corporate-travel', text: 'Policy, booking and reporting for business travel programmes.' },
              { title: 'MICE & Events', href: '/mice', text: 'Meetings, incentives, conferences and exhibitions, planned end-to-end.' },
              { title: 'Luxury Travel', href: '/luxury-travel', text: 'Bespoke itineraries and concierge service for discerning travellers.' },
              { title: 'Visa Assistance', href: '/visa/africa', text: 'Outbound visa guidance and documentation support for UAE residents.' },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="rounded-xl border border-gray-200 p-6 transition-colors hover:border-primary-teal hover:shadow-md"
              >
                <p className="mb-1 font-bold text-luxury-darkBlue">{card.title}</p>
                <p className="text-sm text-gray-600">{card.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection className="bg-gradient-to-br from-primary-navy to-primary-teal py-16 text-center text-white sm:py-20">
        <Container maxWidth="md">
          <h2 className="mb-4 text-3xl font-bold">Plan your next trip with us</h2>
          <p className="mb-8 text-white/85">Tell us what you need and our Business Bay team will take it from there.</p>
          <Button variant="gold" size="lg" href="/contact">
            Contact Pluto Travels
          </Button>
        </Container>
      </FadeInSection>

      <LunaAIChatButton />
      <MobileBottomCTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
