import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import ShimmerBorderCard from '../components/ShimmerBorderCard';
import { FadeInSection } from '../components/FadeInSection';
// Image moved to public folder

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  experience: string;
  specialties: string[];
  email?: string;
  phone?: string;
  linkedin?: string;
}

const MeetTheTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Sapna Aidasani',
      position: 'Marketing Director',
      image: '/Sapna_New.jpeg',
      bio: 'Sapna leads our marketing initiatives with over 18 years of experience in travel industry branding and digital marketing. She has been instrumental in establishing Pluto Travels as Dubai\'s premier travel concierge through innovative marketing strategies and client engagement programs.',
      experience: '18+ Years',
      specialties: ['Digital Marketing', 'Brand Strategy', 'Client Engagement', 'Social Media'],
      email: 'sapna@plutotravels.ae',
      phone: '+971 50 123 4567'
    }
  ];

  return (
    <FadeInSection className="py-24 bg-luxury-canvas" id="meet-the-team">
      <Container>
        <SectionHeader
          title="Meet Our Leadership Team"
          subtitle="The visionaries behind Pluto Travels' success"
        />

        <div
          className={`grid grid-cols-1 ${teamMembers.length > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 mt-16`}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`w-full ${teamMembers.length === 1 ? 'max-w-2xl mx-auto' : ''}`}
            >
              <ShimmerBorderCard className="shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-contain object-center bg-gray-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-lg text-white/90 mb-2">{member.position}</p>
                    <div className="flex items-center gap-2">
                      <span className="bg-primary-gold text-primary-navy px-3 py-1 rounded-full text-sm font-semibold">
                        {member.experience}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-navy mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-luxury-pearl text-primary-navy px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-primary-gold hover:text-primary-gold/80 transition-colors"
                      >
                        <Mail size={18} />
                        <span className="text-sm">Email</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-primary-gold hover:text-primary-gold/80 transition-colors"
                      >
                        <Phone size={18} />
                        <span className="text-sm">Call</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-gold hover:text-primary-gold/80 transition-colors"
                      >
                        <Linkedin size={18} />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </ShimmerBorderCard>
            </motion.div>
          ))}
        </div>

      </Container>
    </FadeInSection>
  );
};

export default MeetTheTeam;
