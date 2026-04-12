import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Car, Briefcase, Ship, Calendar, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import ColorChangeCard from '../components/ColorChangeCard';
import { FadeInSection } from '../components/FadeInSection';

type ServiceItem = {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  color: string;
  link: string;
  backgroundImage?: string;
  cardDescription?: string;
};

const ServicesGrid: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: Plane,
      title: 'Flight Management',
      color: 'from-primary-coral to-primary-orange',
      link: '/business-travel',
      backgroundImage: '/flight-management-corporate-sunset.png',
      cardDescription:
        'Corporate fares, policy-aligned booking, and round-the-clock support for every itinerary.',
    },
    {
      icon: Hotel,
      title: 'Hotel Solutions',
      color: 'from-accent-gold to-primary-orange',
      link: '/services',
      backgroundImage: '/hotel-solutions-luxury.png',
      cardDescription:
        'Premium stays, negotiated rates, and consolidated billing wherever your teams travel.',
    },
    {
      icon: Car,
      title: 'Ground Transportation',
      color: 'from-primary-green to-accent-emerald',
      link: '/services',
      backgroundImage: '/ground-transportation-sprinter.png',
      cardDescription:
        'Airport transfers, chauffeured cars, and ground moves aligned with your travel policy.',
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      color: 'from-primary-teal to-primary-navy',
      link: '/corporate-travel',
      backgroundImage: '/corporate-travel-terminal.png',
      cardDescription:
        'End-to-end program design, duty of care, and management that scales with your business.',
    },
    {
      icon: Ship,
      title: 'MICE & Events',
      color: 'from-blue-500 to-blue-700',
      link: '/mice',
      backgroundImage: '/mice-events-conference.png',
      cardDescription:
        'Conferences, incentives, and events delivered from planning through on-site execution.',
    },
    {
      icon: Calendar,
      title: 'Travel Policy Management',
      color: 'from-purple-500 to-purple-700',
      link: '/corporate-travel',
      backgroundImage: '/travel-policy-management-card.png',
      cardDescription:
        'Clear rules, approvals, and visibility so spend and compliance stay on track.',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      color: 'from-primary-orange to-accent-coral',
      link: '/corporate',
      backgroundImage: '/global-coverage-hand-globe.png',
      cardDescription:
        'Worldwide sourcing, local expertise, and support across regions and time zones.',
    },
    {
      icon: FileText,
      title: 'Travel Analytics',
      color: 'from-red-500 to-pink-600',
      link: '/corporate-travel',
      backgroundImage: '/travel-analytics-dashboard-card.png',
      cardDescription:
        'Spend visibility, benchmarks, and dashboards that turn trip data into decisions.',
    },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-canvas">
      <Container>
        <div className="mb-8 w-full px-4 text-left sm:mb-10 md:mb-12">
          <h2 className="text-3xl font-heading font-bold text-luxury-darkBlue md:text-4xl mb-2 sm:mb-3 md:mb-4">
            CORPORATE TRAVEL SOLUTIONS
          </h2>
          <p className="font-outfit max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Streamlined business travel management for modern enterprises
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={
                  service.backgroundImage
                    ? 'block h-full'
                    : `relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-white text-center bg-gradient-to-br ${service.color}`
                }
              >
                {service.backgroundImage ? (
                  <ColorChangeCard
                    title={service.title}
                    description={service.cardDescription ?? ''}
                    imageUrl={service.backgroundImage}
                  />
                ) : (
                  <>
                    <service.icon
                      className="relative z-10 mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform drop-shadow-md"
                      size={32}
                    />
                    <h3 className="relative z-10 text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-tight">
                      {service.title}
                    </h3>
                  </>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </FadeInSection>
  );
};

export default ServicesGrid;
