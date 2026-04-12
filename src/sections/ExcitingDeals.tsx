import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import ConsultationModal from '../components/ConsultationModal';
import { FadeInSection } from '../components/FadeInSection';
import { DealTiltOverlayCard } from '../components/DealTiltOverlayCard';

const ExcitingDeals: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  
  const deals = [
    {
      image: '/global-business-travel-package.png',
      title: 'Global Business Travel Package',
      originalPrice: 14673,
      salePrice: 699,
      discount: 38,
      label: 'Flash Sale',
      description:
        'Flights, hotels, and policy-aligned booking support—built for teams that need predictable spend and fast changes.',
    },
    {
      image: '/corporate-travel-management-card.png',
      title: 'Corporate Travel Management',
      originalPrice: 9168,
      salePrice: 499,
      discount: 28,
      label: 'Limited Offer',
      description:
        'Dedicated program oversight, traveller care, and reporting so every trip stays compliant and visible.',
    },
    {
      image: '/business-analytics-suite-card.png',
      title: 'Business Analytics Suite',
      originalPrice: 6963,
      salePrice: 399,
      discount: 32,
      label: 'Hot Deal',
      description:
        'Dashboards and benchmarks that turn booking data into savings opportunities and smarter policy decisions.',
    },
    {
      image: '/executive-travel-solutions-card.png',
      title: 'Executive Travel Solutions',
      originalPrice: 10633,
      salePrice: 599,
      discount: 31,
      label: 'Best Seller',
      description:
        'Premium itineraries, priority handling, and white-glove coordination for leadership and VIP travellers.',
    },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-canvas">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-luxury-darkBlue md:text-4xl mb-4">
            CORPORATE TRAVEL SOLUTIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exclusive business travel packages with significant cost savings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 py-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col gap-3"
            >
              <DealTiltOverlayCard
                title={deal.title}
                description={deal.description}
                imageSrc={deal.image}
                imageAlt={deal.title}
                originalPrice={deal.originalPrice}
                salePrice={deal.salePrice}
                discount={deal.discount}
                label={deal.label}
              />
              <Button variant="gold" size="sm" fullWidth onClick={() => setConsultOpen(true)}>
                Get Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </FadeInSection>
  );
};

export default ExcitingDeals;
