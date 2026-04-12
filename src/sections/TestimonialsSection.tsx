import React from 'react';
import { Star } from 'lucide-react';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';
import { ThreeDScrollTriggerContainer } from '../components/ThreeDScrollTrigger';
import { TestimonialMarqueeRow } from '../components/TestimonialMarqueeRow';
import type { ShuffleTestimonial } from '../components/TestimonialShuffleStack';

const TestimonialsSection: React.FC = () => {
  const googleReviews: ShuffleTestimonial[] = [
    {
      id: 'g-mohammed-k',
      name: 'Mohammed K.',
      title: '2 weeks ago',
      rating: 5,
      text: 'Exceptional service! Pluto Travels handled our family vacation to Europe flawlessly. From visa applications to hotel bookings, everything was perfect. Highly recommended!',
      avatarClassName: 'bg-gradient-to-br from-blue-500 to-purple-600',
    },
    {
      id: 'g-sarah-l',
      name: 'Sarah L.',
      title: '1 month ago',
      rating: 5,
      text: 'Outstanding corporate travel management. They saved us thousands on our business trips and the 24/7 support is incredible. Professional team!',
      avatarClassName: 'bg-gradient-to-br from-green-500 to-teal-600',
    },
    {
      id: 'g-ahmed-c',
      name: 'Ahmed C.',
      title: '3 weeks ago',
      rating: 5,
      text: 'The platinum concierge service is worth every dirham. They arranged exclusive experiences and handled every detail perfectly. Truly luxury travel!',
      avatarClassName: 'bg-gradient-to-br from-orange-500 to-red-600',
    },
    {
      id: 'g-h-rizvi',
      name: 'H. Rizvi',
      title: '1 week ago',
      rating: 5,
      text: 'We used Pluto for our travel itinerary and they exceeded every expectation. Flights, transfers, and boutique hotels were seamless, and the team answered messages within minutes even late at night. Warm, knowledgeable, and genuinely invested in our trip.',
      avatarClassName: 'bg-gradient-to-br from-indigo-500 to-violet-600',
    },
    {
      id: 'g-k-ahmad',
      name: 'K. Ahmad',
      title: '2 weeks ago',
      rating: 5,
      text: 'Our company books all executive travel through Pluto and the consistency is outstanding. Competitive rates, clear invoicing, and proactive rebooking when schedules change. The staff know our preferences by heart—could not ask for a better partner.',
      avatarClassName: 'bg-gradient-to-br from-rose-500 to-amber-600',
    },
    {
      id: 'g-karisa-bachani',
      name: 'Karisa Bachani',
      title: 'a month ago · 1 review',
      rating: 5,
      text: 'Had a great experience with Pluto Travels! The team was professional, responsive, and handled everything smoothly from booking to follow-up. They made the whole travel process stress-free. Highly recommend their services!',
      avatarInitial: 'K',
      avatarClassName: 'bg-gradient-to-br from-purple-600 to-violet-800',
    },
    {
      id: 'g-ajay-bale',
      name: 'Ajay Bale',
      title: 'a month ago · 1 review',
      rating: 5,
      text: 'I am thankful to the entire Pluto team for helping my family get back home to India safely after being stuck in Dubai for the past few days. The entire team assisted us and kept us updated until they boarded their flights. I highly recommend them.',
      avatarInitial: 'A',
      avatarClassName: 'bg-gradient-to-br from-pink-500 to-rose-600',
    },
  ];

  const testimonials: ShuffleTestimonial[] = [
    {
      id: 't1',
      name: 'Jude "Tony" Morais',
      title: 'Business visa client',
      rating: 4,
      text: 'Recently I applied for a Finland business visa. The application process was well guided and supported by Ms. Anjali in the team, so my visa was processed quickly without any delays. Appreciate the good efforts and thank the team Pluto for their timely support',
    },
    {
      id: 't2',
      name: 'Oumayma',
      title: 'Urgent travel support',
      rating: 5,
      text: 'Amazing first class service from Pluto Travel team. They issued on an urgent basis a tourist visa early Saturday morning for 12 years old who was at the airport unable to enter the country. Thank you very much to Anjali, Philip and the entire team.',
    },
    {
      id: 't3',
      name: 'Savi V',
      title: 'Corporate partner',
      rating: 5,
      text: 'Excellent professionalism and turnaround time, my company has always experienced on the dot response from Sapna and now we have again experienced the same with Nitesh whom we coordinate with every urgent requirement. His dedication and outstanding promptness has come a long way for us. Thank you guys over and over again!',
    },
    {
      id: 't4',
      name: 'Emeline Ettia',
      title: 'Visa services',
      rating: 5,
      text: 'I am truly impressed Pluto Travels and the way they manage their clients they are always very responsive and all my visas I apply with them are always successful. I greatly recommend their service to anyone who wants a visa for any country of your choice. They are reliable people who can sort requirement in less than no time.',
    },
    {
      id: 't5',
      name: 'Atelier',
      title: 'Long-term client',
      rating: 5,
      text: "Pluto Travels has been handling my family's travel needs for some years now.I'm particularly familiar with Anjali Philips. Always been efficient and patient in their dealings from visa applications, interviews, hotel bookings, etc. The most recent was magically securing an early appointment at the US embassy. That was really impressive!",
    },
  ];

  return (
    <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tight px-2">
            READ WHAT OUR CLIENTS SAY ABOUT US
          </h2>
        </div>

        {/* Google Reviews Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <h3 className="text-2xl font-bold text-white">Google Reviews</h3>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="fill-yellow-400 text-yellow-400" size={20} />
                ))}
              </div>
              <span className="text-white/90 text-lg font-semibold">4.8/5</span>
              <span className="text-white/70 text-sm">(127 reviews)</span>
            </div>
          </div>

          <ThreeDScrollTriggerContainer className="w-full -mx-4 px-0 sm:-mx-6 md:mx-0 md:px-0">
            <TestimonialMarqueeRow items={googleReviews} variant="google" direction={1} baseVelocity={5} />
          </ThreeDScrollTriggerContainer>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=Pluto+Travels+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Read More Reviews on Google
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <h3 className="text-center text-xl font-semibold text-white/95 mb-8">Client stories</h3>
          <ThreeDScrollTriggerContainer className="w-full -mx-4 px-0 sm:-mx-6 md:mx-0 md:px-0">
            <TestimonialMarqueeRow items={testimonials} variant="client" direction={-1} baseVelocity={5} />
          </ThreeDScrollTriggerContainer>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default TestimonialsSection;
