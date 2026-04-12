import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      videoThumb: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80',
      title: 'How We Saved 28% on Corporate Travel Costs',
      author: 'Sarah Johnson',
      company: 'Tech Fortune 500',
    },
    {
      videoThumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      title: '24/7 Global Business Support Excellence',
      author: 'Ahmed Al-Mansoori',
      company: 'Energy Sector Executive',
    },
    {
      videoThumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
      title: 'Seamless Travel Management Platform',
      author: 'Jennifer Chen',
      company: 'Financial Services Director',
    },
  ];

  const results = [
    {
      number: '28%',
      label: 'Cost Savings',
      context: 'Average Corporate Travel Reduction',
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      context: 'Business Travel Happiness Rate',
    },
    {
      number: '95%',
      label: 'Policy Compliance',
      context: 'Travel Policy Adherence',
    },
    {
      number: '11 min',
      label: 'Response Time',
      context: '24/7 Emergency Support',
    },
  ];

  const reviews = [
    {
      rating: 5,
      text: 'Outstanding corporate travel management. They saved us 30% on our travel costs while improving our travelers\' experience significantly.',
      author: 'Mohammed K.',
      date: '2 days ago',
    },
    {
      rating: 5,
      text: 'Best corporate travel partner in the region. Their 24/7 support and technology platform have transformed our business travel.',
      author: 'Sarah L.',
      date: '5 days ago',
    },
  ];

  return (
    <FadeInSection className="py-24 bg-luxury-canvas" id="testimonials">
      <Container>
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Trusted by Leaders Across Industries
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-60 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-bold text-xs"
              >
                LOGO {i}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-700">
            <div>500+ Global Companies</div>
            <div>47,000+ Business Trips</div>
            <div>98% Client Satisfaction Rate</div>
          </div>
        </div>

        <SectionHeader title="What Our Clients Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={testimonial.videoThumb}
                  alt={testimonial.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-primary-navy fill-primary-navy ml-1" size={24} />
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-lg text-primary-navy mb-1">
                {testimonial.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {testimonial.author}, {testimonial.company}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutrals-warmGrey p-6 rounded-xl text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-gold mb-2">
                {result.number}
              </div>
              <div className="text-lg font-semibold text-primary-navy mb-1">
                {result.label}
              </div>
              <div className="text-xs text-gray-600">{result.context}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-neutrals-warmGrey p-8 rounded-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-primary-gold fill-primary-gold" size={24} />
              ))}
            </div>
            <p className="text-2xl font-bold text-primary-navy">4.9 out of 5.0</p>
            <p className="text-gray-600">Based on 247 Google Reviews</p>
          </div>

          <div className="space-y-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-primary-gold fill-primary-gold" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">"{review.text}"</p>
                <p className="text-sm text-gray-600">
                  — {review.author}, {review.date}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" href="https://g.page/r/your-google-review-link" external>
              Read All 247 Reviews on Google →
            </Button>
          </div>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default SocialProof;
