import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import type { LandingPageConfig } from '../data/landingPages';
import Navigation from './Navigation';
import Footer from './Footer';
import Container from './Container';
import Button from './Button';
import { FadeInSection } from './FadeInSection';
import LunaAIChatButton from './LunaAIChatButton';
import MobileBottomCTA from './MobileBottomCTA';
import ConsultationModal from './ConsultationModal';
import JsonLdSchema from './JsonLdSchema';
import { SITE } from '../lib/siteConfig';
import InternalLinksSection from './InternalLinksSection';

type SEOLandingPageProps = {
  config: LandingPageConfig;
};

export default function SEOLandingPage({ config }: SEOLandingPageProps) {
  const [consultOpen, setConsultOpen] = useState(false);
  const path = `/${config.slug}`;

  return (
    <div className="min-h-screen bg-luxury-canvas pb-24">
      <JsonLdSchema pathname={path} type="FAQPage" variant="faq-only" faqs={config.faqs} />
      <Navigation />

      <section className="relative flex min-h-[52vh] items-end overflow-hidden">
        <img
          src={config.heroImage}
          alt={config.heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-darkBlue/95 via-primary-navy/70 to-primary-navy/40" />
        <Container className="relative z-10 pb-12 pt-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-gold">Pluto Travels · Dubai · Since 2007</p>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {config.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">{config.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="gold" size="lg" onClick={() => setConsultOpen(true)}>
                {config.ctaLabel ?? 'Request a Quote'}
              </Button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {config.proofPoints && (
        <FadeInSection className="border-b border-gray-200 bg-white py-6">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-luxury-darkBlue md:gap-8">
              {config.proofPoints.map((point) => (
                <span key={point} className="flex items-center gap-2">
                  <Star className="text-accent-gold" size={16} fill="currentColor" />
                  {point}
                </span>
              ))}
              <span className="flex items-center gap-2 text-primary-teal">
                <CheckCircle size={16} />
                IATA Accredited
              </span>
            </div>
          </Container>
        </FadeInSection>
      )}

      <FadeInSection className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-gray-700">
            {config.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection className="bg-luxury-pearl py-16">
        <Container>
          <h2 className="mb-10 text-center text-3xl font-bold text-luxury-darkBlue md:text-4xl">
            How We Help
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {config.features.map((feature) => (
              <div key={feature.title} className="rounded-xl bg-white p-6 shadow-lg">
                <config.icon className="mb-3 text-primary-teal" size={28} />
                <h3 className="mb-2 text-xl font-bold text-luxury-darkBlue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection className="py-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-primary-navy to-primary-teal p-8 text-white md:p-12">
            <h2 className="text-2xl font-bold md:text-3xl">Trusted by UAE Businesses Since 2007</h2>
            <p className="mt-3 max-w-2xl text-white/90">
              {SITE.aggregateRating.reviewCount} Google reviews at {SITE.aggregateRating.ratingValue}★ · IATA-accredited ·
              24/7 support · {SITE.address.streetAddress}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="gold" onClick={() => setConsultOpen(true)}>
                Get a Corporate Travel Quote
              </Button>
              <a href={`tel:${SITE.phoneOffice}`} className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                Call {SITE.phoneOfficeDisplay}
              </a>
            </div>
          </div>
        </Container>
      </FadeInSection>

      {config.faqs.length > 0 && (
        <FadeInSection className="bg-white py-16">
          <Container>
            <h2 className="mb-8 text-center text-3xl font-bold text-luxury-darkBlue">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {config.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-gray-200 bg-luxury-canvas p-5">
                  <summary className="cursor-pointer list-none font-semibold text-luxury-darkBlue marker:content-none">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </FadeInSection>
      )}

      <FadeInSection className="py-12">
        <Container>
          <h2 className="mb-6 text-xl font-bold text-luxury-darkBlue">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {config.relatedLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full border border-primary-teal/30 bg-white px-4 py-2 text-sm font-medium text-primary-teal hover:bg-primary-teal hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <InternalLinksSection />
      <Footer />
      <LunaAIChatButton />
      <MobileBottomCTA />
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
}
