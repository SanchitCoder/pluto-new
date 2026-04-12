import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, 
  Star, 
  Globe, 
  Users, 
  CheckCircle, 
  Award,
  Crown,
  Sparkles,
  MapPin,
  Calendar,
  Camera,
  Utensils
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import BookingDiscoveryModal from '../components/BookingDiscoveryModal';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  image: string;
}

interface Experience {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  highlights: string[];
  price: string;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const PersonalTravelPage: React.FC = () => {
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);

  const services: Service[] = [
    {
      id: '1',
      title: 'Platinum Concierge',
      description: 'Luxury travel experiences with personalized service and exclusive access.',
      icon: Crown,
      features: ['Personal Travel Consultant', 'Exclusive Access', 'Luxury Accommodations', 'VIP Services'],
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'
    },
    {
      id: '2',
      title: 'Holiday Packages',
      description: 'Curated vacation packages designed for unforgettable family and personal getaways.',
      icon: Star,
      features: ['All-Inclusive Packages', 'Family-Friendly Options', 'Romantic Getaways', 'Adventure Tours'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
    },
    {
      id: '3',
      title: 'Essential Services',
      description: 'Core travel services including flights, hotels, and ground transportation.',
      icon: Globe,
      features: ['Flight Bookings', 'Hotel Reservations', 'Car Rentals', 'Travel Insurance'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80'
    }
  ];

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Luxury Safari Experience',
      description: 'Exclusive wildlife encounters in Africa\'s most pristine reserves.',
      icon: Camera,
      highlights: ['Private Game Drives', 'Luxury Lodges', 'Expert Guides', 'Photography Workshops'],
      price: 'From $8,999'
    },
    {
      id: '2',
      title: 'European Grand Tour',
      description: 'A journey through Europe\'s most iconic cities and hidden gems.',
      icon: MapPin,
      highlights: ['Private Tours', 'Michelin Dining', 'Luxury Hotels', 'Cultural Experiences'],
      price: 'From $12,999'
    },
    {
      id: '3',
      title: 'Tropical Paradise Escape',
      description: 'Ultimate relaxation in the world\'s most beautiful tropical destinations.',
      icon: Utensils,
      highlights: ['Overwater Villas', 'Spa Treatments', 'Private Beaches', 'Gourmet Dining'],
      price: 'From $6,999'
    },
    {
      id: '4',
      title: 'Adventure Expedition',
      description: 'Thrilling adventures for the bold and adventurous traveler.',
      icon: Sparkles,
      highlights: ['Extreme Sports', 'Mountain Climbing', 'Desert Safaris', 'Water Sports'],
      price: 'From $4,999'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah & Michael Johnson',
      location: 'Dubai, UAE',
      text: 'Pluto Travels created the most magical honeymoon for us. Every detail was perfect, from the private beach dinner to the luxury suite upgrade.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80'
    },
    {
      id: '2',
      name: 'Ahmed Al-Rashid',
      location: 'Abu Dhabi, UAE',
      text: 'The family vacation they planned for us was incredible. Our kids are still talking about the safari experience and the luxury resort.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      location: 'Dubai, UAE',
      text: 'As a solo traveler, I felt completely safe and supported. They arranged everything perfectly and I had the adventure of a lifetime.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
    }
  ];

  const stats = [
    { icon: Heart, value: '10,000+', label: 'Happy Families' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Globe, value: '100+', label: 'Destinations' },
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
                Personal
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Travel Experiences
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Create unforgettable memories with our personalized travel services. 
                From luxury getaways to family adventures, we craft experiences that exceed your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setBookingDiscoveryOpen(true)}>
                  Plan My Journey
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setBookingDiscoveryOpen(true)}>
                  View Experiences
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
              Our Personal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored travel solutions designed to create extraordinary personal experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="mb-2" size={32} />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-primary-green" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" size="sm" fullWidth>
                      Learn More
                    </Button>
                  </div>
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
              Once-in-a-lifetime experiences that money can't usually buy
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
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full"
              >
                <experience.icon className="text-accent-gold mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-3">{experience.title}</h3>
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
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary-navy">
                    Book Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from travelers who experienced the magic of personalized travel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-accent-gold text-accent-gold" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-luxury-darkBlue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
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
              Ready to Create Your Dream Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our travel experts design a personalized experience that exceeds your expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setBookingDiscoveryOpen(true)}>
                Plan My Journey
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

export default PersonalTravelPage;
