import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Globe, Users, Heart } from 'lucide-react';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

const AboutSection: React.FC = () => {
  const features = [
    'Expert corporate travel consultants with 17+ years experience',
    'Customized travel policies tailored to your business needs',
    '24/7 global business support and assistance',
    'Best price guarantee with 28% average cost savings',
    'Exclusive access to corporate travel rates',
    'Comprehensive travel analytics and reporting',
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Global Companies' },
    { icon: Globe, value: '95+', label: 'Countries Covered' },
    { icon: Award, value: '28%', label: 'Average Cost Savings' },
    { icon: Heart, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              ABOUT US
            </h2>
            <p className="text-lg font-body text-white/90 mb-6 leading-relaxed">
              Pluto Travels is Dubai's premier corporate travel management company, serving global enterprises and business travelers since 2007. We specialize in delivering cost-effective, efficient business travel solutions.
            </p>
            <p className="font-body text-white/80 mb-8 leading-relaxed">
              Our team of expert corporate travel consultants brings decades of combined experience, ensuring every business trip is optimized for cost, compliance, and convenience. From travel policy management to 24/7 global support, we deliver measurable ROI and exceptional service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="text-primary-green flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm font-body text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Corporate Travel"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <stat.icon className="text-accent-gold mx-auto mb-2" size={32} />
                  <div className="text-2xl font-body font-bold mb-1">{stat.value}</div>
                  <div className="text-sm font-body text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default AboutSection;
