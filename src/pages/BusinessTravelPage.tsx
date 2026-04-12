import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Shield, CheckCircle, Award, ArrowLeft } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import ConsultationModal from '../components/ConsultationModal';
import { Link } from 'react-router-dom';
import { useCyclingCardScales, cardZoomScaleTransition } from '../hooks/useCyclingCardScales';
import { SHIMMER_CARD_GRADIENTS } from '../lib/shimmerCardTheme';

const BusinessTravelPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);

  const features = [
    {
      icon: Building2,
      title: 'Corporate Travel Management',
      description: 'Comprehensive travel management solutions for businesses of all sizes',
      benefits: ['Policy Development', 'Vendor Management', 'Cost Optimization', '24/7 Support']
    },
    {
      icon: Users,
      title: 'Dedicated Travel Managers',
      description: 'Personal travel managers assigned to your account for personalized service',
      benefits: ['Account Management', 'Travel Coordination', 'Emergency Support', 'Preference Tracking']
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Advanced analytics and reporting to reduce travel expenses',
      benefits: ['Spend Analytics', 'Budget Tracking', 'Savings Reports', 'ROI Analysis']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive safety and security protocols for business travelers',
      benefits: ['Travel Alerts', 'Emergency Response', 'Insurance Coverage', 'Safety Protocols']
    }
  ];

  const stats = [
    { icon: Building2, value: '500+', label: 'Corporate Clients' },
    { icon: Users, value: '50,000+', label: 'Business Travelers' },
    { icon: TrendingUp, value: '25%', label: 'Average Savings' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
  ];

  const statScales = useCyclingCardScales(stats.length);
  const featureScales = useCyclingCardScales(features.length);

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/80 via-primary-navy/60 to-transparent" />
        
        <div className="relative h-full flex items-center">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-4xl"
            >
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Business Travel
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Streamlined corporate travel management for modern enterprises. 
                Save costs, reduce complexity, and ensure seamless journeys for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setConsultOpen(true)}>
                  Request Consultation
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </FadeInSection>

      {/* Stats Section — Client Reviews-style shimmer + cycling scale */}
      <FadeInSection className="py-16 bg-luxury-pearl">
        <Container>
          <div className="font-outfit grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: statScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative inline-block w-full max-w-sm mx-auto ${
                    (statScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                  }`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80">
                      <div
                        className={`w-14 h-14 mx-auto bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                      >
                        <stat.icon className="text-white" size={28} />
                      </div>
                      <div className="text-3xl font-bold text-luxury-darkBlue mb-2">{stat.value}</div>
                      <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Features Section */}
      <FadeInSection className="py-16 bg-luxury-canvas">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
              Why Choose Our Business Travel Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions designed to meet the unique needs of modern businesses
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: featureScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${
                    (featureScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                  }`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-8 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 h-full flex flex-col">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                      >
                        <feature.icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <div className="space-y-3 mt-auto">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="text-primary-green flex-shrink-0" size={20} />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-primary-coral via-primary-orange to-accent-gold text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your Business Travel?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts analyze your current travel program and show you how to save costs while improving efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setConsultOpen(true)}>
                Request Business Travel Audit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setConsultOpen(true)}>
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      <Footer />
      <LunaAIChatButton />
      <MobileBottomCTA />
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
};

export default BusinessTravelPage;
