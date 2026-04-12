import React from 'react';
import Hero from '../components/Hero';
import Expertise from '../sections/Expertise';
import Founder from '../sections/Founder';
import WhyChoose from '../sections/WhyChoose';
import SocialProof from '../sections/SocialProof';
import Awards from '../sections/Awards';
import LiveActivity from '../sections/LiveActivity';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Expertise />
      <Founder />
      <WhyChoose />
      <SocialProof />
      <Awards />
      <LiveActivity />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
