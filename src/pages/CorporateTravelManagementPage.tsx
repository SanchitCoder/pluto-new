import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Award,
  Calculator,
  Headphones,
  FileText,
  BarChart3,
  CreditCard,
  Plane,
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import ConsultationModal from '../components/ConsultationModal';
import BookingDiscoveryModal from '../components/BookingDiscoveryModal';
import { useCyclingCardScales, cardZoomScaleTransition } from '../hooks/useCyclingCardScales';
import { SHIMMER_CARD_GRADIENTS } from '../lib/shimmerCardTheme';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  benefits: string[];
}

interface Process {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

const CorporateTravelManagementPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);
  const features: Feature[] = [
    {
      id: '1',
      title: 'Policy Development & Compliance',
      description: 'Create and enforce travel policies that align with your business objectives.',
      icon: FileText,
      benefits: ['Custom Policy Creation', 'Automated Compliance', 'Cost Control Rules', 'Approval Workflows']
    },
    {
      id: '2',
      title: 'Vendor Management',
      description: 'Strategic partnerships with airlines, hotels, and ground transportation providers.',
      icon: Building2,
      benefits: ['Preferred Rates', 'Volume Discounts', 'Quality Assurance', 'Performance Monitoring']
    },
    {
      id: '3',
      title: 'Cost Optimization',
      description: 'Advanced analytics and reporting to identify savings opportunities.',
      icon: TrendingUp,
      benefits: ['Spend Analytics', 'Budget Tracking', 'ROI Reporting', 'Cost Benchmarking']
    },
    {
      id: '4',
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your traveling employees.',
      icon: Headphones,
      benefits: ['Emergency Support', 'Booking Changes', 'Travel Assistance', 'Duty of Care']
    }
  ];

  const processes: Process[] = [
    {
      id: '1',
      step: '01',
      title: 'Assessment & Analysis',
      description: 'We analyze your current travel program to identify opportunities for improvement.',
      icon: BarChart3
    },
    {
      id: '2',
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized travel management strategy aligned with your business goals.',
      icon: FileText
    },
    {
      id: '3',
      step: '03',
      title: 'Implementation',
      description: 'Deploy our solutions with minimal disruption to your existing operations.',
      icon: CheckCircle
    },
    {
      id: '4',
      step: '04',
      title: 'Ongoing Management',
      description: 'Continuous monitoring, optimization, and support for your travel program.',
      icon: Award
    }
  ];

  const tools: Tool[] = [
    {
      id: '1',
      name: 'Online Booking Platform',
      description: 'Self-service booking tool with policy compliance and approval workflows.',
      icon: Plane,
      features: ['Policy Enforcement', 'Approval Workflows', 'Mobile Access', 'Real-time Pricing']
    },
    {
      id: '2',
      name: 'Expense Management',
      description: 'Integrated expense tracking and reimbursement processing.',
      icon: CreditCard,
      features: ['Receipt Capture', 'Automated Processing', 'Policy Validation', 'Reporting']
    },
    {
      id: '3',
      name: 'Travel Analytics',
      description: 'Comprehensive reporting and analytics dashboard.',
      icon: BarChart3,
      features: ['Spend Analysis', 'Trend Reporting', 'Compliance Metrics', 'Cost Savings']
    },
    {
      id: '4',
      name: 'Duty of Care',
      description: 'Employee safety and security monitoring system.',
      icon: Shield,
      features: ['Location Tracking', 'Emergency Alerts', 'Risk Assessment', 'Crisis Management']
    }
  ];

  const stats = [
    { icon: Calculator, value: '25%', label: 'Average Cost Savings' },
    { icon: Clock, value: '40%', label: 'Time Reduction' },
    { icon: Shield, value: '99.8%', label: 'Compliance Rate' },
    { icon: Users, value: '500+', label: 'Corporate Clients' },
  ];

  const statScales = useCyclingCardScales(stats.length);
  const featureScales = useCyclingCardScales(features.length);
  const processScales = useCyclingCardScales(processes.length);
  const toolScales = useCyclingCardScales(tools.length);

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
                Corporate Travel Management
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Dubai & UAE
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Streamline your business travel operations with our comprehensive management solutions. 
                Reduce costs, ensure compliance, and provide exceptional support for your traveling employees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setBookingDiscoveryOpen(true)}>
                  Request Demo
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
              Comprehensive Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end travel management services designed to optimize your corporate travel program
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
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

      {/* Process Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A proven methodology for implementing and managing your corporate travel program
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: processScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${
                    (processScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                  }`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-primary-teal/20">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 h-full flex flex-col text-center">
                      <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-3">{process.step}</div>
                      <div
                        className={`w-14 h-14 mx-auto bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                      >
                        <process.icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-luxury-darkBlue mb-3">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-1">{process.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Tools Section */}
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
              Management Tools & Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced technology solutions to streamline your travel management operations
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: toolScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${(toolScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'}`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-8 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 h-full flex flex-col">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                      >
                        <tool.icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">{tool.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                      <div className="space-y-3 mt-auto">
                        {tool.features.map((feature, idx) => (
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
              Transform Your Corporate Travel Program
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts show you how to reduce costs, improve compliance, and enhance the travel experience for your employees
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setBookingDiscoveryOpen(true)}>
                Request Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setBookingDiscoveryOpen(true)}>
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
      <BookingDiscoveryModal isOpen={bookingDiscoveryOpen} onClose={() => setBookingDiscoveryOpen(false)} />
    </div>
  );
};

export default CorporateTravelManagementPage;
