import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInOnMount } from '../components/FadeInSection';
import { ThumbsUp, Award, CheckCircle, Star, LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  text: string;
  color: string;
  onClick?: () => void;
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: '/hero-global-business-office.png',
      title: 'Global Business Travel Solutions',
      subtitle: 'Seamless corporate travel management across the world',
    },
    {
      image: '/hero-pluto-arabian-awards-2025.png',
      title: 'Most Promising Travel Company of the Year 2025',
      subtitle: 'Honored with the Arabian Travel Awards - This recognition reflects our commitment to seamless, reliable travel solutions',
    },
    {
      image: '/hero-corporate-travel-excellence.png',
      title: 'Corporate Travel Excellence',
      subtitle: 'Technology-driven solutions for modern enterprises',
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
      title: 'Business Travel Analytics',
      subtitle: 'Data-driven insights for optimized travel management',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality - slides change every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Run once on mount

  // Touch swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const fallbackTitle = 'Travel Smarter. Connect Globally.';
  const fallbackSubtitle =
    'Seamless business travel, luxury escapes, and corporate solutions—with 24/7 support and trusted global partners.';

  const stats: StatItem[] = [
    { icon: ThumbsUp, text: '18+ Years Of Expertise', color: 'text-accent-gold' },
    { icon: Award, text: '98.7% Client Retention', color: 'text-accent-gold' },
    { icon: CheckCircle, text: 'ISO 9001 Certified', color: 'text-accent-gold' },
    { icon: CheckCircle, text: 'IATA Certified', color: 'text-accent-gold' },
    { icon: CheckCircle, text: 'ICV Certified', color: 'text-accent-gold', onClick: () => window.open('/ICV Certificate.pdf', '_blank') },
    { icon: Star, text: '4.9* Rating', color: 'text-accent-gold' },
  ];

  return (
    <FadeInOnMount
      className="relative w-full min-h-screen h-screen overflow-hidden bg-luxury-darkBlue"
      style={{
        width: '100%',
        position: 'relative',
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full pt-12 sm:pt-14"
          style={{ boxSizing: 'border-box' }}
        >
          {/* Image container - all slides use contain so images fit inside the hero */}
          <div className="absolute inset-0 w-full h-full bg-luxury-darkBlue">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title || 'Pluto Travels hero'}
              className="absolute inset-0 w-full h-full object-contain"
              style={{ 
                objectPosition: 'center',
                width: '100%',
                height: '100%',
              }}
              loading="lazy"
            />
          </div>
          
          {/* Overlay gradients — lighter treatment on awards banner slide */}
          {currentSlide !== 1 && (
            <>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-luxury-darkBlue/70 via-primary-navy/50 to-transparent" />
              <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(43,122,155,0.3),transparent_50%)]" />
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col justify-center z-30">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl w-full"
        >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
            {slides[currentSlide].title || fallbackTitle}
          </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 font-light drop-shadow-md">
            {slides[currentSlide].subtitle || fallbackSubtitle}
          </p>

            {/* Statistics Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-4 sm:mb-6 md:mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isClickable = stat.onClick !== undefined;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={stat.onClick}
                    className={`flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 md:px-4 py-2 sm:py-1.5 md:py-2 rounded-lg border border-white/20 min-h-[44px] sm:min-h-0 touch-manipulation ${
                      isClickable 
                        ? 'cursor-pointer hover:bg-white/20 active:bg-white/30 active:scale-95 transition-all select-none' 
                        : ''
                    }`}
                    role={isClickable ? 'button' : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                    onKeyDown={isClickable ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        stat.onClick?.();
                      }
                    } : undefined}
                    aria-label={isClickable ? `${stat.text} - Click to view certificate` : undefined}
                  >
                    <Icon className={`${stat.color} w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0`} />
                    <span className="text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">{stat.text}</span>
                  </motion.div>
                );
              })}
            </div>
        </motion.div>
      </div>

      {/* Decorative Shapes - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden md:block">
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full bg-primary-teal/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-accent-gold/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Soft cloudy blend into the section below (matches luxury-canvas / pearl) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-32 sm:h-40 md:h-48"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-pearl/55 to-luxury-canvas" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_115%_80%_at_50%_100%,rgba(255,255,255,0.5)_0%,rgba(248,250,252,0.2)_42%,transparent_68%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_55%_at_22%_100%,rgba(255,255,255,0.35)_0%,transparent_58%)] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_78%_95%,rgba(241,245,249,0.45)_0%,transparent_55%)]" />
      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all touch-manipulation ${
              currentSlide === index ? 'bg-white w-6 sm:w-8 md:w-10' : 'bg-white/50 w-2 sm:w-2.5 md:w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </FadeInOnMount>
  );
};

export default HeroSlider;
