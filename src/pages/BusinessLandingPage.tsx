import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection } from '../components/FadeInSection';

// YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Plane, 
  Globe, 
  Hotel, 
  Users,
  Award,
  TrendingDown,
  Shield,
  Clock,
  BarChart3,
  Building2,
  Headphones,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import ConsultationModal from '../components/ConsultationModal';
import { Destinations3DRowStack } from '../components/ImageSlider3D';
import { DESTINATION_CAROUSEL_SLIDES } from '../data/destinationCarouselSlides';
import { useCyclingCardScales, cardZoomScaleTransition } from '../hooks/useCyclingCardScales';

const whyChooseItems = [
  {
    icon: Award,
    title: '17+ Years of Expertise',
    description: 'Specialized in structured group travel and ultra-luxury experiences.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    description: 'One point of contact. Zero fragmentation.',
  },
  {
    icon: Globe,
    title: 'Global Network Access',
    description: 'Airlines, hotels, aviation partners, venues, and concierge worldwide.',
  },
  {
    icon: Building2,
    title: 'Structured Travel Ecosystems',
    description: 'We go beyond bookings — we design controlled, scalable, luxury travel systems.',
  },
];

const BusinessLandingPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const youtubePlayerRef = useRef<any>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const lastScrollY = useRef(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // YouTube video ID extracted from the URL
  const youtubeVideoId = 'ZDkjuMAv32o';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=0&mute=0&loop=1&playlist=${youtubeVideoId}&origin=${window.location.origin}`;

  // Initialize YouTube player
  const initializePlayer = React.useCallback(() => {
    const iframe = document.getElementById('youtube-player');
    if (!iframe) {
      // Retry after a short delay if iframe isn't ready yet
      setTimeout(initializePlayer, 100);
      return;
    }

    if (window.YT && window.YT.Player) {
      youtubePlayerRef.current = new window.YT.Player('youtube-player', {
        events: {
          onReady: (event: any) => {
            setIsPlayerReady(true);
          },
          onStateChange: (event: any) => {
            // Handle state changes if needed
          },
        },
      });
    }
  }, []);

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if script is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    // Load YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      if (youtubePlayerRef.current) {
        youtubePlayerRef.current.destroy();
      }
    };
  }, [initializePlayer]);

  // Initialize Meta Pixel
  useEffect(() => {
    // Load Meta Pixel script
    if (typeof window !== 'undefined' && !(window as any).fbq) {
      (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      (window as any).fbq('init', '2840110662803341');
      (window as any).fbq('track', 'Search');
    } else if ((window as any).fbq) {
      // If Meta Pixel is already loaded, just track the Search event
      (window as any).fbq('track', 'Search');
    }
  }, []);

  // Track form submission
  const trackFormSubmission = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

  // Mobile sticky CTA scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 200; // Show CTA after scrolling 200px
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate distance from bottom
      const distanceFromBottom = documentHeight - (currentScrollY + windowHeight);
      const footerThreshold = 200; // Hide CTA when within 200px of footer
      
      // Show CTA when:
      // 1. Scrolled past threshold (200px)
      // 2. Not near the footer (more than 200px from bottom)
      // 3. Scrolling down
      const shouldShow = currentScrollY > scrollThreshold && 
                        distanceFromBottom > footerThreshold &&
                        currentScrollY > lastScrollY.current;
      
      // Hide CTA when:
      // 1. Near top of page
      // 2. Near footer
      // 3. Scrolling up significantly
      const shouldHide = currentScrollY < scrollThreshold || 
                        distanceFromBottom <= footerThreshold ||
                        (currentScrollY < lastScrollY.current && currentScrollY < scrollThreshold + 100);
      
      if (shouldShow) {
        setShowMobileCTA(true);
      } else if (shouldHide) {
        setShowMobileCTA(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledScroll);
    };
  }, []);

  // Set up scroll autoplay when player is ready
  useEffect(() => {
    if (!isPlayerReady || !youtubePlayerRef.current) return;

    const section = videoSectionRef.current;
    if (!section) return;

    let isPlaying = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const player = youtubePlayerRef.current;
          if (!player) return;

          // Play video as soon as section enters viewport (even 1% visible)
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // Video section is visible, play it
            if (!isPlaying) {
              try {
                player.playVideo();
                isPlaying = true;
              } catch (error) {
                console.error('Error playing video:', error);
              }
            }
          } else {
            // Video section is not visible, pause it
            if (isPlaying) {
              try {
                player.pauseVideo();
                isPlaying = false;
              } catch (error) {
                console.error('Error pausing video:', error);
              }
            }
          }
        });
      },
      {
        threshold: [0, 0.01, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: '0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      isPlaying = false;
    };
  }, [isPlayerReady]);

  const testimonials = [
    {
      name: 'Seelam Usha',
      rating: 5,
      text: 'Outstanding service. Our corporate travel became seamless.',
    },
    {
      name: 'Jawahir Kalia',
      rating: 5,
      text: 'Professional team that understands executive needs.',
    },
    {
      name: 'Quayyum',
      rating: 5,
      text: 'Exceptional support and reporting visibility.',
    },
    {
      name: 'Adler',
      rating: 5,
      text: 'Transformed our travel experience entirely.',
    },
    {
      name: 'Mohammed Al-Rashid',
      rating: 5,
      text: 'Pluto Travels managed our global conference flawlessly. Their attention to detail and 24/7 support made all the difference.',
    },
    {
      name: 'Sarah Chen',
      rating: 5,
      text: 'The luxury travel experience they curated for our executive team was exceptional. Every detail was perfect.',
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'Cost savings of 28% while maintaining premium service quality. Outstanding results from a professional team.',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Their structured approach to corporate travel management has transformed how we handle business trips globally.',
    },
    {
      name: 'Ahmed Hassan',
      rating: 5,
      text: 'From private jet arrangements to luxury hotel bookings, Pluto Travels delivers excellence at every level.',
    },
    {
      name: 'Emma Wilson',
      rating: 5,
      text: 'The team\'s expertise in handling complex international travel logistics is unmatched. Highly recommended.',
    },
  ];

  // Auto-scroll testimonials carousel
  useEffect(() => {
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, [testimonials.length]);

  const whyPlutoCardScales = useCyclingCardScales(whyChooseItems.length);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    // Reset auto-scroll timer
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    // Reset auto-scroll timer
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
    // Reset auto-scroll timer
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    testimonialIntervalRef.current = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stats = [
    { value: '28%', label: 'Average Travel Cost Optimization' },
    { value: '500+', label: 'Global Organizations & Private Clients Served' },
    { value: '95+', label: 'Countries Covered' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const luxuryTravelSolutions = [
    'Corporate Travel Management Programs',
    'Global Corporate Events & Conferences',
    'Leadership Retreats & Board Meetings',
    'Incentive Travel & Reward Programs',
    'International Business Delegations',
    'End-to-End Event Logistics & On-Ground Execution',
  ];

  const eliteExperiences = [
    'Private Jet & Global Aviation Access',
    'Ultra-Luxury Hotels, Resorts & Private Villas',
    'Yacht Charters & Exclusive Maritime Experiences',
    'First-Class & Business-Class Travel',
    'VIP Airport Fast-Track & Private Lounge Access',
    'Chauffeur-Driven Executive Transfers',
  ];

  const destinations = DESTINATION_CAROUSEL_SLIDES;

  const faqs = [
    {
      question: 'Do you manage both corporate & luxury travel?',
      answer: 'Yes. We deliver structured enterprise travel programs and exclusive luxury experiences.',
    },
    {
      question: 'Can you align with internal corporate travel policies?',
      answer: 'Absolutely. Governance and compliance are core to our corporate model.',
    },
    {
      question: 'Do you provide international support?',
      answer: 'Yes. We operate across 95+ countries with 24/7 global assistance.',
    },
    {
      question: 'How do you achieve cost savings?',
      answer: 'Through negotiated contracts, centralized systems, and structured travel governance.',
    },
    {
      question: 'Is engagement flexible?',
      answer: 'Yes. We offer scalable models tailored to corporate and individual client needs.',
    },
  ];

  // Detect if user prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Optimize viewport settings for IntersectionObserver
  const viewportOptions = { once: true, margin: '-50px' };

  return (
    <div className="min-h-screen bg-luxury-canvas mobile-cta-spacing" style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <FadeInSection className="relative pt-12 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-primary-navy via-primary-teal to-primary-coral">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            className="text-center max-w-4xl mx-auto"
            style={{ willChange: 'transform, opacity' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              STRATEGIC GROUP & INDIVIDUAL LUXURY TRAVEL MANAGEMENT
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-4 sm:mb-6 font-bold drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Where Scale Meets Sophistication.
            </p>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 leading-normal">
              From corporate delegations and global events to private jet itineraries and bespoke executive escapes — every movement is managed with precision, discretion, and measurable impact.
            </p>

            {/* Video Section */}
            <motion.div
              ref={videoSectionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
              className="mb-8 sm:mb-10"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  id="youtube-player"
                  src={youtubeEmbedUrl}
                  className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
                  allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 'none' }}
                  title="Pluto Travels Corporate Video"
                />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 + index * 0.1 }}
                  className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:p-6"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">{stat.value}</div>
                  <div className="text-sm text-white/90 sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{ touchAction: 'manipulation' }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => setConsultOpen(true)}
                className="text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Luxury Travel Consultation Now
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Results Section */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-canvas">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-center max-w-4xl mx-auto"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-luxury-darkBlue mb-4 sm:mb-6 drop-shadow-lg">
              TRAVEL BACKED BY RESULTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {[
                { value: '28%', label: 'Average Travel Cost Optimization', gradient: 'from-primary-navy to-primary-teal' },
                { value: '500+', label: 'Global Organizations & Private Clients Served', gradient: 'from-primary-teal to-primary-coral' },
                { value: '95+', label: 'Countries Covered', gradient: 'from-primary-coral to-primary-orange' },
                { value: '98%', label: 'Client Satisfaction', gradient: 'from-primary-orange to-primary-gold' },
              ].map((item, index) => (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.6,
                    delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
                  }}
                  className={`rounded-xl bg-gradient-to-br ${item.gradient} p-6 text-white shadow-md sm:p-8`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">{item.value}</div>
                  <div className="text-sm sm:text-base">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 font-semibold">
              Our clients don't just travel — they operate strategically and experience exceptionally.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{ touchAction: 'manipulation' }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => setConsultOpen(true)}
                className="px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Luxury Travel Consultation Now
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Why Choose Section */}
      <FadeInSection className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-luxury-darkBlue mb-4 sm:mb-6 drop-shadow-lg">
              WHY PLUTO TRAVELS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            {whyChooseItems.map((item, index) => {
              const Icon = item.icon;
              const iconGradients = [
                'from-primary-teal to-primary-navy',
                'from-primary-coral to-primary-orange',
                'from-accent-gold to-primary-orange',
                'from-primary-navy to-primary-teal',
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <motion.div
                    animate={{ scale: whyPlutoCardScales[index] ?? 1 }}
                    transition={{ scale: cardZoomScaleTransition }}
                    className={`group relative h-full ${
                      (whyPlutoCardScales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'
                    }`}
                    style={{ transformOrigin: 'center center' }}
                  >
                    <div className="relative h-full rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                      <div className="client-review-shimmer-ring" aria-hidden />
                      <div className="relative z-10 m-[2px] flex h-full flex-col rounded-[calc(1.5rem-2px)] border border-gray-100/80 bg-white p-6 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] sm:p-8">
                        <div
                          className={`mb-4 flex h-16 w-16 transform items-center justify-center rounded-2xl bg-gradient-to-br shadow-md transition-transform duration-300 group-hover:rotate-6 sm:mb-6 ${iconGradients[index % iconGradients.length]}`}
                        >
                          <Icon className="text-white" size={32} />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-luxury-darkBlue sm:text-2xl">{item.title}</h3>
                        <p className="leading-normal text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{ touchAction: 'manipulation' }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => setConsultOpen(true)}
                className="px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Luxury Travel Consultation Now
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </div>
        </Container>
      </FadeInSection>

      {/* Luxury Travel Solutions Section */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-canvas">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-luxury-darkBlue mb-4 sm:mb-6 drop-shadow-lg">
              LUXURY TRAVEL SOLUTIONS
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
              Designed for enterprises, leadership teams, founders, families, and high-net-worth individuals.
            </p>

            <div className="text-left max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3">
              {luxuryTravelSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-primary-teal flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 font-semibold italic">
              Built for scale. Structured for control. Executed flawlessly.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{ touchAction: 'manipulation' }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => setConsultOpen(true)}
                className="px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Luxury Travel Consultation Now
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Luxury Travel & Elite Experiences Section */}
      <FadeInSection className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-luxury-darkBlue mb-4 sm:mb-6 drop-shadow-lg">
              LUXURY TRAVEL & ELITE EXPERIENCES
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
              Exclusively curated for executives, founders, and high-net-worth individuals who expect privacy, discretion, and exceptional service.
            </p>

            <div className="text-left max-w-3xl mx-auto mb-6 sm:mb-8 space-y-3">
              {eliteExperiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-primary-teal flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{ touchAction: 'manipulation' }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => setConsultOpen(true)}
                className="px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Luxury Travel Consultation Now
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Iconic Luxury Destinations — 3× 3D carousel rows (middle reverses direction) */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-canvas">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="mx-auto mb-8 max-w-4xl text-center sm:mb-10"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="mb-4 text-4xl font-extrabold text-luxury-darkBlue drop-shadow-lg sm:mb-6 sm:text-5xl md:text-6xl">
              ICONIC LUXURY DESTINATIONS WE'VE CURATED
            </h2>
            <p className="text-lg text-gray-700 sm:text-xl">
              Pluto Travels has organized group travel, executive retreats, corporate events, and luxury escapes in some of the world's most prestigious destinations.
            </p>
          </motion.div>
        </Container>

        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip px-0 py-2 sm:py-4">
          <ul className="sr-only">
            {destinations.map((d) => (
              <li key={d.name}>{d.name}</li>
            ))}
          </ul>
          <Destinations3DRowStack slides={destinations} duration={40} />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="mx-auto mt-8 max-w-4xl text-center sm:mt-10"
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="mb-6 text-lg italic text-gray-700 sm:mb-8 sm:text-xl">
              From global business capitals to ultra-exclusive island retreats — every destination is executed with discretion and excellence.
            </p>

            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{ touchAction: 'manipulation' }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => setConsultOpen(true)}
                className="relative overflow-hidden px-8 py-4 shadow-2xl transition-all duration-500 group hover:shadow-3xl sm:px-10 sm:py-5"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Luxury Travel Consultation Now
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Ready to Upgrade Section - Part 1 */}
      <FadeInSection className="py-12 sm:py-16 bg-gradient-to-br from-primary-navy via-primary-teal to-primary-coral text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="max-w-4xl mx-auto text-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 drop-shadow-lg text-white">
              READY TO ELEVATE YOUR TRAVEL EXPERIENCE?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              If you are:
            </p>
            <ul className="text-left max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Managing frequent group or executive travel</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Coordinating international corporate events</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Planning leadership retreats or global conferences</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Seeking structured travel control with luxury execution</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Designing ultra-private journeys for individuals or families</span>
              </li>
            </ul>
            <p className="text-xl sm:text-2xl font-semibold">
              It is time to move from reactive bookings to strategic luxury travel management.
            </p>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Strategy Session Section - Part 2 */}
      <FadeInSection className="py-12 sm:py-16 bg-gradient-to-br from-primary-navy via-primary-teal to-primary-coral text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="max-w-4xl mx-auto text-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 drop-shadow-lg text-white">
              IN YOUR CONSULTATION, WE WILL
            </p>
            <div className="text-left max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Evaluate your current travel structure</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Identify optimization opportunities</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Strengthen visibility and operational control</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Design scalable group travel frameworks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary-gold flex-shrink-0 mt-1" size={24} />
                <span>Curate bespoke individual luxury journeys</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              style={{ touchAction: 'manipulation' }}
            >
              <Button
                variant="gold"
                size="lg"
                onClick={() => setConsultOpen(true)}
                className="px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group text-white"
              >
                <span className="relative z-10 flex items-center">
                  Book Your Luxury Travel Consultation Now
                  <motion.span
                    className="ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-canvas">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="max-w-4xl mx-auto"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-luxury-darkBlue text-center mb-12 drop-shadow-lg">
              🗣 CLIENT TESTIMONIALS
            </h2>

            {/* Testimonials Carousel */}
            <div className="relative mb-8 sm:mb-10">
              <div className="relative overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                    className="rounded-xl bg-gradient-to-br from-primary-navy to-primary-teal p-6 text-white shadow-lg sm:p-8 md:p-10"
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="mb-4 flex items-center gap-1 sm:mb-6">
                      {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                        <Star key={i} className="fill-primary-gold text-primary-gold" size={24} />
                      ))}
                    </div>
                    <p className="mb-6 text-base leading-normal text-white/90 sm:mb-8 sm:text-lg md:text-xl">
                      {testimonials[currentTestimonialIndex].text}
                    </p>
                    <div className="text-lg font-semibold sm:text-xl md:text-2xl">
                      {testimonials[currentTestimonialIndex].name}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 sm:p-3 rounded-full bg-primary-navy text-white hover:bg-primary-teal transition-colors shadow-lg hover:shadow-xl"
                  aria-label="Previous testimonial"
                  style={{ touchAction: 'manipulation' }}
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Carousel Indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`h-2 sm:h-3 rounded-full transition-all ${
                        index === currentTestimonialIndex
                          ? 'bg-primary-teal w-8 sm:w-10'
                          : 'bg-gray-300 w-2 sm:w-3 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      style={{ touchAction: 'manipulation' }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 sm:p-3 rounded-full bg-primary-navy text-white hover:bg-primary-teal transition-colors shadow-lg hover:shadow-xl"
                  aria-label="Next testimonial"
                  style={{ touchAction: 'manipulation' }}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Testimonial Counter */}
              <div className="text-center mt-4 text-gray-600 text-sm sm:text-base">
                {currentTestimonialIndex + 1} / {testimonials.length}
              </div>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                style={{ touchAction: 'manipulation' }}
              >
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => setConsultOpen(true)}
                  className="px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Book Your Luxury Travel Consultation Now
                    <motion.span
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* FAQs Section */}
      <FadeInSection className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="max-w-4xl mx-auto"
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-luxury-darkBlue text-center mb-12 drop-shadow-lg">
              ❓ FAQs
            </h2>

            <div className="space-y-4 mb-8 sm:mb-10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 sm:p-6"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span className="pr-4 text-lg font-bold text-luxury-darkBlue sm:text-xl">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="flex-shrink-0 text-primary-teal" size={24} />
                    ) : (
                      <ChevronDown className="flex-shrink-0 text-primary-teal" size={24} />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4 sm:px-6 sm:pb-6"
                    >
                      <p className="leading-normal text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOptions}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                style={{ touchAction: 'manipulation' }}
              >
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => setConsultOpen(true)}
                  className="px-8 sm:px-10 py-4 sm:py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Book Your Luxury Travel Consultation Now
                    <motion.span
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Sticky CTA Button - Desktop Only */}
      <div className="hidden sm:flex fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={() => setConsultOpen(true)}
            className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group text-white text-xs sm:text-sm md:text-base font-semibold"
          >
            <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
              <span className="hidden sm:inline">Book Your Luxury Travel Consultation Now</span>
              <span className="sm:hidden">Book Consultation</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </Button>
        </motion.div>
      </div>

      {/* Mobile Sticky CTA Button - Mobile Only - Currently Hidden */}
      {/* <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="sm:hidden mobile-sticky-cta"
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              padding: '1rem',
              paddingBottom: `calc(1rem + env(safe-area-inset-bottom))`,
            }}
          >
            <div className="max-w-lg mx-auto">
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => setConsultOpen(true)}
                  className="w-full px-4 py-3.5 shadow-2xl transition-all duration-300 relative overflow-hidden group text-white text-sm font-semibold rounded-xl"
                >
                  <span className="relative z-10 flex items-center justify-center whitespace-nowrap">
                    <span>Book Consultation</span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <ConsultationModal 
        isOpen={consultOpen} 
        onClose={() => setConsultOpen(false)}
        onFormSubmit={trackFormSubmission}
      />
    </div>
  );
};

export default BusinessLandingPage;
