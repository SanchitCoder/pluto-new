import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FadeInOnMount } from '../components/FadeInSection';
import { SITE, yearsOfExperienceLabel } from '../lib/siteConfig';
import { ThumbsUp, Award, CheckCircle, Star, LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  text: string;
  color: string;
  onClick?: () => void;
}

const SLIDES = [
  {
    image: '/hero-global-business-office.webp',
    title: 'Global Business Travel Solutions',
    subtitle: 'Seamless corporate travel management across the world',
  },
  {
    image: '/hero-pluto-arabian-awards-2025.webp',
    title: 'Most Promising Travel Company of the Year 2025',
    subtitle: 'Honored with the Arabian Travel Awards - This recognition reflects our commitment to seamless, reliable travel solutions',
  },
  {
    image: '/hero-arabian-travel-market-team.webp',
    title: 'Celebrating Excellence Together',
    subtitle: 'Partnering with industry leaders to deliver trusted travel solutions worldwide',
  },
  {
    image: '/hero-corporate-travel-excellence.webp',
    title: 'Corporate Travel Excellence',
    subtitle: 'Technology-driven solutions for modern enterprises',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=70',
    title: 'Business Travel Analytics',
    subtitle: 'Data-driven insights for optimized travel management',
  },
];

const AUTOPLAY_MS = 5000;

const HeroSlider: React.FC = () => {
  const slides = SLIDES;
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef<boolean[]>(slides.map(() => false));
  const [inView, setInView] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const markLoaded = (index: number) => {
    loadedRef.current[index] = true;
  };

  // Pause autoplay (and all hero work) while the hero is scrolled out of view
  useEffect(() => {
    const node = rootRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Autoplay: only while visible + tab active, and only advance to an already-loaded image
  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setCurrentSlide((prev) => {
        for (let step = 1; step <= slides.length; step++) {
          const candidate = (prev + step) % slides.length;
          if (loadedRef.current[candidate]) return candidate;
        }
        return prev;
      });
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [inView, slides.length, currentSlide]); // restarts the timer on every slide change, incl. manual clicks

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
    { icon: ThumbsUp, text: `${yearsOfExperienceLabel()} Of Expertise`, color: 'text-accent-gold' },
    { icon: Award, text: '98.7% Client Retention', color: 'text-accent-gold' },
    { icon: CheckCircle, text: 'ISO 9001 Certified', color: 'text-accent-gold' },
    { icon: CheckCircle, text: 'IATA Certified', color: 'text-accent-gold' },
    { icon: CheckCircle, text: 'ICV Certified', color: 'text-accent-gold', onClick: () => window.open('/ICV Certificate.pdf', '_blank') },
    { icon: Star, text: `${SITE.aggregateRating.ratingValue}★ Rating`, color: 'text-accent-gold' },
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
      <div ref={rootRef} className="pointer-events-none absolute inset-0" aria-hidden />
      <h1 className="sr-only">
        Pluto Travels — Dubai&apos;s Premier Luxury Travel Concierge & Corporate Travel Management
      </h1>
      {/* All slides stay mounted and crossfade via opacity: no remount, no blank frame while an image loads */}
      <div className="absolute inset-0 h-full w-full bg-luxury-darkBlue">
        {slides.map((slide, index) => {
          const active = index === currentSlide;
          return (
            <div
              key={slide.image}
              aria-hidden={!active}
              className={`absolute inset-0 h-full w-full pt-12 transition-[opacity,transform] duration-[700ms] ease-out sm:pt-14 ${
                active ? 'scale-100 opacity-100' : 'pointer-events-none scale-[1.03] opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-contain"
                style={{ objectPosition: 'center' }}
                loading="eager"
                decoding="async"
                {...({ fetchpriority: index === 0 ? 'high' : 'low' } as Record<string, string>)}
                onLoad={() => markLoaded(index)}
                ref={(el) => {
                  if (el?.complete && el.naturalWidth > 0) markLoaded(index);
                }}
              />
              {/* Overlay gradients — lighter treatment on awards banner slide */}
              {index !== 1 && (
                <>
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-luxury-darkBlue/70 via-primary-navy/50 to-transparent" />
                  <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_30%_50%,rgba(43,122,155,0.3),transparent_50%)]" />
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col justify-center z-30">
        <div className="max-w-3xl w-full">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              {slides[currentSlide].title || fallbackTitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 font-light drop-shadow-md">
              {slides[currentSlide].subtitle || fallbackSubtitle}
            </p>
          </motion.div>

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
        </div>
      </div>

      {/* Decorative shapes - static (no infinite blurred-layer animation), hidden on mobile */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden overflow-hidden md:block" aria-hidden>
        <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-primary-teal/10 opacity-40 blur-3xl md:h-64 md:w-64" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-accent-gold/10 opacity-30 blur-3xl md:h-96 md:w-96" />
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
