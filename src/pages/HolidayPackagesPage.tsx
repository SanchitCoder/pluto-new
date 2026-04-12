import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle, 
  Award,
  Heart,
  Calendar,
  Filter,
  Search,
  Plane,
  Hotel,
  Car,
  Utensils,
  Camera,
  Mountain,
  Sun,
  Snowflake
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import ConsultationModal from '../components/ConsultationModal';

interface Package {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  category: string;
  highlights: string[];
  includes: string[];
}

const HolidayPackagesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [consultOpen, setConsultOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Packages', icon: Star },
    { id: 'beach', name: 'Beach & Coastal', icon: Sun },
    { id: 'mountain', name: 'Mountains & Nature', icon: Mountain },
    { id: 'city', name: 'City & Culture', icon: Camera },
    { id: 'adventure', name: 'Adventure', icon: Snowflake },
  ];

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: 'short', name: '3-5 Days' },
    { id: 'medium', name: '6-10 Days' },
    { id: 'long', name: '11+ Days' },
  ];

  const packages: Package[] = [
    {
      id: '1',
      title: 'Luxury Maldives Escape',
      destination: 'Maldives',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      description: 'Ultimate relaxation in overwater villas with crystal-clear waters and pristine beaches.',
      duration: '5 Days / 4 Nights',
      price: 9170,
      originalPrice: 11000,
      rating: 4.9,
      reviews: 1876,
      category: 'beach',
      highlights: ['Overwater Villa', 'Private Beach', 'Spa Treatments', 'Sunset Cruises'],
      includes: ['Flights', 'Accommodation', 'Meals', 'Transfers', 'Activities']
    },
    {
      id: '2',
      title: 'Swiss Alps Adventure',
      destination: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=600&q=80',
      description: 'Majestic mountain peaks, pristine lakes, and charming alpine villages.',
      duration: '7 Days / 6 Nights',
      price: 8070,
      originalPrice: 9540,
      rating: 4.8,
      reviews: 1923,
      category: 'mountain',
      highlights: ['Mountain Hiking', 'Skiing', 'Lakes', 'Chocolate Tours'],
      includes: ['Flights', 'Accommodation', 'Meals', 'Transfers', 'Activities']
    },
    {
      id: '3',
      title: 'Tokyo Cultural Journey',
      destination: 'Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
      description: 'A perfect blend of ancient traditions and cutting-edge modernity.',
      duration: '6 Days / 5 Nights',
      price: 5870,
      originalPrice: 6970,
      rating: 4.7,
      reviews: 3456,
      category: 'city',
      highlights: ['Temples', 'Street Food', 'Technology', 'Cherry Blossoms'],
      includes: ['Flights', 'Accommodation', 'Meals', 'Transfers', 'Activities']
    },
    {
      id: '4',
      title: 'Santorini Romance',
      destination: 'Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
      description: 'Experience the magic of white-washed buildings against the deep blue Aegean Sea.',
      duration: '5 Days / 4 Nights',
      price: 6970,
      originalPrice: 8440,
      rating: 4.9,
      reviews: 2847,
      category: 'beach',
      highlights: ['Sunset Views', 'Wine Tasting', 'Volcanic Beaches', 'Ancient Ruins'],
      includes: ['Flights', 'Accommodation', 'Meals', 'Transfers', 'Activities']
    },
    {
      id: '5',
      title: 'New Zealand Adventure',
      destination: 'New Zealand',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      description: 'Adventure capital of the world with stunning landscapes and thrilling activities.',
      duration: '10 Days / 9 Nights',
      price: 7340,
      originalPrice: 8800,
      rating: 4.8,
      reviews: 2134,
      category: 'adventure',
      highlights: ['Bungee Jumping', 'Hiking', 'Glaciers', 'Maori Culture'],
      includes: ['Flights', 'Accommodation', 'Meals', 'Transfers', 'Activities']
    },
    {
      id: '6',
      title: 'Paris City Break',
      destination: 'France',
      image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&q=80',
      description: 'The City of Light, where romance meets art and culture.',
      duration: '4 Days / 3 Nights',
      price: 4770,
      originalPrice: 5870,
      rating: 4.6,
      reviews: 4567,
      category: 'city',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River', 'French Cuisine'],
      includes: ['Flights', 'Accommodation', 'Meals', 'Transfers', 'Activities']
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    const matchesDuration = selectedDuration === 'all' || 
      (selectedDuration === 'short' && pkg.duration.includes('3-5')) ||
      (selectedDuration === 'medium' && (pkg.duration.includes('6-10') || pkg.duration.includes('7 Days'))) ||
      (selectedDuration === 'long' && pkg.duration.includes('10+'));
    
    return matchesSearch && matchesCategory && matchesDuration;
  });

  const stats = [
    { icon: Star, value: '200+', label: 'Holiday Packages' },
    { icon: MapPin, value: '50+', label: 'Destinations' },
    { icon: Users, value: '10,000+', label: 'Happy Travelers' },
    { icon: Award, value: '4.8/5', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`
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
                Holiday
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Packages
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Discover our carefully curated holiday packages designed for unforgettable experiences. 
                From tropical paradises to cultural adventures, find your perfect getaway.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setConsultOpen(true)}>
                  Browse Packages
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setConsultOpen(true)}>
                  Custom Package
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

      {/* Search and Filter Section */}
      <FadeInSection className="py-16 bg-luxury-canvas">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-luxury-pearl rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search Packages</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by destination or package..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-teal focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-teal focus:outline-none transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-teal focus:outline-none transition-colors"
                >
                  {durations.map(duration => (
                    <option key={duration.id} value={duration.id}>{duration.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Packages Grid */}
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
              Featured Holiday Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked packages designed for unforgettable holiday experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-primary-coral text-white px-3 py-1 rounded-full text-sm font-bold">
                    {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-navy">
                    {pkg.destination}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-primary-orange" size={16} />
                    <span className="text-sm text-gray-600">{pkg.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-luxury-darkBlue mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Star className="fill-accent-gold text-accent-gold" size={16} />
                    <span className="font-semibold text-sm">{pkg.rating}</span>
                    <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-gray-800 text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="bg-primary-teal/10 text-primary-teal px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-gray-800 text-sm">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.includes.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="bg-primary-green/10 text-primary-green px-2 py-1 rounded-full text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500 line-through">
                        AED {pkg.originalPrice.toLocaleString()}
                      </div>
                      <div className="text-2xl font-bold text-primary-coral">
                        AED {pkg.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>

                  <Button variant="outline" size="sm" fullWidth onClick={() => setConsultOpen(true)}>
                    Book Consultation
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No packages found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </motion.div>
          )}
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
              Can't Find Your Perfect Package?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our travel experts create a custom holiday package tailored to your preferences and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setConsultOpen(true)}>
                Create Custom Package
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

export default HolidayPackagesPage;
