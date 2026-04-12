import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plane,
  Hotel,
  Car,
  Shield,
  CheckCircle,
  Users,
  FileText,
  CreditCard,
  Headphones,
  Star,
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import BookingDiscoveryModal from '../components/BookingDiscoveryModal';
import { useCyclingCardScales, cardZoomScaleTransition } from '../hooks/useCyclingCardScales';
import { SHIMMER_CARD_GRADIENTS } from '../lib/shimmerCardTheme';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  benefits: string[];
}

interface Process {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const EssentialServicesPage: React.FC = () => {
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);

  const services: Service[] = [
    {
      id: '1',
      title: 'Flight Bookings',
      description: 'Comprehensive flight booking services with access to the best rates and routes.',
      icon: Plane,
      features: ['Best Price Guarantee', '24/7 Booking Support', 'Flight Changes', 'Seat Selection'],
      benefits: ['Competitive Rates', 'Flexible Options', 'Expert Advice', 'Emergency Support']
    },
    {
      id: '2',
      title: 'Hotel Reservations',
      description: 'Premium hotel bookings with exclusive rates and special amenities.',
      icon: Hotel,
      features: ['Exclusive Rates', 'Room Upgrades', 'Special Amenities', 'Cancellation Flexibility'],
      benefits: ['Best Available Rates', 'VIP Treatment', 'Loyalty Benefits', 'Quality Assurance']
    },
    {
      id: '3',
      title: 'Car Rentals',
      description: 'Reliable car rental services with a wide selection of vehicles worldwide.',
      icon: Car,
      features: ['Wide Vehicle Selection', 'Insurance Coverage', 'GPS Navigation', '24/7 Support'],
      benefits: ['Competitive Pricing', 'Quality Vehicles', 'Flexible Terms', 'Global Network']
    },
    {
      id: '4',
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage for peace of mind during your journey.',
      icon: Shield,
      features: ['Medical Coverage', 'Trip Cancellation', 'Baggage Protection', 'Emergency Assistance'],
      benefits: ['Full Protection', '24/7 Support', 'Quick Claims', 'Global Coverage']
    }
  ];

  const processes: Process[] = [
    {
      id: '1',
      step: '01',
      title: 'Consultation',
      description: 'Discuss your travel needs and preferences with our expert consultants.',
      icon: Users
    },
    {
      id: '2',
      step: '02',
      title: 'Planning',
      description: 'We create a detailed itinerary tailored to your requirements and budget.',
      icon: FileText
    },
    {
      id: '3',
      step: '03',
      title: 'Booking',
      description: 'Secure all your travel arrangements with our trusted partners.',
      icon: CreditCard
    },
    {
      id: '4',
      step: '04',
      title: 'Support',
      description: '24/7 support throughout your journey for any assistance you need.',
      icon: Headphones
    }
  ];

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'How far in advance should I book my travel?',
      answer: 'We recommend booking flights 2-3 months in advance for international travel and 1-2 months for domestic travel to get the best rates and availability.'
    },
    {
      id: '2',
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we provide comprehensive travel insurance coverage including medical, trip cancellation, and baggage protection. Our team can help you choose the right coverage for your needs.'
    },
    {
      id: '3',
      question: 'Can I make changes to my booking?',
      answer: 'Yes, most bookings can be modified depending on the terms and conditions. We\'ll help you make changes and explain any applicable fees or restrictions.'
    },
    {
      id: '4',
      question: 'What if I need assistance during my trip?',
      answer: 'We provide 24/7 emergency support for all our clients. You can reach our support team anytime for assistance with any travel-related issues.'
    }
  ];

  const stats = [
    { icon: Plane, value: '50,000+', label: 'Flights Booked' },
    { icon: Hotel, value: '25,000+', label: 'Hotel Nights' },
    { icon: Car, value: '10,000+', label: 'Car Rentals' },
    { icon: Shield, value: '99%', label: 'Satisfaction Rate' },
  ];

  const statScales = useCyclingCardScales(stats.length);
  const serviceScales = useCyclingCardScales(services.length);
  const processScales = useCyclingCardScales(processes.length);
  const faqScales = useCyclingCardScales(faqs.length);

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80')`
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
                Essential
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Travel Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Core travel services including flights, hotels, car rentals, and travel insurance. 
                Reliable, affordable, and backed by our expert support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setBookingDiscoveryOpen(true)}>
                  Book Now
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setBookingDiscoveryOpen(true)}>
                  Get Quote
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
              Our Essential Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Core travel services designed to meet all your basic travel needs with reliability and value
            </p>
          </motion.div>

          <div className="font-outfit grid grid-cols-1 md:grid-cols-2 gap-8">
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

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Features:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="text-primary-green flex-shrink-0" size={20} />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                        <div className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <Star className="text-accent-gold flex-shrink-0" size={20} />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button variant="outline" size="sm" fullWidth onClick={() => setBookingDiscoveryOpen(true)}>
                          Learn More
                        </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Simple steps to book your essential travel services with confidence
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

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about our essential travel services
            </p>
          </motion.div>

          <div className="font-outfit max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ scale: faqScales[index] ?? 1 }}
                  transition={{ scale: cardZoomScaleTransition }}
                  className={`group relative ${(faqScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'}`}
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                    <div className="client-review-shimmer-ring" aria-hidden />
                    <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80">
                      <h3 className="text-lg font-bold text-luxury-darkBlue mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              Ready to Book Your Travel?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with our essential travel services and experience reliable, affordable travel solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setBookingDiscoveryOpen(true)}>
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setBookingDiscoveryOpen(true)}>
                Get Quote
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

export default EssentialServicesPage;
