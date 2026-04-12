import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Download, Phone, Mail, MessageCircle, Clock, Lock, Check } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

const FinalCTA: React.FC = () => {
  const ctaOptions = [
    {
      icon: Calendar,
      title: 'Book a Meeting',
      subtitle: 'Schedule your corporate travel consultation',
      variant: 'primary' as const,
    },
    {
      icon: FileText,
      title: 'Get Corporate Travel Proposal',
      subtitle: 'Custom solution for your business needs',
      variant: 'secondary' as const,
    },
    {
      icon: Download,
      title: 'Download Corporate Travel Guide',
      subtitle: 'Best practices + industry insights',
      variant: 'outline' as const,
    },
  ];

  const contactMethods = [
    { icon: Phone, text: '+971 50 911 0065', href: 'tel:+971509110065' },
    { icon: Mail, text: 'sales@plutotravels.ae', href: 'mailto:sales@plutotravels.ae' },
    { icon: MessageCircle, text: 'WhatsApp (Instant Response)', href: 'https://wa.me/971509110065' },
  ];

  const guarantees = [
    { icon: Clock, text: 'Available 24/7/365' },
    { icon: Lock, text: 'Your information is completely private' },
    { icon: Check, text: 'No obligation, no pressure' },
  ];

  return (
    <FadeInSection className="py-24 bg-gradient-to-br from-primary-navy to-neutrals-charcoal text-white" id="consultation">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
            Ready for Smoother Global Business Travel?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            A global travel management company with specialist Middle East teams.
            Innovative corporate travel technology to streamline expense management.
            Let's talk today.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white text-primary-navy p-6 rounded-xl"
              >
                <option.icon className="text-primary-gold mx-auto mb-4" size={40} />
                <Button variant={option.variant} size="md" fullWidth className="mb-3">
                  {option.title}
                </Button>
                <p className="text-sm text-gray-600">{option.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-white/70">Or speak with us directly:</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <method.icon size={20} />
                  <span className="text-sm">{method.text}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-2">
                  <guarantee.icon size={18} className="text-primary-gold" />
                  <span>{guarantee.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="italic text-lg text-white/80">
                "They transformed our corporate travel program—28% cost savings and 98% traveler satisfaction."
              </p>
              <p className="text-sm text-white/60 mt-2">— Fortune 500 Travel Manager</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </FadeInSection>
  );
};

export default FinalCTA;
