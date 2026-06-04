import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import ConsultationModal from '../components/ConsultationModal';
import { FadeInSection } from '../components/FadeInSection';

import { SITE } from '../lib/siteConfig';

const PLUTO_DUBAI_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5!2d55.2611572!3d25.1874761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4314df2d91b9%3A0xc4d4a502001393c9!2sPluto%20Travels%20LLC%20Dubai!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2s';

const MapCTA: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);

  const contactInfo = [
    { icon: Phone, title: 'Office', value: SITE.phoneOfficeDisplay, link: `tel:${SITE.phoneOffice}` },
    { icon: Phone, title: 'Mobile / WhatsApp', value: SITE.phoneMobileDisplay, link: `tel:${SITE.phoneMobile}` },
    { icon: Mail, title: 'Email', value: SITE.email, link: `mailto:${SITE.email}` },
    {
      icon: MapPin,
      title: 'Business Bay Office',
      value: SITE.address.streetAddress,
      link: SITE.googleMapsUrl,
    },
    { icon: Clock, title: 'Hours', value: '24/7 Support Available', link: '/travel-agency-business-bay-dubai' },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-canvas">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-6">
              Visit Our Travel Agency in Business Bay, Dubai
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              IATA-accredited since 2007 — corporate travel, MICE, luxury concierge & visa services from {SITE.address.streetAddress}. {SITE.aggregateRating.reviewCount} Google reviews at {SITE.aggregateRating.ratingValue}★.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-luxury-pearl rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="bg-gradient-to-br from-primary-teal to-primary-navy p-3 rounded-lg">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-luxury-darkBlue mb-1">
                      {info.title}
                    </div>
                    <div className="text-sm text-gray-600">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" icon={Phone} onClick={() => setConsultOpen(true)}>
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg" icon={Mail} onClick={() => setConsultOpen(true)}>
                Send Inquiry
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex min-h-0 w-full lg:h-full"
          >
            <div className="relative w-full flex-1 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[22rem]">
              <iframe
                title="Pluto Travels LLC Dubai — map"
                src={PLUTO_DUBAI_MAP_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0 grayscale transition-all duration-500 hover:grayscale-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Container>
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </FadeInSection>
  );
};

export default MapCTA;
