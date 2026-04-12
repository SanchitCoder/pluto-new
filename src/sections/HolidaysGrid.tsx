import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

const HolidaysGrid: React.FC = () => {
  const destinations = [
    { name: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80', packages: 25 },
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80', packages: 32 },
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80', packages: 18 },
    { name: 'Switzerland', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', packages: 22 },
    { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80', packages: 28 },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80', packages: 30 },
    { name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80', packages: 24 },
    { name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80', packages: 35 },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-pearl">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
            HOLIDAYS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular holiday destinations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden h-64 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                <p className="text-white/90 text-sm mb-2">{dest.packages} Packages</p>
                <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </FadeInSection>
  );
};

export default HolidaysGrid;
