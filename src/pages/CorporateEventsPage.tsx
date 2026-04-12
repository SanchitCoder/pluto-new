import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Award,
  Plane,
  Hotel,
  Car,
  Headphones,
  FileText,
  BarChart3,
  ArrowLeft,
  Star,
  Globe
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import ConsultationModal from '../components/ConsultationModal';
import { Link } from 'react-router-dom';

const CorporateEventsPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);

  const features = [
    {
      icon: Calendar,
      title: 'Event Planning & Coordination',
      description: 'End-to-end event planning from concept to execution',
      benefits: ['Venue Selection', 'Agenda Planning', 'Logistics Coordination', 'Timeline Management']
    },
    {
      icon: Users,
      title: 'Group Travel Management',
      description: 'Seamless group travel arrangements for corporate events',
      benefits: ['Group Bookings', 'Bulk Discounts', 'Coordinated Arrivals', 'Team Coordination']
    },
    {
      icon: MapPin,
      title: 'Destination Management',
      description: 'Expert local knowledge and on-ground support',
      benefits: ['Local Partnerships', 'Cultural Insights', 'Emergency Support', 'Custom Experiences']
    },
    {
      icon: Clock,
      title: 'Real-time Support',
      description: '24/7 support during your corporate events',
      benefits: ['Live Assistance', 'Issue Resolution', 'Last-minute Changes', 'Emergency Response']
    }
  ];

  const eventTypes = [
    {
      title: 'Corporate Meetings',
      description: 'Board meetings, strategy sessions, and executive gatherings',
      icon: Users,
      features: ['Meeting Rooms', 'Catering', 'AV Equipment', 'Translation Services']
    },
    {
      title: 'Incentive Travel',
      description: 'Reward trips and motivational travel experiences',
      icon: Star,
      features: ['Luxury Accommodations', 'Exclusive Experiences', 'Team Building', 'Recognition Programs']
    },
    {
      title: 'Conferences & Conventions',
      description: 'Large-scale corporate events and industry gatherings',
      icon: Globe,
      features: ['Conference Centers', 'Exhibition Spaces', 'Networking Events', 'Speaker Management']
    }
  ];

  const stats = [
    { icon: Calendar, value: '200+', label: 'Events Managed' },
    { icon: Users, value: '10,000+', label: 'Event Attendees' },
    { icon: MapPin, value: '50+', label: 'Destinations' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')`
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
                Corporate Events
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Travel
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                We save your time and money with expert event travel coordination. 
                From intimate board meetings to large-scale conferences, we handle every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setConsultOpen(true)}>
                  Plan Your Event
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection className="py-16 bg-luxury-pearl">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <stat.icon className="text-primary-teal mx-auto mb-4" size={48} />
                  <div className="text-3xl font-bold text-luxury-darkBlue mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Event Types Section */}
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
              Corporate Event Types We Manage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate meetings to large-scale conferences, we handle every type of corporate event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <event.icon className="text-primary-teal mb-6" size={64} />
                <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-3">
                  {event.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-primary-green flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Features Section */}
      <FadeInSection className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
              Our Event Travel Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive event travel solutions designed to ensure seamless corporate gatherings
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <feature.icon className="text-primary-teal mb-6" size={64} />
                <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-primary-green flex-shrink-0" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
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
              Ready to Plan Your Corporate Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our event travel experts create an unforgettable corporate experience that saves you time and money
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setConsultOpen(true)}>
                Start Event Planning
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

export default CorporateEventsPage;
