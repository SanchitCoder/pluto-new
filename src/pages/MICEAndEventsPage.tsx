import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Award, CheckCircle, Star, Mic, Utensils, Car, Hotel, Globe } from 'lucide-react';
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

interface EventType {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  image: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  benefits: string[];
}

interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: string;
  image: string;
  features: string[];
  rating: number;
}

const MICEAndEventsPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);
  const eventTypes: EventType[] = [
    {
      id: 'meetings',
      name: 'Meetings',
      description: 'Corporate meetings, board meetings, and executive gatherings.',
      icon: Users,
      features: ['Conference Rooms', 'AV Equipment', 'Catering', 'Transportation'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80'
    },
    {
      id: 'incentives',
      name: 'Incentives',
      description: 'Reward programs and motivational trips for high-performing teams.',
      icon: Award,
      features: ['Luxury Accommodations', 'Unique Experiences', 'Team Building', 'Recognition Programs'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80'
    },
    {
      id: 'conferences',
      name: 'Conferences',
      description: 'Large-scale conferences and industry events with multiple sessions.',
      icon: Calendar,
      features: ['Multiple Venues', 'Speaker Management', 'Registration', 'Networking Events'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80'
    },
    {
      id: 'exhibitions',
      name: 'Exhibitions',
      description: 'Trade shows, product launches, and exhibition management.',
      icon: Star,
      features: ['Booth Design', 'Logistics', 'Visitor Management', 'Marketing Support'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80'
    }
  ];

  const services: Service[] = [
    {
      id: '1',
      title: 'Event Planning & Management',
      description: 'End-to-end event planning from concept to execution.',
      icon: Calendar,
      benefits: ['Timeline Management', 'Vendor Coordination', 'Budget Control', 'Quality Assurance']
    },
    {
      id: '2',
      title: 'Venue Selection & Booking',
      description: 'Access to premium venues worldwide with negotiated rates.',
      icon: MapPin,
      benefits: ['Global Network', 'Preferred Rates', 'Site Inspections', 'Contract Negotiation']
    },
    {
      id: '3',
      title: 'Logistics & Transportation',
      description: 'Seamless transportation and logistics management.',
      icon: Car,
      benefits: ['Airport Transfers', 'Group Transportation', 'Luggage Handling', 'Route Optimization']
    },
    {
      id: '4',
      title: 'Accommodation Management',
      description: 'Hotel bookings and accommodation arrangements.',
      icon: Hotel,
      benefits: ['Group Rates', 'Room Blocking', 'Special Requests', 'Check-in Management']
    },
    {
      id: '5',
      title: 'Catering & Entertainment',
      description: 'Culinary experiences and entertainment arrangements.',
      icon: Utensils,
      benefits: ['Menu Planning', 'Dietary Requirements', 'Entertainment Booking', 'Cultural Experiences']
    },
    {
      id: '6',
      title: 'Technology & AV Support',
      description: 'Audio-visual equipment and technical support.',
      icon: Mic,
      benefits: ['AV Equipment', 'Live Streaming', 'Technical Support', 'Recording Services']
    }
  ];

  const venues: Venue[] = [
    {
      id: '1',
      name: 'Dubai International Convention Centre',
      location: 'Dubai, UAE',
      capacity: 'Up to 10,000 delegates',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
      features: ['Multiple Halls', 'AV Equipment', 'Catering Facilities', 'Parking'],
      rating: 4.8
    },
    {
      id: '2',
      name: 'Abu Dhabi National Exhibition Centre',
      location: 'Abu Dhabi, UAE',
      capacity: 'Up to 15,000 delegates',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
      features: ['Exhibition Halls', 'Meeting Rooms', 'Restaurant', 'Business Center'],
      rating: 4.7
    },
    {
      id: '3',
      name: 'Sharjah Expo Centre',
      location: 'Sharjah, UAE',
      capacity: 'Up to 8,000 delegates',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      features: ['Conference Facilities', 'Exhibition Space', 'Catering', 'Transportation'],
      rating: 4.6
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Events Managed' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: Calendar, value: '15+', label: 'Years Experience' },
  ];

  const statScales = useCyclingCardScales(stats.length);
  const eventTypeScales = useCyclingCardScales(eventTypes.length);
  const serviceScales = useCyclingCardScales(services.length);
  const venueScales = useCyclingCardScales(venues.length);

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=80')`
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
                MICE & Group
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Events
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Professional event management services for meetings, incentives, conferences, and exhibitions. 
                We create memorable experiences that deliver results.
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
              MICE Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive event management solutions for all types of corporate gatherings
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((eventType, index) => (
              <motion.div
                key={eventType.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: eventTypeScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${
                    (eventTypeScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                  }`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden shrink-0">
                        <img
                          src={eventType.image}
                          alt={eventType.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <div
                            className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} mb-2 shadow-md`}
                          >
                            <eventType.icon className="text-white" size={24} />
                          </div>
                          <h3 className="text-2xl font-bold drop-shadow-sm">{eventType.name}</h3>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-gray-600 mb-4 leading-relaxed">{eventType.description}</p>
                        <div className="space-y-2 flex-1">
                          {eventType.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="text-primary-green" size={16} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button variant="outline" size="sm" fullWidth onClick={() => setConsultOpen(true)}>
                            Learn More
                          </Button>
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

      {/* Services Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              End-to-end event management services to ensure your event's success
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-black/25 group-hover:shadow-xl group-hover:shadow-primary-teal/25">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 h-full flex flex-col">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${SHIMMER_CARD_GRADIENTS[index % SHIMMER_CARD_GRADIENTS.length]} rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                      >
                        <service.icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-luxury-darkBlue mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base flex-1">{service.description}</p>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="text-primary-green flex-shrink-0" size={16} />
                            <span className="text-sm text-gray-700">{benefit}</span>
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

      {/* Venues Section */}
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
              Premium Venues
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access to world-class venues across the UAE and beyond
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: venueScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative h-full ${(venueScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'}`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white overflow-hidden transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80 flex flex-col h-full">
                      <div className="relative h-48 overflow-hidden shrink-0">
                        <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-navy">
                          {venue.rating} ⭐
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-luxury-darkBlue mb-2">{venue.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="text-primary-teal shrink-0" size={16} />
                          <span className="text-sm text-gray-600">{venue.location}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">{venue.capacity}</p>
                        <div className="space-y-2 flex-1">
                          {venue.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="text-primary-green" size={16} />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button variant="outline" size="sm" fullWidth onClick={() => setBookingDiscoveryOpen(true)}>
                            Book Consultation
                          </Button>
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
              Ready to Plan Your Next Event?
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
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
      <BookingDiscoveryModal isOpen={bookingDiscoveryOpen} onClose={() => setBookingDiscoveryOpen(false)} />
    </div>
  );
};

export default MICEAndEventsPage;
