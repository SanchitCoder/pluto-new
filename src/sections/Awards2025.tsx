import React from 'react';
import { motion } from 'framer-motion';
import { AngledSlider, type AngledSliderItem } from '../components/AngledSlider';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

interface Award extends AngledSliderItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80';

const Awards2025: React.FC = () => {
  const awards: Award[] = [
    {
      id: '1',
      image: '/awards/Left.JPG',
      title: 'Award Recognition',
      description: 'Recognized for excellence in corporate travel management',
    },
    {
      id: '2',
      image: '/awards/Centre.JPG',
      title: 'Award Recognition',
      description: 'Outstanding service delivery and client satisfaction',
    },
    {
      id: '3',
      image: '/awards/Right.JPG',
      title: 'Award Recognition',
      description: 'Industry leadership and innovation in travel solutions',
    },
    {
      id: '4',
      image: '/awards/Award1.jpeg',
      title: 'Award Recognition',
      description: 'Excellence in travel services and customer satisfaction',
    },
    {
      id: '5',
      image: '/awards/Award2.jpeg',
      title: 'Award Recognition',
      description: 'Outstanding achievements in the travel industry',
    },
  ];

  const martechAward: Award = {
    id: '6',
    image: '/awards/MartechAwards.jpeg',
    title: 'Future-Ready Brand of the Year',
    description: 'Awarded at MarTech Leadership Summit & Awards 2026',
  };

  const sliderItems: Award[] = [...awards, martechAward];

  const awardCardClass =
    'group flex h-full min-h-0 flex-col bg-white rounded-xl shadow-lg shadow-gray-900/10 ring-1 ring-gray-200/80';
  const awardImageWrapClass =
    'relative h-36 sm:h-40 w-full shrink-0 bg-gray-50 overflow-hidden flex items-center justify-center border-b border-gray-100 rounded-t-xl';
  const awardBodyClass = 'flex flex-col p-4 sm:p-5';
  const awardTitleClass = 'text-base sm:text-lg font-bold text-primary-navy mb-1.5 line-clamp-2';
  const awardDescClass = 'text-gray-600 text-sm leading-relaxed line-clamp-4';

  return (
    <FadeInSection className="py-16 bg-luxury-canvas">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-navy mb-4">
            Awards '25
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized for excellence in corporate travel management and outstanding service delivery
          </p>
        </motion.div>
      </Container>

      {/* Full-bleed Lightswind-style angled marquee (infinite scroll + 3D hover on each card) */}
      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
        <AngledSlider<Award>
          items={sliderItems}
          speed={48}
          direction="left"
          containerHeight="420px"
          cardWidth="280px"
          gap="36px"
          angle={18}
          alternateAngle
          hoverScale={1.05}
          className="bg-luxury-canvas"
          renderCard={(award) => (
            <div className={awardCardClass}>
              <div className={`${awardImageWrapClass}`}>
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-h-full max-w-full w-auto h-auto object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMG;
                  }}
                />
              </div>
              <div className={awardBodyClass}>
                <h3 className={awardTitleClass}>{award.title}</h3>
                <p className={awardDescClass}>{award.description}</p>
              </div>
            </div>
          )}
        />
      </div>
    </FadeInSection>
  );
};

export default Awards2025;
