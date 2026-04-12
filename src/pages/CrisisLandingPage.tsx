import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

/**
 * Crisis landing page — key layout:
 * - Section 1 (Hero): Two frames — left = content + form CTA with plane stock BG; right = featured image. Stacks on mobile.
 * - Section 2: Two columns — image left, content right. Solid bg-luxury-pearl. Content first on mobile.
 * - Section 3: Two columns — content left, image right. Solid bg-white. Image first on mobile.
 * - Section 4: Two columns — image left, content right. Gradient bg. Content first on mobile.
 */

// Crisis landing page images (served from public folder for production)
const IMAGE_1 = '/crisis-image-1.jpeg'; // Aircraft sunset – "Flight Tickets Available Now"
const IMAGE_2 = '/crisis-image-2.jpeg'; // US–Israel–Iran escalation / UAE airline cancellations
const IMAGE_3 = '/crisis-image-3.jpeg'; // Charter services / airport scene
const IMAGE_4 = '/crisis-image-4.jpeg'; // Emergency Contact Creative

// Stock plane/aviation backgrounds (Unsplash, free to use)
const BG_HERO = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80'; // airplane wing / sky (hero only)

const META_PIXEL_ID = '2840110662803341';

export default function CrisisLandingPage() {
  const navigate = useNavigate();

  // Meta Pixel: load script, init, and track Search on crisis landing page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w = window as any;
    if (!w.fbq) {
      (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
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
      w.fbq('init', META_PIXEL_ID);
      w.fbq('track', 'Search');
    } else {
      w.fbq('track', 'Search');
    }
  }, []);

  return (
    <div className="min-h-screen bg-luxury-canvas">
      {/* Section 1 — Hero (Emergency Travel Assistance): two frames — content | image */}
      <FadeInSection className="relative min-h-0 flex flex-col lg:flex-row lg:min-h-[90vh] overflow-hidden">
        {/* Background: plane/sky stock image (content side only on desktop) */}
        <div
          className="absolute inset-0 lg:right-1/2 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${BG_HERO})` }}
          aria-hidden
        />
        <div className="absolute inset-0 lg:right-1/2 bg-gradient-to-r from-primary-navy/85 via-primary-navy/75 to-transparent lg:to-transparent" aria-hidden />
        {/* Frame 1 — Content: above image on mobile, left on desktop */}
        <div className="relative z-20 flex-shrink-0 lg:flex-1 flex items-center py-6 sm:py-10 lg:py-20 order-1 min-h-0">
          <Container className="w-full px-4 sm:px-6">
            <div className="max-w-xl w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight"
              >
                Emergency Flights & Travel Assistance During UAE Flight Disruptions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm sm:text-lg text-white/95 mb-3 sm:mb-6 leading-snug"
              >
                Due to the ongoing regional conflict escalation and airline cancellations, many travelers across the UAE are facing sudden travel disruptions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-sm sm:text-lg text-white/95 mb-4 sm:mb-8 leading-snug"
              >
                Pluto Travels is offering emergency flight bookings, charter flight services, and 24/7 travel assistance to help you reach your destination safely.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-1.5 sm:space-y-3 mb-4 sm:mb-8"
              >
                {[
                  'Charter flights from Fujairah & Oman',
                  'Emergency flight rebookings',
                  'Priority travel assistance',
                  'Luxury travel alternatives',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4"
              >
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => navigate('/crisis/form')}
                  className="shadow-xl w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3"
                >
                  Get Emergency Travel Assistance
                </Button>
              </motion.div>
            </div>
          </Container>
        </div>

        {/* Frame 2 — Image: below content on mobile, right on desktop; never overlaps content */}
        <div className="relative z-10 flex-shrink-0 lg:flex-1 w-full min-h-[40vh] sm:min-h-[45vh] lg:min-h-[90vh] flex items-center justify-center bg-primary-navy/5 p-3 sm:p-6 lg:p-10 order-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-full lg:max-w-2xl aspect-video lg:aspect-auto lg:h-[80vh] rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl flex items-center justify-center bg-white/50"
          >
            <img
              src={IMAGE_1}
              alt="Emergency flights and travel assistance"
              className="w-full h-full object-contain max-w-full max-h-full"
            />
          </motion.div>
        </div>
      </FadeInSection>

      {/* Section 2 — Flight Disruptions Update */}
      <FadeInSection className="py-5 sm:py-12 lg:py-20 bg-luxury-pearl">
        <Container className="px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-primary-navy/10 flex items-center justify-center order-2 lg:order-1"
            >
              <img src={IMAGE_2} alt="UAE airline disruptions" className="w-full h-full object-contain" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold text-primary-navy mb-3 sm:mb-6 leading-tight">
                Major UAE Airline Disruptions Affecting Travelers
              </h2>
              <p className="text-luxury-slate text-sm sm:text-lg mb-3 sm:mb-6 leading-snug">
                Due to the escalating geopolitical tensions in the region, several airlines operating in the UAE have extended flight cancellations and schedule disruptions.
              </p>
              <p className="text-primary-navy font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Travelers may face:</p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-8">
                {['Cancelled flights', 'Sudden schedule changes', 'Limited seat availability', 'Long rebooking wait times'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-luxury-slate text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-luxury-slate text-sm sm:text-base mb-4 sm:mb-8 leading-snug">
                Pluto Travels is actively assisting travelers with urgent rebookings, alternative routes, and charter travel solutions.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button variant="primary" size="md" onClick={() => navigate('/crisis/form')} className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3">
                  Check Available Flights
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </FadeInSection>

      {/* Section 3 — Charter & Luxury Travel Options */}
      <FadeInSection className="py-5 sm:py-12 lg:py-20 bg-luxury-canvas">
        <Container className="px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold text-primary-navy mb-3 sm:mb-6 leading-tight">
                Luxury & Charter Travel Options Still Available
              </h2>
              <p className="text-luxury-slate text-sm sm:text-lg mb-3 sm:mb-6 leading-snug">
                Even during periods of uncertainty, premium travel solutions remain available.
              </p>
              <p className="text-primary-navy font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Pluto Travels provides:</p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                {[
                  'Charter flights from Fujairah & Oman',
                  'Private and shared charter options',
                  'VIP airport assistance',
                  'Flexible departure schedules',
                  'Personalized travel arrangements',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-luxury-slate text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-luxury-slate text-sm sm:text-base mb-4 sm:mb-8 leading-snug">
                Whether you're traveling for business, family emergencies, or urgent departures, we ensure your journey remains smooth, secure, and comfortable.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button variant="gold" size="md" onClick={() => navigate('/crisis/form')} className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3">
                  Request Charter Flight Options
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-primary-teal/10 order-1 lg:order-2 flex items-center justify-center"
            >
              <img src={IMAGE_3} alt="Charter travel options" className="w-full h-full object-contain" />
            </motion.div>
          </div>
        </Container>
      </FadeInSection>

      {/* Section 4 — 24/7 Emergency Support */}
      <FadeInSection className="py-5 sm:py-12 lg:py-20 bg-gradient-to-br from-primary-navy via-primary-teal/90 to-luxury-darkBlue text-white">
        <Container className="px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-white/10 flex items-center justify-center order-2 lg:order-1"
            >
              <img src={IMAGE_4} alt="24/7 Emergency support" className="w-full h-full object-contain" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                24/7 Emergency Travel Support
              </h2>
              <p className="text-white/95 text-sm sm:text-lg mb-3 sm:mb-6 leading-snug">
                Our travel experts are available around the clock to help travelers affected by the current airline disruptions.
              </p>
              <p className="text-accent-gold font-semibold mb-2 sm:mb-4 text-sm sm:text-base">We assist with:</p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-8">
                {['Flight rebookings', 'Charter flight arrangements', 'Refund guidance', 'Travel advisory support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/95 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => navigate('/crisis/form')}
                  className="shadow-xl w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3"
                >
                  Get Immediate Travel Help
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </FadeInSection>
    </div>
  );
}
