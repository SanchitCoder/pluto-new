import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Shield, Clock, Globe, CheckCircle, Award } from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import ConsultationModal from '../components/ConsultationModal';
import CorporateAuditModal from '../components/CorporateAuditModal';
import { useCyclingCardScales, cardZoomScaleTransition } from '../hooks/useCyclingCardScales';
import { SHIMMER_CARD_GRADIENTS } from '../lib/shimmerCardTheme';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  value: string;
}

interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  specialties: string[];
}

const CorporateTravelPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  
  const services: Service[] = [
    {
      id: '1',
      title: 'Corporate Travel Management',
      description: 'Comprehensive travel management solutions for businesses of all sizes.',
      icon: Building2,
      features: ['Policy Development', 'Vendor Management', 'Cost Optimization', '24/7 Support']
    },
    {
      id: '2',
      title: 'MICE & Group Events',
      description: 'End-to-end event planning and management for corporate gatherings.',
      icon: Users,
      features: ['Event Planning', 'Venue Selection', 'Logistics Management', 'On-site Support']
    },
    {
      id: '3',
      title: 'Specialized Industries',
      description: 'Tailored solutions for specific industry requirements and compliance.',
      icon: Award,
      features: ['Industry Expertise', 'Compliance Management', 'Risk Assessment', 'Custom Solutions']
    }
  ];

  const benefits: Benefit[] = [
    {
      id: '1',
      title: 'Cost Savings',
      description: 'Average 15-25% reduction in travel expenses',
      icon: TrendingUp,
      value: 'AED 320K+'
    },
    {
      id: '2',
      title: 'Time Efficiency',
      description: 'Streamlined booking and management processes',
      icon: Clock,
      value: '40% Faster'
    },
    {
      id: '3',
      title: 'Risk Management',
      description: 'Comprehensive safety and security protocols',
      icon: Shield,
      value: '99.8%'
    },
    {
      id: '4',
      title: 'Global Coverage',
      description: 'Worldwide network of partners and suppliers',
      icon: Globe,
      value: '150+ Countries'
    }
  ];

  const industries: Industry[] = [
    {
      id: '1',
      name: 'Energy & Oil',
      description: 'Specialized travel solutions for energy sector professionals.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
      specialties: ['Offshore Travel', 'Remote Locations', 'Safety Protocols', 'Emergency Response']
    },
    {
      id: '2',
      name: 'Marine & Shipping',
      description: 'Expert maritime travel and logistics management.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      specialties: ['Port Logistics', 'Crew Management', 'Cargo Coordination', 'International Regulations']
    },
    {
      id: '3',
      name: 'Construction',
      description: 'Tailored solutions for construction and engineering projects.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
      specialties: ['Project Sites', 'Equipment Transport', 'Team Coordination', 'Safety Compliance']
    },
    {
      id: '4',
      name: 'Technology',
      description: 'Modern travel solutions for tech companies and startups.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&q=80',
      specialties: ['Conference Travel', 'Client Meetings', 'Team Retreats', 'Innovation Hubs']
    }
  ];

  const stats = [
    { icon: Building2, value: '500+', label: 'Corporate Clients' },
    { icon: Users, value: '50,000+', label: 'Business Travelers' },
    { icon: TrendingUp, value: '25%', label: 'Average Savings' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
  ];

  const statScales = useCyclingCardScales(stats.length);
  const serviceScales = useCyclingCardScales(services.length);
  const benefitScales = useCyclingCardScales(benefits.length);
  const industryScales = useCyclingCardScales(industries.length);

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darkBlue/80 via-primary-navy/60 to-transparent" />
        
        <div className="relative h-full flex items-center">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Corporate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Travel Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Streamline your business travel with our comprehensive corporate travel management services. 
                Save costs, reduce complexity, and ensure seamless journeys for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setAuditOpen(true)}>
                  Request Corporate Audit
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </FadeInSection>

      {/* Stats Section — Client Reviews-style cards */}
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

      {/* Services Section */}
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
              Our Corporate Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions designed to meet the unique needs of modern businesses
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: serviceScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${
                    (serviceScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                  }`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-8 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 h-full flex flex-col">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                      >
                        <service.icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-3 mt-auto">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="text-primary-green flex-shrink-0" size={20} />
                            <span className="text-gray-700">{feature}</span>
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

      {/* Benefits Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Proven results and measurable benefits for your corporate travel program
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: benefitScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${
                    (benefitScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                  }`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-primary-teal/20">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 h-full flex flex-col text-center">
                      <div
                        className={`w-14 h-14 mx-auto bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                      >
                        <benefit.icon className="text-white" size={28} />
                      </div>
                      <div className="text-3xl font-bold text-luxury-darkBlue mb-2">{benefit.value}</div>
                      <h3 className="text-xl font-bold text-luxury-darkBlue mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-1">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Industries Section */}
      <FadeInSection className="py-16 bg-luxury-pearl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
              Specialized Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-specific expertise and tailored solutions for your sector
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: industryScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${
                    (industryScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                  }`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-2xl font-bold">{industry.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                        <div className="space-y-2">
                          {industry.specialties.map((specialty, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="text-primary-green" size={16} />
                              <span className="text-sm text-gray-600">{specialty}</span>
                            </div>
                          ))}
                        </div>
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
              Ready to Optimize Your Corporate Travel?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts analyze your current travel program and show you how to save costs while improving efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setAuditOpen(true)}>
                Request Corporate Audit
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
      <CorporateAuditModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default CorporateTravelPage;
