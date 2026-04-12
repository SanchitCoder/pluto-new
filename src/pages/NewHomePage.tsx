import React from 'react';
import { motion } from 'framer-motion';
import HeroSlider from '../sections/HeroSlider';
import ClientReviews from '../sections/ClientReviews';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import { Destinations3DRowStack } from '../components/ImageSlider3D';
import { DESTINATION_CAROUSEL_SLIDES } from '../data/destinationCarouselSlides';
import ExcitingDeals from '../sections/ExcitingDeals';
import ServiceTiles from '../sections/ServiceTiles';
import AboutSection from '../sections/AboutSection';
import ServicesGrid from '../sections/ServicesGrid';
import TestimonialsSection from '../sections/TestimonialsSection';
import BlogSection from '../sections/BlogSection';
import FAQSection from '../sections/FAQSection';
import Founder from '../sections/Founder';
import MeetTheTeam from '../sections/MeetTheTeam';
import CompanyTimeline from '../sections/CompanyTimeline';
import Awards2025 from '../sections/Awards2025';
import MapCTA from '../sections/MapCTA';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';

const NewHomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-luxury-darkBlue via-primary-navy to-primary-navy pt-0 mt-0">
      <Navigation />
      <motion.main
        initial={{ y: 32, opacity: 0.98 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 -mt-2 overflow-hidden rounded-t-[2rem] bg-luxury-canvas shadow-[0_-16px_56px_-14px_rgba(0,0,0,0.28)] sm:-mt-3 md:rounded-t-[2.5rem]"
      >
        <HeroSlider />

        <FadeInSection className="bg-luxury-canvas py-10 sm:py-14">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mb-6 max-w-3xl text-center sm:mb-8"
            >
              <h2 className="font-heading text-3xl font-bold tracking-tight text-luxury-darkBlue sm:text-4xl md:text-5xl">
                Destinations we love
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:mt-4 sm:text-lg">
                A glimpse of the cities and escapes we craft for our clients — in motion, around the world.
              </p>
            </motion.div>
          </Container>
          <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip px-0 py-2 sm:py-3">
            <ul className="sr-only">
              {DESTINATION_CAROUSEL_SLIDES.map((d) => (
                <li key={d.name}>{d.name}</li>
              ))}
            </ul>
            <Destinations3DRowStack
              slides={DESTINATION_CAROUSEL_SLIDES}
              duration={40}
              cyclingEmphasis
            />
          </div>
        </FadeInSection>

        <ClientReviews />
        <ServicesGrid />
        <ExcitingDeals />
        <ServiceTiles />
        <AboutSection />
        <Founder />
        <MeetTheTeam />
        <CompanyTimeline />
        <Awards2025 />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <MapCTA />
        <Footer />
      </motion.main>
      <LunaAIChatButton />
      <MobileBottomCTA />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default NewHomePage;
