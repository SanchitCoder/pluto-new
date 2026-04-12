import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle, 
  Star,
  Camera,
  Mic,
  Wifi,
  Coffee,
  Utensils,
  Car,
  Plane,
  Hotel,
  Globe,
  ArrowLeft
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import BookingDiscoveryModal from '../components/BookingDiscoveryModal';

interface EventType {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  image: string;
  detailedDescription: string;
  benefits: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
}

const MICEEventDetailPage: React.FC = () => {
  const { eventType } = useParams<{ eventType: string }>();
  const navigate = useNavigate();
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventTypes: EventType[] = [
    {
      id: 'meetings',
      name: 'Meetings',
      description: 'Corporate meetings, board meetings, and executive gatherings.',
      icon: Users,
      features: ['Conference Rooms', 'AV Equipment', 'Catering', 'Transportation'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
      detailedDescription: 'Professional meeting management services for corporate gatherings, board meetings, and executive sessions. We provide comprehensive support from venue selection to execution.',
      benefits: [
        'Dedicated event coordinator',
        'State-of-the-art AV equipment',
        'Custom catering options',
        'Seamless transportation',
        'Professional documentation',
        'Post-event follow-up'
      ],
      pricing: {
        basic: 500,
        premium: 1200,
        enterprise: 2500
      }
    },
    {
      id: 'incentives',
      name: 'Incentives',
      description: 'Reward programs and motivational trips for high-performing teams.',
      icon: Award,
      features: ['Luxury Accommodations', 'Unique Experiences', 'Team Building', 'Recognition Programs'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      detailedDescription: 'Exclusive incentive travel programs designed to motivate and reward your top performers. Create unforgettable experiences that drive results.',
      benefits: [
        'Luxury accommodation options',
        'Unique cultural experiences',
        'Team building activities',
        'Recognition ceremonies',
        'Personalized itineraries',
        '24/7 concierge service'
      ],
      pricing: {
        basic: 800,
        premium: 1800,
        enterprise: 3500
      }
    },
    {
      id: 'conferences',
      name: 'Conferences',
      description: 'Large-scale conferences and industry events with multiple sessions.',
      icon: Calendar,
      features: ['Multiple Venues', 'Speaker Management', 'Registration', 'Networking Events'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      detailedDescription: 'Comprehensive conference management for large-scale industry events. From planning to execution, we handle every detail.',
      benefits: [
        'Multi-venue coordination',
        'Speaker management',
        'Registration systems',
        'Networking facilitation',
        'Live streaming options',
        'Post-event analytics'
      ],
      pricing: {
        basic: 1500,
        premium: 3500,
        enterprise: 7500
      }
    },
    {
      id: 'exhibitions',
      name: 'Exhibitions',
      description: 'Trade shows, product launches, and exhibition management.',
      icon: Star,
      features: ['Booth Design', 'Logistics', 'Visitor Management', 'Marketing Support'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      detailedDescription: 'Complete exhibition management services for trade shows and product launches. Maximize your presence and ROI.',
      benefits: [
        'Custom booth design',
        'Logistics coordination',
        'Visitor management',
        'Marketing support',
        'Lead generation',
        'ROI tracking'
      ],
      pricing: {
        basic: 2000,
        premium: 4500,
        enterprise: 9000
      }
    }
  ];

  const currentEvent = eventTypes.find(event => event.id === eventType);

  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-luxury-canvas">
        <Navigation />
        <Container className="py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-navy mb-4">Event Not Found</h1>
            <p className="text-gray-600 mb-8">The requested event type could not be found.</p>
            <Button variant="primary" onClick={() => navigate('/mice')}>
              Back to MICE & Events
            </Button>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[60vh] overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${currentEvent.image}')`
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
              <div className="flex items-center gap-4 mb-6">
                <button 
                  onClick={() => navigate('/mice')}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <ArrowLeft size={20} />
                  Back to MICE & Events
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <currentEvent.icon size={48} className="text-accent-gold" />
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {currentEvent.name}
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                {currentEvent.detailedDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg">
                  Get Quote
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
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
              What We Include
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services tailored to your {currentEvent.name.toLowerCase()} needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentEvent.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-primary-green" size={24} />
                  <h3 className="text-xl font-bold text-luxury-darkBlue">{feature}</h3>
                </div>
                <p className="text-gray-600">
                  Professional {feature.toLowerCase()} services with attention to detail and quality execution.
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Benefits Section */}
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
              Why Choose Our {currentEvent.name} Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional event management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentEvent.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="bg-primary-gold rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-darkBlue mb-2">{benefit}</h3>
                  <p className="text-gray-600">
                    Professional implementation with measurable results and client satisfaction.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Pricing Section */}
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
              Pricing Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that best fits your {currentEvent.name.toLowerCase()} requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(currentEvent.pricing).map(([tier, price], index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  tier === 'premium' ? 'ring-2 ring-primary-gold scale-105' : ''
                }`}
              >
                {tier === 'premium' && (
                  <div className="bg-primary-gold text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4 capitalize">{tier}</h3>
                <div className="text-4xl font-bold text-primary-gold mb-6">
                  ${price}
                  <span className="text-lg text-gray-500 font-normal">/event</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {currentEvent.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="text-primary-green" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={tier === 'premium' ? 'gold' : 'outline'} 
                  size="md" 
                  fullWidth
                >
                  Get Started
                </Button>
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
              Ready to Plan Your {currentEvent.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our event management experts create an unforgettable experience for your attendees
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setBookingDiscoveryOpen(true)}>
                Get Event Quote
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
      <BookingDiscoveryModal isOpen={bookingDiscoveryOpen} onClose={() => setBookingDiscoveryOpen(false)} />
    </div>
  );
};

export default MICEEventDetailPage;
