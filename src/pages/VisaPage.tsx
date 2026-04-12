import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import BookingDiscoveryModal from '../components/BookingDiscoveryModal';
import VisaDetailModal from '../components/VisaDetailModal';
import { FadeInSection } from '../components/FadeInSection';
import { VisaSeasonHoverCard } from '../components/VisaSeasonHoverCard';

interface VisaOption {
  id: string;
  country: string;
  image: string;
}

// Countries that have "View Details" button
const countriesWithDetails: Record<string, 'canada' | 'usa' | 'uk' | 'schengen'> = {
  'canada': 'canada',
  'usa': 'usa',
  'uk': 'uk',
  'france': 'schengen',
  'germany': 'schengen',
  'italy': 'schengen',
  'spain': 'schengen',
  'switzerland': 'schengen',
  'netherlands': 'schengen',
  'greece': 'schengen',
};

// Visa data for different regions
const visaData: Record<string, VisaOption[]> = {
  africa: [
    { id: 'morocco', country: 'Morocco', image: '/visa-images/africa/morocco.png' },
    { id: 'zimbabwe', country: 'Zimbabwe', image: '/visa-images/africa/zimbabwe.png' },
    { id: 'zambia', country: 'Zambia', image: '/visa-images/africa/zambia.png' },
    { id: 'uganda', country: 'Uganda', image: '/visa-images/africa/uganda.png' },
    { id: 'tunisia', country: 'Tunisia', image: '/visa-images/africa/tunisia.png' },
    { id: 'togo', country: 'Togo', image: '/visa-images/africa/togo.png' },
    { id: 'tanzania', country: 'Tanzania', image: '/visa-images/africa/tanzania.png' },
    { id: 'sudan', country: 'Sudan', image: '/visa-images/africa/sudan.png' },
    { id: 'south-africa', country: 'South Africa', image: '/visa-images/africa/south-africa.png' },
    { id: 'sierra-leone', country: 'Sierra Leone', image: '/visa-images/africa/sierra-leone.png' },
    { id: 'senegal', country: 'Senegal', image: '/visa-images/africa/senegal.png' },
    { id: 'nigeria', country: 'Nigeria', image: '/visa-images/africa/nigeria.png' },
  ],
  'middle-east': [
    { id: 'uae', country: 'United Arab Emirates', image: '/visa-images/middle-east/uae.png' },
    { id: 'saudi-arabia', country: 'Saudi Arabia', image: '/visa-images/middle-east/saudi-arabia.png' },
    { id: 'qatar', country: 'Qatar', image: '/visa-images/middle-east/qatar.png' },
    { id: 'kuwait', country: 'Kuwait', image: '/visa-images/middle-east/kuwait.png' },
    { id: 'bahrain', country: 'Bahrain', image: '/visa-images/middle-east/bahrain.png' },
    { id: 'oman', country: 'Oman', image: '/visa-images/middle-east/oman.png' },
    { id: 'jordan', country: 'Jordan', image: '/visa-images/middle-east/jordan.png' },
    { id: 'lebanon', country: 'Lebanon', image: '/visa-images/middle-east/lebanon.png' },
  ],
  europe: [
    { id: 'uk', country: 'United Kingdom', image: '/visa-images/europe/uk.png' },
    { id: 'france', country: 'France', image: '/visa-images/europe/france.png' },
    { id: 'germany', country: 'Germany', image: '/visa-images/europe/germany.png' },
    { id: 'italy', country: 'Italy', image: '/visa-images/europe/italy.png' },
    { id: 'spain', country: 'Spain', image: '/visa-images/europe/spain.png' },
    { id: 'switzerland', country: 'Switzerland', image: '/visa-images/europe/switzerland.png' },
    { id: 'netherlands', country: 'Netherlands', image: '/visa-images/europe/netherlands.png' },
    { id: 'greece', country: 'Greece', image: '/visa-images/europe/greece.png' },
  ],
  asia: [
    { id: 'china', country: 'China', image: '/visa-images/asia/china.png' },
    { id: 'japan', country: 'Japan', image: '/visa-images/asia/india.png' },
    { id: 'india', country: 'India', image: '/visa-images/asia/japan.png' },
    { id: 'south-korea', country: 'South Korea', image: '/visa-images/asia/south-korea.png' },
    { id: 'singapore', country: 'Singapore', image: '/visa-images/asia/singapore.png' },
    { id: 'thailand', country: 'Thailand', image: '/visa-images/asia/thailand.png' },
    { id: 'malaysia', country: 'Malaysia', image: '/visa-images/asia/malaysia.png' },
    { id: 'indonesia', country: 'Indonesia', image: '/visa-images/asia/indonesia.png' },
  ],
  canada: [
    { id: 'canada', country: 'Canada', image: '/visa-images/canada.png' },
  ],
  usa: [
    { id: 'usa', country: 'United States', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80' },
  ],
  cis: [
    { id: 'russia', country: 'Russia', image: '/visa-images/cis/russia.png' },
    { id: 'kazakhstan', country: 'Kazakhstan', image: '/visa-images/cis/kazakhstan.png' },
    { id: 'ukraine', country: 'Ukraine', image: '/visa-images/cis/ukraine.png' },
    { id: 'belarus', country: 'Belarus', image: '/visa-images/cis/belarus.png' },
  ],
};

const regionNames: Record<string, string> = {
  africa: 'Africa',
  'middle-east': 'Middle East',
  europe: 'Europe',
  asia: 'Asia',
  canada: 'Canada',
  usa: 'USA',
  cis: 'CIS',
};

const VISA_CARD_SUBTITLE = 'Visa processing from Dubai, UAE';

function visaCardDescription(country: string): string {
  return `End-to-end support for your ${country} visa—requirements, documentation review, appointment guidance, and timely updates from our Dubai team.`;
}

function chunkVisas<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

const VisaPage: React.FC = () => {
  const { region } = useParams<{ region: string }>();
  const regionKey = region || 'africa';
  const regionName = regionNames[regionKey] || 'Africa';
  const visas = visaData[regionKey] || visaData.africa;
  const [bookingDiscoveryOpen, setBookingDiscoveryOpen] = useState(false);
  const [visaDetailOpen, setVisaDetailOpen] = useState(false);
  const [selectedVisaType, setSelectedVisaType] = useState<'canada' | 'usa' | 'uk' | 'schengen' | null>(null);

  const handleViewDetails = (visaId: string) => {
    const visaType = countriesWithDetails[visaId];
    if (visaType) {
      setSelectedVisaType(visaType);
      setVisaDetailOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative bg-gradient-to-b from-luxury-darkBlue via-primary-navy to-luxury-darkBlue text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/90 to-luxury-darkBlue/95"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {regionName} Visa Services from Dubai, UAE
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-body">
              Professional visa processing services for seamless travel experiences
            </p>
          </motion.div>
        </Container>
      </FadeInSection>

      {/* Visa options — seasonal hover rows (md+: 3-up with width expansion on hover) */}
      <FadeInSection className="py-16">
        <Container>
          <div className="flex flex-col gap-6">
            {chunkVisas(visas, 3).map((row, rowIndex) => (
              <motion.div
                key={`visa-row-${rowIndex}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: rowIndex * 0.06 }}
                className="flex w-full flex-col gap-4 md:flex-row md:flex-nowrap"
              >
                {row.map((visa) => (
                  <VisaSeasonHoverCard
                    key={visa.id}
                    title={`${visa.country} Visa`}
                    subtitle={VISA_CARD_SUBTITLE}
                    description={visaCardDescription(visa.country)}
                    imageSrc={visa.image}
                    imageAlt={visa.country}
                  >
                    {countriesWithDetails[visa.id] ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleViewDetails(visa.id)}
                          className="w-full rounded-lg bg-primary-navy py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-navy/90"
                        >
                          View Details
                        </button>
                        <Button
                          variant="gold"
                          size="sm"
                          fullWidth
                          onClick={() => setBookingDiscoveryOpen(true)}
                        >
                          Book Consultation
                        </Button>
                      </>
                    ) : null}
                  </VisaSeasonHoverCard>
                ))}
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-primary-coral via-primary-orange to-accent-gold text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help with Your Visa Application?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert team is here to assist you with all your visa requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setBookingDiscoveryOpen(true)}>
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-navy" onClick={() => setBookingDiscoveryOpen(true)}>
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      <Footer />
      <LunaAIChatButton />
      <MobileBottomCTA />
      <BookingDiscoveryModal isOpen={bookingDiscoveryOpen} onClose={() => setBookingDiscoveryOpen(false)} />
      <VisaDetailModal 
        isOpen={visaDetailOpen} 
        onClose={() => {
          setVisaDetailOpen(false);
          setSelectedVisaType(null);
        }} 
        visaType={selectedVisaType}
      />
    </div>
  );
};

export default VisaPage;

