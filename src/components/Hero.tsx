import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Clock, Plane, Star } from 'lucide-react';
import Button from './Button';
import Container from './Container';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const stats = [
    { icon: Trophy, number: '17+', label: 'Years of Corporate Travel Excellence' },
    { icon: Clock, number: '24/7/365', label: 'Global Business Support' },
    { icon: Plane, number: '47,000+', label: 'Successful Business Trips' },
  ];

  const trustBadges = [
    'IATA Accredited',
    'ISO 9001 Certified',
    'Corporate Travel Excellence 2024',
    'Trusted by 500+ Global Companies',
    '98% Client Satisfaction Rate',
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darkBlue/90 via-primary-navy/85 to-primary-teal/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>

      <Container className="relative z-10 py-32">
        <motion.div
          style={{ opacity }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6 leading-tight"
          >
            Travel Smarter. Connect Globally. Manage Better.
            Seamless Business Travel, Powered by Trusted Global Partners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Give business travellers smoother travel experiences globally and across the Middle East with our 24/7 personalised support, agile technology and actionable insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="text-accent-gold" size={28} />
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {stat.number}
                  </span>
                </div>
                <p className="text-sm md:text-base text-white/80">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="gold" size="lg" href="#consultation">
              <div className="text-left">
                <div className="font-semibold">Book a Meeting</div>
                <div className="text-xs opacity-90">Schedule your corporate travel consultation</div>
              </div>
            </Button>
            <Button variant="secondary" size="lg" href="#portfolio">
              Discover Our Solutions
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 bg-white py-6 z-10">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                {badge.includes('Google') && <Star className="text-accent-gold fill-accent-gold" size={16} />}
                <span className="text-xs md:text-sm font-medium text-gray-700">{badge}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
