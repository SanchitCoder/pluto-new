import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';
import { ScrollLinkedWordReveal } from '../components/ScrollLinkedWordReveal';

const FOUNDER_MESSAGE_PARAGRAPHS = [
  {
    text:
      'From my early days in corporate travel management to leading Pluto Travels, my journey has been focused on transforming business travel from a cost center to a competitive advantage.',
  },
  {
    text:
      "Over the past 20 years, I have learned that corporate clients need more than just bookings—they need strategic partners who understand their business objectives. At Pluto Travels, we provide data-driven insights, cost optimization, and seamless technology that delivers measurable ROI.",
    className: 'text-gray-700 leading-relaxed',
  },
  {
    text:
      "Our success is measured by our clients' success: 28% average cost savings, 98% traveler satisfaction, and 95% policy compliance rates.",
    className: 'text-gray-700 leading-relaxed',
  },
  {
    text: 'Thank you for trusting Pluto Travels with your most important business travel needs.',
    className: 'text-gray-700 leading-relaxed',
  },
];

const Founder: React.FC = () => {
  return (
    <FadeInSection className="py-24 bg-luxury-canvas" id="founder">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <img
                src="/Bharat-New-Web.png"
                alt="Bharat Aidasani, Founder"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-primary-gold text-sm font-semibold uppercase tracking-wider">
              Leadership in Corporate Travel
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-navy mt-4 mb-6 leading-tight">
              Leading Corporate Travel Innovation
            </h2>

            <ScrollLinkedWordReveal
              paragraphs={FOUNDER_MESSAGE_PARAGRAPHS}
              className="scroll-mt-8"
            />

            <div className="mt-8 mb-6">
              <p className="font-script text-3xl text-primary-navy mb-2">Bharat Aidasani</p>
              <p className="text-primary-gold font-medium">Founder, Pluto Travels</p>
            </div>

          </motion.div>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default Founder;
