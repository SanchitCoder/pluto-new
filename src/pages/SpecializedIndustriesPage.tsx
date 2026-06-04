import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, 
  Anchor, 
  HardHat, 
  Laptop, 
  CheckCircle, 
  Shield,
  Globe,
  Users,
  Award,
  TrendingUp,
  Clock,
  FileText
} from 'lucide-react';
import { FadeInSection } from '../components/FadeInSection';
import Container from '../components/Container';
import Button from '../components/Button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LunaAIChatButton from '../components/LunaAIChatButton';
import MobileBottomCTA from '../components/MobileBottomCTA';
import ConsultationModal from '../components/ConsultationModal';
import { Link } from 'react-router-dom';

interface Industry {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  specialties: string[];
  challenges: string[];
  solutions: string[];
  stats: {
    clients: string;
    savings: string;
    satisfaction: string;
  };
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
}

const SpecializedIndustriesPage: React.FC = () => {
  const [consultOpen, setConsultOpen] = useState(false);
  const industries: Industry[] = [
    {
      id: '1',
      name: 'Energy & Oil',
      description: 'Specialized travel solutions for energy sector professionals working in challenging environments.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
      specialties: ['Offshore Travel', 'Remote Locations', 'Safety Protocols', 'Emergency Response'],
      challenges: ['Remote Locations', 'Safety Requirements', 'Weather Dependencies', 'Regulatory Compliance'],
      solutions: ['Dedicated Safety Protocols', 'Emergency Response Plans', 'Weather Monitoring', 'Compliance Management'],
      stats: {
        clients: '50+',
        savings: '30%',
        satisfaction: '99%'
      }
    },
    {
      id: '2',
      name: 'Marine & Shipping',
      description: 'Expert maritime travel and logistics management for shipping and marine operations.',
      icon: Anchor,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      specialties: ['Port Logistics', 'Crew Management', 'Cargo Coordination', 'International Regulations'],
      challenges: ['Port Schedules', 'Crew Rotation', 'International Regulations', 'Cargo Coordination'],
      solutions: ['Port Coordination', 'Crew Management Systems', 'Regulatory Compliance', 'Logistics Optimization'],
      stats: {
        clients: '75+',
        savings: '25%',
        satisfaction: '98%'
      }
    },
    {
      id: '3',
      name: 'Construction',
      description: 'Tailored solutions for construction and engineering projects with complex logistics.',
      icon: HardHat,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
      specialties: ['Project Sites', 'Equipment Transport', 'Team Coordination', 'Safety Compliance'],
      challenges: ['Project Timelines', 'Equipment Logistics', 'Team Coordination', 'Safety Requirements'],
      solutions: ['Project-Based Planning', 'Equipment Coordination', 'Team Management', 'Safety Protocols'],
      stats: {
        clients: '100+',
        savings: '20%',
        satisfaction: '97%'
      }
    },
    {
      id: '4',
      name: 'Technology',
      description: 'Modern travel solutions for tech companies and startups with flexible requirements.',
      icon: Laptop,
      image: '/technology-image.jpg',
      specialties: ['Conference Travel', 'Client Meetings', 'Team Retreats', 'Innovation Hubs'],
      challenges: ['Flexible Schedules', 'Last-Minute Changes', 'Remote Work Integration', 'Cost Optimization'],
      solutions: ['Flexible Booking', 'Real-Time Changes', 'Remote Integration', 'Cost Management'],
      stats: {
        clients: '200+',
        savings: '15%',
        satisfaction: '96%'
      }
    }
  ];

  const services: Service[] = [
    {
      id: '1',
      title: 'Industry-Specific Expertise',
      description: 'Deep understanding of sector requirements and challenges.',
      icon: Award,
      features: ['Sector Knowledge', 'Regulatory Compliance', 'Best Practices', 'Industry Networks']
    },
    {
      id: '2',
      title: 'Customized Solutions',
      description: 'Tailored travel programs designed for your industry needs.',
      icon: FileText,
      features: ['Custom Policies', 'Specialized Services', 'Flexible Options', 'Scalable Solutions']
    },
    {
      id: '3',
      title: 'Risk Management',
      description: 'Comprehensive safety and security protocols for high-risk environments.',
      icon: Shield,
      features: ['Safety Protocols', 'Emergency Response', 'Risk Assessment', 'Insurance Coverage']
    },
    {
      id: '4',
      title: 'Global Network',
      description: 'Worldwide network of partners and suppliers in your industry.',
      icon: Globe,
      features: ['Global Coverage', 'Local Expertise', 'Preferred Partners', 'Quality Assurance']
    }
  ];

  const stats = [
    { icon: Users, value: '425+', label: 'Industry Clients' },
    { icon: Globe, value: '60+', label: 'Countries' },
    { icon: TrendingUp, value: '22%', label: 'Average Savings' },
    { icon: Award, value: '97%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen bg-luxury-canvas">
      <Navigation />
      
      {/* Hero Section */}
      <FadeInSection className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-darkBlue/80 via-primary-navy/60 to-transparent" />
        
        <div className="relative h-full flex items-center">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Specialized
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-primary-coral">
                  Industries
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Industry-specific travel solutions designed for the unique challenges and requirements 
                of specialized sectors. We understand your business and deliver tailored results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="lg" onClick={() => setConsultOpen(true)}>
                  Industry Solutions
                </Button>
              </div>
            </motion.div>
          </Container>
        </div>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection className="py-16 bg-luxury-pearl">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <stat.icon className="text-primary-teal mx-auto mb-4" size={48} />
                  <div className="text-3xl font-bold text-luxury-darkBlue mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Industries Section */}
      <FadeInSection className="py-16 bg-luxury-canvas">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-darkBlue mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized travel solutions for industries with unique requirements and challenges
            </p>
          </motion.div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <industry.icon className="mb-2" size={48} />
                      <h3 className="text-3xl font-bold">{industry.name}</h3>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-bold text-luxury-darkBlue mb-4">
                    {industry.name} Solutions
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-teal">{industry.stats.clients}</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-coral">{industry.stats.savings}</div>
                      <div className="text-sm text-gray-600">Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-green">{industry.stats.satisfaction}</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.specialties.map((specialty, idx) => (
                          <span key={idx} className="bg-primary-teal/10 text-primary-teal px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Solutions:</h4>
                      <div className="space-y-1">
                        {industry.solutions.map((solution, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="text-primary-green" size={16} />
                            <span className="text-sm text-gray-600">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Services Section */}
      <FadeInSection className="py-16 bg-gradient-to-br from-luxury-darkBlue to-primary-navy text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              How we deliver specialized solutions for industry-specific challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full"
              >
                <service.icon className="text-accent-gold mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-accent-gold flex-shrink-0" size={16} />
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      <FadeInSection className="py-12 bg-luxury-canvas">
        <Container>
          <h2 className="mb-6 text-2xl font-bold text-luxury-darkBlue">Sector Landing Pages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/corporate-travel-energy', label: 'Energy & Oil/Gas Travel' },
              { href: '/marine-crew-travel-dubai', label: 'Marine Crew Travel Dubai' },
              { href: '/mining-sector-travel', label: 'Mining Sector Travel' },
              { href: '/sports-team-travel', label: 'Sports Team Travel UAE' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-full border border-primary-teal/30 bg-white px-4 py-2 text-sm font-medium text-primary-teal hover:bg-primary-teal hover:text-white"
              >
                {link.label}
              </Link>
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
              Ready for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our industry experts create a customized travel program that addresses your sector's unique challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-gray-100" onClick={() => setConsultOpen(true)}>
                Industry Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </FadeInSection>

      <Footer />
      <LunaAIChatButton />
      <MobileBottomCTA />
      <ConsultationModal isOpen={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
};

export default SpecializedIndustriesPage;
