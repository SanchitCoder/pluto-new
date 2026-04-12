import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

const ServiceTiles: React.FC = () => {
  const services = [
    {
      id: 'business-travel',
      title: 'Business Travel Solutions',
      description: 'Streamlined corporate travel management for modern enterprises',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
      link: '/business-travel'
    },
    {
      id: 'corporate-events',
      title: 'Corporate Events Travel',
      description: 'We save your time and money with expert event travel coordination',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
      link: '/corporate-events'
    },
    {
      id: 'first-class',
      title: 'First Class Travel',
      description: 'Luxury travel experiences for discerning corporate executives',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
      link: '/first-class-travel'
    }
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-canvas">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored travel solutions designed for every corporate need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <Link to={service.link} className="block">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/80 via-primary-navy/60 to-primary-navy/80" />
                  
                  <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <div className="w-8 sm:w-12 h-1 bg-primary-gold mb-4 sm:mb-6"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/30 text-white hover:bg-white hover:text-primary-navy font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 group/link"
                      >
                        Learn More
                        <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </FadeInSection>
  );
};

export default ServiceTiles;
