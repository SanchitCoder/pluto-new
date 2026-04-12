import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  X, 
  CheckCircle, 
  Ribbon,
  Award
} from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import BookingDiscoveryModal from '../components/BookingDiscoveryModal';
import MobileBottomCTA from '../components/MobileBottomCTA';

const LuxuryTravelPage: React.FC = () => {
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const youtubePlayerRef = useRef<any>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  // YouTube video ID extracted from the URL
  const youtubeVideoId = 'lXVDfwq3x_I';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=0&mute=0&loop=1&playlist=${youtubeVideoId}&origin=${window.location.origin}`;

  // Initialize YouTube player
  const initializePlayer = React.useCallback(() => {
    const iframe = document.getElementById('youtube-player-luxury');
    if (!iframe) {
      // Retry after a short delay if iframe isn't ready yet
      setTimeout(initializePlayer, 100);
      return;
    }

    if (window.YT && window.YT.Player) {
      youtubePlayerRef.current = new window.YT.Player('youtube-player-luxury', {
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
      name: "Eveline D's",
      rating: 5,
      text: 'Pluto Travels created the most extraordinary journey for us. Every detail was perfect, and the experiences were truly once-in-a-lifetime.',
    },
    {
      name: 'Aayush Kalia',
      rating: 5,
      text: 'The level of personalization and attention to detail is unmatched. They truly understand what luxury travel means.',
    },
    {
      name: 'Oumayma',
      rating: 5,
      text: 'From start to finish, Pluto Travels exceeded all expectations. Our trip was absolutely flawless and unforgettable.',
    },
    {
      name: 'Amber',
      rating: 5,
      text: 'Working with Pluto Travels has transformed how we travel. They curate experiences that are simply magical.',
    },
  ];

  const beforePoints = [
    'Standard luxury packages Pre planned routes with limited personalization options',
    'Time wasted planning Months of research still leave you questioning your choices',
    'Paying more, getting less Premium prices without genuinely premium experiences',
    'Missing the magic The most extraordinary moments remain undiscovered',
  ];

  const afterPoints = [
    '100% bespoke design Every element tailored to your desires and dreams',
    'Time reclaimed Your only job is to pack your bags and go',
    'True value realized Every dollar invested in unforgettable experiences',
    'Accessing the impossible Private viewings, closed locations, once-in-a-lifetime privileges',
  ];

  const destinations = [
    {
      name: 'Greece',
      image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80',
    },
    {
      name: 'NEW ZEALAND',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80',
    },
    {
      name: 'Australia',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    },
    {
      name: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-luxury-darkBlue">
      {/* Hero Section */}
      <FadeInSection className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-luxury-darkBlue">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your World, Reimagined
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-3 sm:mb-4 leading-relaxed px-2">
              Curated luxury escapes that transcend ordinary travel
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 italic px-2">
              Travel Isn't a Trip, It's an Art. We Curate Masterpieces
            </p>

            {/* Hero Video - YouTube with Autoplay */}
            <motion.div
              ref={videoSectionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative bg-luxury-darkBlue"
            >
              <iframe
                id="youtube-player-luxury"
                src={youtubeEmbedUrl}
                className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
                allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
                title="Pluto Travels Luxury Video"
              />
            </motion.div>

            {/* Key Features */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8 px-2">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base md:text-lg">Reliable and Punctual Service</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base md:text-lg">Private Access to the Extraordinary</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="text-primary-orange flex-shrink-0" size={20} />
                <span className="text-sm sm:text-base md:text-lg">Seamless Luxury, End to End</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-3 sm:mb-4">
              <Button
                variant="gold"
                size="lg"
                onClick={() => setBookingDiscoveryOpen(true)}
                className="bg-primary-orange hover:bg-primary-orange/90 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                Book Your Private Consultation
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </Button>
            </div>
            <p className="text-white/70 text-xs sm:text-sm md:text-base px-2">
              Let us craft your next unforgettable journey, designed exclusively for you.
            </p>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Testimonials Section */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-darkBlue">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 px-4"
          >
            Testimonials
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg"
              >
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-primary-orange text-primary-orange" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{testimonial.text}</p>
                <div className="font-semibold text-base sm:text-lg text-gray-800">{testimonial.name}</div>
                <a href="#" className="text-primary-orange hover:text-primary-orange/80 text-xs sm:text-sm font-medium mt-2 inline-block">
                  Read more
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center px-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => setBookingDiscoveryOpen(true)}
              className="bg-primary-orange hover:bg-primary-orange/90 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Book Your Private Consultation
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Button>
          </div>
        </Container>
      </FadeInSection>

      {/* Why Choose Us Section */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-darkBlue">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 px-4"
          >
            WHY CHOOSE US ?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 px-4">
            {/* Before Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-5 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-luxury-darkBlue mb-4 sm:mb-6">BEFORE Pluto travels</h3>
              <div className="space-y-3 sm:space-y-4">
                {beforePoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <X className="text-red-500 flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                    <p className="text-gray-700 text-sm sm:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 rounded-xl p-5 sm:p-8 border-2 border-green-200"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-luxury-darkBlue mb-4 sm:mb-6">AFTER Pluto travels</h3>
              <div className="space-y-3 sm:space-y-4">
                {afterPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                    <p className="text-gray-700 text-sm sm:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center px-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => setBookingDiscoveryOpen(true)}
              className="bg-primary-orange hover:bg-primary-orange/90 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Book Your Private Consultation
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Button>
          </div>
        </Container>
      </FadeInSection>

      {/* Plan Your Journey Section */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-darkBlue">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 px-4"
          >
            PLAN YOUR JOURNEY WITH US
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="border-2 border-white rounded-xl overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-[250px] sm:h-[300px] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center px-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => setBookingDiscoveryOpen(true)}
              className="bg-primary-orange hover:bg-primary-orange/90 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Book Your Private Consultation
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Button>
          </div>
        </Container>
      </FadeInSection>

      {/* About Us Section */}
      <FadeInSection className="py-12 sm:py-16 bg-luxury-darkBlue">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 px-4"
          >
            About Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-6 sm:mb-8 px-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 relative overflow-hidden border border-white/20">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80)',
                }}
              />
              <div className="relative z-10">
                <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-3 sm:mb-4">
                  Founded in 2007, Pluto Travels began as a small boutique travel agency with a simple mission: to create extraordinary travel experiences that go beyond the ordinary.
                </p>
                <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-3 sm:mb-4">
                  What started as a passion for travel has grown into Dubai's most trusted travel concierge, serving executives, families, and discerning travelers worldwide. Our journey has been marked by innovation, excellence, and an unwavering commitment to our clients.
                </p>
                <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                  Today, we're proud to be recognized as industry leaders, with a team of expert travel consultants who bring decades of combined experience to every journey we plan.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-orange rounded-xl p-5 sm:p-6 text-white"
            >
              <Ribbon className="text-white mb-3 sm:mb-4" size={32} />
              <h3 className="text-lg sm:text-xl font-bold mb-2">2023 Best Travel Agency</h3>
              <p className="text-white/90 text-sm sm:text-base">Dubai Tourism Excellence Award</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-orange rounded-xl p-5 sm:p-6 text-white"
            >
              <Award className="text-white mb-3 sm:mb-4" size={32} />
              <h3 className="text-lg sm:text-xl font-bold mb-2">2022 Luxury Travel Specialist</h3>
              <p className="text-white/90 text-sm sm:text-base">Conde Nast Traveler Recognition</p>
            </motion.div>
          </div>

          <div className="text-center px-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => setBookingDiscoveryOpen(true)}
              className="bg-primary-orange hover:bg-primary-orange/90 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Book Your Private Consultation
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Button>
          </div>
        </Container>
      </FadeInSection>

      <MobileBottomCTA />
      
      <BookingDiscoveryModal 
        isOpen={bookingDiscoveryOpen} 
        onClose={() => setBookingDiscoveryOpen(false)}
        formUrl="https://crm.plutotravels.ae/widget/booking/PXUJZZFxr2kaGwRnA0rL"
        formId="PXUJZZFxr2kaGwRnA0rL"
      />
    </div>
  );
};

export default LuxuryTravelPage;

