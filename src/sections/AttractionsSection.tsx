import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import ConsultationModal from '../components/ConsultationModal';
import { FadeInSection } from '../components/FadeInSection';

const AttractionsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const attractions = [
    {
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80',
      title: 'Burj Khalifa',
      location: 'Dubai, UAE',
      rating: 4.9,
      price: 149,
    },
    {
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&q=80',
      title: 'Hagia Sophia',
      location: 'Istanbul, Turkey',
      rating: 4.8,
      price: 89,
    },
    {
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&q=80',
      title: 'Eiffel Tower',
      location: 'Paris, France',
      rating: 4.9,
      price: 129,
    },
    {
      image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=500&q=80',
      title: 'Colosseum',
      location: 'Rome, Italy',
      rating: 4.7,
      price: 99,
    },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-pearl">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
            TOP ATTRACTIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the world's most iconic landmarks and attractions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
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
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="fill-accent-gold text-accent-gold" size={14} />
                  <span className="font-semibold text-sm">{attraction.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-luxury-darkBlue mb-2">
                  {attraction.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{attraction.location}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="text-2xl font-bold text-primary-coral">
                      ${attraction.price}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            View All Attractions
          </Button>
        </div>
      </Container>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </FadeInSection>
  );
};

export default AttractionsSection;
