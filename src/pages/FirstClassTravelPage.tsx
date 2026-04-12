import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Crown, 
  Plane, 
  Hotel, 
  Car, 
  CheckCircle, 
  Award,
  Star,
  Globe,
  Headphones,
  FileText,
  BarChart3,
  ArrowLeft,
  Sparkles,
  Shield
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

const FirstClassTravelPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);

  const features = [
    {
      icon: Crown,
      title: 'Luxury Accommodations',
      description: 'Exclusive access to the world\'s finest hotels and resorts',
      benefits: ['5-Star Properties', 'Suite Upgrades', 'VIP Amenities', 'Personal Concierge']
    },
    {
      icon: Plane,
      title: 'Premium Air Travel',
      description: 'First and business class arrangements with leading airlines',
      benefits: ['First Class Seats', 'Lounge Access', 'Priority Boarding', 'In-Flight Amenities']
    },
    {
      icon: Car,
      title: 'Private Transportation',
      description: 'Chauffeur-driven luxury vehicles for seamless ground travel',
      benefits: ['Luxury Vehicles', 'Professional Drivers', 'Airport Transfers', 'City Tours']
    },
    {
      icon: Star,
      title: 'Exclusive Experiences',
      description: 'Curated luxury experiences and unique access opportunities',
      benefits: ['Private Tours', 'Fine Dining', 'Cultural Events', 'VIP Access']
    }
  ];

  const luxuryServices = [
    {
      title: 'Private Jet Charter',
      description: 'Exclusive private jet services for ultimate comfort and privacy',
      icon: Plane,
      features: ['Flexible Scheduling', 'Luxury Interiors', 'Gourmet Catering', 'Personal Staff']
    },
    {
      title: 'Luxury Hotel Concierge',
      description: 'Dedicated concierge services at the world\'s finest properties',
      icon: Hotel,
      features: ['24/7 Concierge', 'Restaurant Reservations', 'Event Planning', 'Personal Shopping']
    },
    {
      title: 'Exclusive Experiences',
      description: 'Access to the most exclusive and unique travel experiences',
      icon: Sparkles,
      features: ['Private Events', 'Cultural Access', 'Celebrity Encounters', 'Limited Access']
    }
  ];

  const stats = [
    { icon: Crown, value: '100+', label: 'Luxury Properties' },
    { icon: Plane, value: '50+', label: 'Private Jets' },
    { icon: Star, value: '500+', label: 'Exclusive Experiences' },
    { icon: Award, value: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')`
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
                First Class
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Travel
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Luxury travel experiences for discerning corporate executives. 
                Experience the finest in premium travel with our exclusive first-class services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setConsultOpen(true)}>
                  Experience Luxury
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

      {/* Luxury Services Section */}
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
              Our Luxury Travel Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exclusive access to the world's most luxurious travel experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxuryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <service.icon className="text-primary-teal mb-6" size={64} />
                <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
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
              Why Choose Our First Class Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unmatched luxury travel experiences designed for the most discerning travelers
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
              Ready for the Ultimate Luxury Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our luxury travel specialists create an unforgettable first-class experience tailored to your preferences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setConsultOpen(true)}>
                Plan Luxury Journey
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

export default FirstClassTravelPage;
