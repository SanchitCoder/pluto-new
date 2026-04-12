import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import ConsultationModal from '../components/ConsultationModal';
import { FadeInSection } from '../components/FadeInSection';

const MapCTA: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  
  const contactInfo = [
    { icon: Phone, title: 'Call Us', value: '+971 50 911 0065', link: 'tel:+971509110065' },
    { icon: Mail, title: 'Email', value: 'sales@plutotravels.ae', link: 'mailto:sales@plutotravels.ae' },
    { icon: MapPin, title: 'Visit Us', value: 'Dubai, United Arab Emirates', link: '#' },
    { icon: Clock, title: 'Hours', value: '24/7 Support Available', link: '#' },
  ];

  return (
    <FadeInSection className="py-16 bg-luxury-canvas">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-6">
              Why Online Travel Booking is More Popular Than Ever in 2026
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Plan your dream vacation anytime, anywhere! Our platform offers unbeatable flexibility, competitive prices, and 24/7 support to make your travel experience effortless and stress-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
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
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462565.7183640648!2d54.89782991796875!3d25.076022799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
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
