import React from 'react';
import { Award, Star } from 'lucide-react';
import Container from '../components/Container';
import { FadeInSection } from '../components/FadeInSection';

const Awards: React.FC = () => {
  const awards = [
    { icon: Award, title: 'Best Corporate Travel Agency 2024' },
    { icon: Star, title: 'Corporate Travel Excellence 2024' },
    { icon: Award, title: 'IATA Accredited' },
    { icon: Star, title: 'ISO 9001 Certified' },
    { icon: Award, title: 'ACTE Member' },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-canvas">
      <Container>
        <h3 className="text-2xl md:text-3xl font-heading text-center text-primary-navy mb-12">
          Award-Winning Excellence
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow text-center"
            >
              <award.icon className="text-primary-gold mx-auto mb-3" size={32} />
              <p className="text-sm font-semibold text-primary-navy">{award.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </FadeInSection>
  );
};

export default Awards;
