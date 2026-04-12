import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Star, Calculator } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

const WhyChoose: React.FC = () => {
  const benefits = [
    {
      title: 'Consistent, Personal Service',
      description: 'Global service standards, with on-the-ground expertise in 95+ countries. Personalised care so your travellers can thrive whenever, wherever.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      features: [
        'Dedicated account managers for your business',
        '24/7 global support across all time zones',
        'Local expertise in 95+ countries worldwide',
        'Personalized service for every business traveler',
      ],
    },
    {
      title: 'Experience-led Technology',
      description: 'Say hello to one smooth, travel management experience with our Platform, built for managers, bookers and business travellers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      features: [
        'Integrated booking platform for all travel needs',
        'Real-time travel tracking and updates',
        'Mobile app for travelers and managers',
        'Automated expense management and reporting',
      ],
    },
    {
      title: 'Enhanced Data & Visibility',
      description: 'From spend to safety and beyond. Whatever metrics matter most to your business, we\'ll help you find the insights that put you in control.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      features: [
        'Comprehensive travel spend analytics',
        'Real-time safety and security updates',
        'Custom reporting and dashboards',
        'Data-driven travel policy optimization',
      ],
    },
  ];

  return (
    <FadeInSection className="py-24 bg-luxury-canvas" id="why-choose">
      <Container>
        <SectionHeader
          title="Discover the Alternative in Business Travel"
          subtitle="With a 98% client happiness rate, our innovative approach combines the best of people and technology for an effortless corporate travel management experience."
        />

        <div className="space-y-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-2xl md:text-3xl font-heading text-primary-navy mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="space-y-3 mb-6">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="primary" size="md">
                  Learn More →
                </Button>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading text-primary-navy mb-4">
                  Ready for Smoother Global Business Travel?
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  A global travel management company with specialist Middle East teams.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Innovative corporate travel technology to streamline expense management.
                  Knowledge and talent you don't see at other corporate travel companies.
                  Data, analytics and insights to focus on travel spend and aligned to budget constraints.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
                  Let's talk today.
                </p>
              </div>

              <div className="bg-primary-gold/10 p-6 md:p-8 rounded-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="text-primary-gold" size={28} />
                  <h4 className="text-xl font-semibold text-primary-navy">Corporate Travel ROI</h4>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Travel cost savings:</span>
                    <span className="font-semibold">
                      <span className="text-primary-gold">28% average</span> reduction
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Policy compliance:</span>
                    <span className="font-semibold">
                      <span className="text-primary-gold">95%</span> adherence rate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Traveler satisfaction:</span>
                    <span className="font-semibold">
                      <span className="text-primary-gold">98%</span> happiness rate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Emergency response:</span>
                    <span className="font-semibold">
                      <span className="text-primary-gold">11 min</span> average response
                    </span>
                  </div>
                </div>

                <div className="border-t-2 border-primary-gold pt-4 mb-4">
                  <p className="text-lg font-bold text-primary-navy">
                    Join <span className="text-primary-gold">500+ companies</span> worldwide
                  </p>
                </div>

                <div className="bg-primary-navy text-white p-4 rounded-lg text-center">
                  <p className="text-sm mb-2">Ready to transform your business travel?</p>
                  <p className="text-3xl font-bold text-primary-gold">Book a Meeting</p>
                  <p className="text-xs text-white/80 mt-1">Schedule your consultation today</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default WhyChoose;
