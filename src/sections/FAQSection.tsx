import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a travel package?',
      answer: 'You can book a travel package by browsing our packages, selecting your preferred option, and clicking the "Book Now" button. Our team will contact you within 24 hours to finalize your booking.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, bank transfers, and digital payment methods. Payment plans are also available for bookings over AED 10,000.',
    },
    {
      question: 'Can I customize my travel package?',
      answer: 'Absolutely! We specialize in creating customized travel experiences. Contact our travel consultants to discuss your preferences and we\'ll create a personalized itinerary just for you.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies by package and booking date. Generally, cancellations made 30+ days before departure receive a full refund minus processing fees. Please refer to your booking terms for specific details.',
    },
    {
      question: 'Do you provide travel insurance?',
      answer: 'Yes, we offer comprehensive travel insurance options that cover medical emergencies, trip cancellations, lost luggage, and more. We highly recommend purchasing travel insurance for international trips.',
    },
    {
      question: 'Is 24/7 support really available?',
      answer: 'Yes! Our dedicated support team is available 24/7/365 via phone, WhatsApp, and email. Whether you\'re planning your trip or already traveling, we\'re always here to help.',
    },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-pearl">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition-all"
              >
                <span className="text-left font-semibold text-luxury-darkBlue">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="text-primary-coral" size={24} />
                  ) : (
                    <Plus className="text-primary-teal" size={24} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white px-6 pb-6 pt-2 rounded-b-xl">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </FadeInSection>
  );
};

export default FAQSection;
