import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

const LatestPackages: React.FC = () => {
  const navigate = useNavigate();
  
  const packages = [
    {
      id: 'paris-adventure',
      image: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=600&q=80',
      title: 'Paris Adventure',
      location: 'France',
      duration: '5 Days / 4 Nights',
      rating: 4.8,
      reviews: 245,
      price: 1299,
      discount: 20,
    },
    {
      id: 'italian-heritage-tour',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80',
      title: 'Italian Heritage Tour',
      location: 'Italy',
      duration: '7 Days / 6 Nights',
      rating: 4.9,
      reviews: 312,
      price: 1899,
      discount: 15,
    },
    {
      id: 'swiss-alps-escape',
      image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=600&q=80',
      title: 'Swiss Alps Escape',
      location: 'Switzerland',
      duration: '6 Days / 5 Nights',
      rating: 4.7,
      reviews: 189,
      price: 2199,
      discount: 10,
    },
    {
      id: 'amsterdam-explorer',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80',
      title: 'Amsterdam Explorer',
      location: 'Netherlands',
      duration: '4 Days / 3 Nights',
      rating: 4.6,
      reviews: 156,
      price: 999,
      discount: 25,
    },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-pearl">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
            LATEST PACKAGES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked travel packages designed for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {pkg.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-primary-coral text-white px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.discount}% OFF
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-primary-teal" size={16} />
                  <span className="text-sm text-gray-600">{pkg.location}</span>
                </div>

                <h3 className="text-xl font-bold text-luxury-darkBlue mb-2">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <Clock className="text-primary-orange" size={16} />
                  <span className="text-sm text-gray-600">{pkg.duration}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Star className="fill-accent-gold text-accent-gold" size={16} />
                  <span className="font-semibold text-sm">{pkg.rating}</span>
                  <span className="text-sm text-gray-500">({pkg.reviews} reviews)</span>
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-500 line-through">
                      ${pkg.price}
                    </div>
                    <div className="text-2xl font-bold text-primary-coral">
                      ${Math.round(pkg.price * (1 - pkg.discount / 100))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth
                  onClick={() => navigate(`/package/${pkg.id}`)}
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            View All Packages
          </Button>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default LatestPackages;
