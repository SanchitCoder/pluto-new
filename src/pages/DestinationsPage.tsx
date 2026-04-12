import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, Clock, Users, Filter, Globe, Plane, Mountain, Sun, Snowflake } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import { FadeInSection } from '../components/FadeInSection';

interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  category: string;
  bestTime: string;
  highlights: string[];
}

const DestinationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedContinent, setSelectedContinent] = useState('all');

  const categories = [
    { id: 'all', name: 'All Destinations', icon: Globe },
    { id: 'beach', name: 'Beach & Coastal', icon: Sun },
    { id: 'mountain', name: 'Mountains & Nature', icon: Mountain },
    { id: 'city', name: 'City & Culture', icon: Plane },
    { id: 'adventure', name: 'Adventure', icon: Snowflake },
  ];

  const continents = [
    { id: 'all', name: 'All Continents' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'americas', name: 'Americas' },
    { id: 'africa', name: 'Africa' },
    { id: 'oceania', name: 'Oceania' },
  ];

  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Santorini',
      country: 'Greece',
      continent: 'europe',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
      description: 'Experience the magic of white-washed buildings against the deep blue Aegean Sea.',
      rating: 4.9,
      reviews: 2847,
      price: 1899,
      duration: '5 Days / 4 Nights',
      category: 'beach',
      bestTime: 'May - October',
      highlights: ['Sunset Views', 'Wine Tasting', 'Volcanic Beaches', 'Ancient Ruins']
    },
    {
      id: '2',
      name: 'Swiss Alps',
      country: 'Switzerland',
      continent: 'europe',
      image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=600&q=80',
      description: 'Majestic mountain peaks, pristine lakes, and charming alpine villages.',
      rating: 4.8,
      reviews: 1923,
      price: 2199,
      duration: '7 Days / 6 Nights',
      category: 'mountain',
      bestTime: 'June - September',
      highlights: ['Mountain Hiking', 'Skiing', 'Lakes', 'Chocolate Tours']
    },
    {
      id: '3',
      name: 'Tokyo',
      country: 'Japan',
      continent: 'asia',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
      description: 'A perfect blend of ancient traditions and cutting-edge modernity.',
      rating: 4.7,
      reviews: 3456,
      price: 1599,
      duration: '6 Days / 5 Nights',
      category: 'city',
      bestTime: 'March - May, September - November',
      highlights: ['Temples', 'Street Food', 'Technology', 'Cherry Blossoms']
    },
    {
      id: '4',
      name: 'Maldives',
      country: 'Maldives',
      continent: 'asia',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      description: 'Paradise on earth with crystal-clear waters and pristine beaches.',
      rating: 4.9,
      reviews: 1876,
      price: 2499,
      duration: '5 Days / 4 Nights',
      category: 'beach',
      bestTime: 'November - April',
      highlights: ['Overwater Villas', 'Snorkeling', 'Spa Retreats', 'Sunset Cruises']
    },
    {
      id: '5',
      name: 'New Zealand',
      country: 'New Zealand',
      continent: 'oceania',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      description: 'Adventure capital of the world with stunning landscapes.',
      rating: 4.8,
      reviews: 2134,
      price: 1999,
      duration: '10 Days / 9 Nights',
      category: 'adventure',
      bestTime: 'December - February',
      highlights: ['Bungee Jumping', 'Hiking', 'Glaciers', 'Maori Culture']
    },
    {
      id: '6',
      name: 'Paris',
      country: 'France',
      continent: 'europe',
      image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&q=80',
      description: 'The City of Light, where romance meets art and culture.',
      rating: 4.6,
      reviews: 4567,
      price: 1299,
      duration: '4 Days / 3 Nights',
      category: 'city',
      bestTime: 'April - June, September - November',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River', 'French Cuisine']
    }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesContinent = selectedContinent === 'all' || destination.continent === selectedContinent;
    
    return matchesSearch && matchesCategory && matchesContinent;
  });

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
              className="text-white max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your Next
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Adventure
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Explore breathtaking destinations around the world with our expertly crafted travel experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg">
                  Start Planning
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy">
                  View Packages
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </FadeInSection>

      {/* Search and Filter Section */}
      <FadeInSection className="py-16 bg-luxury-pearl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search Destinations</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by destination or country..."
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

              {/* Continent Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Continent</label>
                <select
                  value={selectedContinent}
                  onChange={(e) => setSelectedContinent(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-teal focus:outline-none transition-colors"
                >
                  {continents.map(continent => (
                    <option key={continent.id} value={continent.id}>{continent.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Destinations Grid */}
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
              Explore Our Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From tropical paradises to mountain peaks, discover the world's most beautiful places
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-navy">
                    {destination.country}
                  </div>
                  <div className="absolute top-4 right-4 bg-primary-coral text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${destination.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-primary-teal" size={16} />
                    <span className="text-sm text-gray-600">{destination.continent.charAt(0).toUpperCase() + destination.continent.slice(1)}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-luxury-darkBlue mb-2">
                    {destination.name}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Star className="fill-accent-gold text-accent-gold" size={16} />
                    <span className="font-semibold text-sm">{destination.rating}</span>
                    <span className="text-sm text-gray-500">({destination.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="text-primary-orange" size={16} />
                    <span className="text-sm text-gray-600">{destination.duration}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Best time to visit: <span className="font-semibold text-primary-navy">{destination.bestTime}</span></p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="bg-primary-teal/10 text-primary-teal px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" fullWidth>
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No destinations found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </motion.div>
          )}
        </Container>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our travel experts create a personalized itinerary for your dream destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Get Custom Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      <Footer />
      <LunaAIChatButton />
      <MobileBottomCTA />
    </div>
  );
};

export default DestinationsPage;
