import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ThumbsUp, Award } from 'lucide-react';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';
import { useCyclingCardScales, cardZoomScaleTransition } from '../hooks/useCyclingCardScales';

const ClientReviews: React.FC = () => {
  const scales = useCyclingCardScales(3);

  const reviews = [
    {
      icon: MessageSquare,
      count: '850+',
      label: 'Client Reviews',
      rating: 4.9,
      gradient: 'from-primary-teal to-primary-navy',
    },
    {
      icon: ThumbsUp,
      count: '98%',
      label: 'Satisfaction Rate',
      rating: 5.0,
      gradient: 'from-primary-coral to-primary-orange',
    },
    {
      icon: Award,
      count: '15+',
      label: 'Industry Awards',
      rating: 4.8,
      gradient: 'from-accent-gold to-primary-orange',
    },
  ];

  return (
    <FadeInSection className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F4F7FB] to-[#EEF2F7] py-20">
      {/* Soft cloud luminance (matches hero cloudy blend / cool sky-white) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_65%_at_50%_-15%,rgba(255,255,255,0.92)_0%,transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_20%_100%,rgba(255,255,255,0.45)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_82%_100%,rgba(241,245,249,0.5)_0%,transparent_52%)]"
        aria-hidden
      />
      <Container className="relative z-10">
        <div className="mb-12 relative z-10 w-full text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-luxury-darkBlue md:text-4xl lg:text-5xl mb-4"
          >
            CLIENT REVIEWS
          </motion.h2>
          <div className="font-outfit flex flex-wrap items-center justify-start gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="fill-accent-gold text-accent-gold" size={28} />
            ))}
            <span className="ml-3 text-2xl font-semibold text-gray-700">4.9/5.0</span>
          </div>
        </div>

        <div className="font-outfit grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                animate={{ scale: scales[index] ?? 1 }}
                transition={{ scale: cardZoomScaleTransition }}
                className={`group relative ${(scales[index] ?? 1) > 1.05 ? 'z-20' : 'z-10'}`}
                style={{ transformOrigin: 'center center' }}
              >
              <div className="relative rounded-3xl overflow-hidden transition-shadow duration-500 ease-out shadow-lg shadow-gray-200/80 group-hover:shadow-xl group-hover:shadow-primary-teal/10">
                <div className="client-review-shimmer-ring" aria-hidden />
                <div className="relative z-10 m-[2px] rounded-[calc(1.5rem-2px)] bg-white p-8 transition-transform duration-500 ease-out group-hover:translate-y-[-2px] border border-gray-100/80">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${review.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300 shadow-md`}
                  >
                    <review.icon className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-luxury-darkBlue mb-2 tracking-tight">{review.count}</div>
                  <div className="text-gray-600 mb-4 font-medium">{review.label}</div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`${
                          star <= review.rating
                            ? 'fill-accent-gold text-accent-gold'
                            : 'text-gray-300'
                        }`}
                        size={18}
                      />
                    ))}
                  </div>
                </div>
              </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </FadeInSection>
  );
};

export default ClientReviews;
