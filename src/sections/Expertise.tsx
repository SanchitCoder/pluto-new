import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Key, Shield, Building, Anchor, Zap, Trophy, Users } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

const Expertise: React.FC = () => {
  const benefits = [
    { icon: User, text: 'Dedicated corporate travel managers' },
    { icon: Award, text: 'Negotiated rates with 200+ global partners' },
    { icon: Key, text: 'Access to exclusive corporate facilities' },
    { icon: Shield, text: '24/7 global business support' },
  ];

  const corporateMetrics = [
    'Average 28% cost savings',
    '45 hours/month saved for leaders',
    '24/7 global support',
  ];

  const specializedServices = [
    { title: 'Energy & Oil', icon: Zap },
    { title: 'Financial Services', icon: Building },
    { title: 'Technology', icon: Trophy },
    { title: 'Healthcare', icon: Users },
  ];

  return (
    <FadeInSection className="py-24 bg-luxury-pearl" id="expertise">
      <Container>
        <SectionHeader
          title='Expertise <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-coral to-primary-orange">Across Industries</span>'
          subtitle="Specialized corporate travel solutions for every business sector"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gradient-to-br from-primary-teal via-primary-navy to-luxury-darkBlue text-white p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-primary-coral to-primary-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                Most Popular
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-heading mb-4">Enhanced Business Traveller Experience</h3>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Our experienced travel consultants bring decades of industry knowledge and a deep understanding of corporate travel programmes—delivering exceptional service while optimising your travel spend.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <benefit.icon className="text-accent-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="text-sm italic mb-2">When plans change:</p>
              <p className="text-base">
                "Our 24/7 support team is ready to assist with disruptions and emergencies. Plus, stay informed on the go with real-time updates through our mobile app."
              </p>
            </div>

            <Button variant="gold" size="lg">
              Book a Meeting →
            </Button>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-accent-coral/20 to-accent-gold/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Building className="text-primary-teal mb-4" size={40} />
            <h3 className="text-xl md:text-2xl font-heading text-luxury-darkBlue mb-3">
              Empowered Travel Management
            </h3>
            <p className="text-gray-600 mb-6">
              Technology inspired by your business travel programme. Take control of cost, compliance, and safety with a seamless platform offering a suite of management controls and decision-support tools at the point of booking.
            </p>

            <div className="space-y-3 mb-6">
              {corporateMetrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-coral to-primary-orange rounded-full" />
                  <span className="text-sm text-gray-700">{metric}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="md" fullWidth>
              Book a Meeting →
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {specializedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center group"
            >
              <service.icon className="text-primary-teal group-hover:text-primary-coral transition-colors mx-auto mb-3" size={32} />
              <h4 className="font-semibold text-luxury-darkBlue">{service.title}</h4>
            </div>
          ))}
        </motion.div>
      </Container>
    </FadeInSection>
  );
};

export default Expertise;
