import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Crown, 
  Star, 
  Globe, 
  Users, 
  CheckCircle, 
  Award,
  Sparkles,
  MapPin,
  Calendar,
  Camera,
  Utensils,
  Car,
  Hotel,
  Plane,
  Headphones,
  Shield,
  Heart
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import ConsultationModal from '../components/ConsultationModal';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  price: string;
  duration: string;
}

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const PlatinumConciergePage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const services: Service[] = [
    {
      id: '1',
      title: 'Personal Travel Consultant',
      description: 'Dedicated travel expert who understands your preferences and creates bespoke itineraries.',
      icon: Users,
      features: ['24/7 Availability', 'Personal Relationship', 'Preference Learning', 'Custom Itineraries']
    },
    {
      id: '2',
      title: 'Exclusive Access',
      description: 'Access to private venues, exclusive events, and experiences not available to the public.',
      icon: Crown,
      features: ['Private Venues', 'VIP Events', 'Exclusive Restaurants', 'Behind-the-Scenes Tours']
    },
    {
      id: '3',
      title: 'Luxury Accommodations',
      description: 'Premium hotels, private villas, and exclusive resorts with special amenities.',
      icon: Hotel,
      features: ['5-Star Hotels', 'Private Villas', 'Suite Upgrades', 'Special Amenities']
    },
    {
      id: '4',
      title: 'VIP Services',
      description: 'White-glove service including airport assistance, private transfers, and concierge support.',
      icon: Sparkles,
      features: ['Airport VIP', 'Private Transfers', 'Concierge Services', 'Personal Assistant']
    }
  ];

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Private Island Retreat',
      description: 'Exclusive access to a private island with luxury accommodations and personalized service.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      highlights: ['Private Island Access', 'Luxury Villa', 'Personal Chef', 'Water Sports'],
      price: 'From AED 58,700',
      duration: '7 Days / 6 Nights'
    },
    {
      id: '2',
      title: 'European Grand Tour',
      description: 'Luxury journey through Europe\'s most exclusive destinations with private tours.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
      highlights: ['Private Tours', 'Michelin Dining', 'Luxury Hotels', 'Cultural Experiences'],
      price: 'From AED 95,400',
      duration: '14 Days / 13 Nights'
    },
    {
      id: '3',
      title: 'African Safari Experience',
      description: 'Exclusive wildlife encounters in Africa\'s most pristine reserves with luxury lodges.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      highlights: ['Private Game Drives', 'Luxury Lodges', 'Expert Guides', 'Photography Workshops'],
      price: 'From AED 69,700',
      duration: '10 Days / 9 Nights'
    },
    {
      id: '4',
      title: 'Asian Cultural Immersion',
      description: 'Deep dive into Asian cultures with exclusive access to temples, palaces, and traditions.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
      highlights: ['Private Temple Tours', 'Palace Access', 'Cultural Workshops', 'Luxury Accommodations'],
      price: 'From AED 47,700',
      duration: '12 Days / 11 Nights'
    }
  ];

  const benefits: Benefit[] = [
    {
      id: '1',
      title: 'Unparalleled Service',
      description: 'White-glove service that anticipates your every need and exceeds expectations.',
      icon: Heart
    },
    {
      id: '2',
      title: 'Exclusive Access',
      description: 'Access to experiences and venues that are not available to regular travelers.',
      icon: Crown
    },
    {
      id: '3',
      title: 'Personalized Attention',
      description: 'Dedicated travel consultant who learns your preferences and creates bespoke experiences.',
      icon: Users
    },
    {
      id: '4',
      title: 'Global Network',
      description: 'Worldwide network of luxury partners and exclusive venues.',
      icon: Globe
    }
  ];

  const stats = [
    { icon: Crown, value: '500+', label: 'Platinum Members' },
    { icon: Star, value: '4.9/5', label: 'Satisfaction Rate' },
    { icon: Globe, value: '80+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80')`
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
                Platinum
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Concierge
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Experience the pinnacle of luxury travel with our exclusive Platinum Concierge service. 
                Unparalleled access, personalized attention, and extraordinary experiences await.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setConsultOpen(true)}>
                  Become a Member
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
              Platinum Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exclusive services designed for the most discerning travelers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <service.icon className="text-primary-teal mb-6" size={64} />
                <h3 className="text-xl font-bold text-luxury-darkBlue mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-primary-green flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Experiences Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Experiences</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Once-in-a-lifetime experiences available only to Platinum members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{experience.title}</h3>
                    <p className="text-sm text-white/90">{experience.duration}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {experience.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-accent-gold flex-shrink-0" size={16} />
                        <span className="text-sm text-white/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-accent-gold">{experience.price}</div>
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setConsultOpen(true)}>
                      Book Experience
                    </Button>
                  </div>
                </div>
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
              Why Choose Platinum
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The benefits of our exclusive Platinum Concierge membership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg h-full">
                  <benefit.icon className="text-primary-teal mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-bold text-luxury-darkBlue mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              Ready to Experience Platinum Service?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our exclusive Platinum Concierge program and unlock a world of extraordinary experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setConsultOpen(true)}>
                Become a Member
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

export default PlatinumConciergePage;
