import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import { FadeInSection } from './FadeInSection';

export type PageFAQ = { question: string; answer: string };

type PageFAQSectionProps = {
  title?: string;
  subtitle?: string;
  faqs: PageFAQ[];
  className?: string;
};

/** Lightweight FAQ block for service pages — pair with JsonLdSchema (FAQPage, variant="faq-only") using the same `faqs`. */
const PageFAQSection: React.FC<PageFAQSectionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
  className = 'py-16 bg-luxury-pearl',
}) => (
  <FadeInSection className={className}>
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="mb-3 text-3xl font-bold text-luxury-darkBlue md:text-4xl">{title}</h2>
        {subtitle && <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>}
      </motion.div>
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-2 text-lg font-bold text-luxury-darkBlue">{faq.question}</h3>
            <p className="leading-relaxed text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </FadeInSection>
);

export default PageFAQSection;
