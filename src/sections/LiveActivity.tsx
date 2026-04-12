import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import { FadeInSection } from '../components/FadeInSection';

const LiveActivity: React.FC = () => {
  const activities = [
    { text: 'Corporate travel policy implemented for Tech Corp', time: '3 minutes ago' },
    { text: '28% cost savings achieved for Energy Sector client', time: '18 minutes ago' },
    { text: '12 corporate consultations scheduled this week', time: '' },
  ];

  return (
    <FadeInSection className="py-8 bg-primary-navy text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                LIVE ACTIVITY
              </span>
            </div>
            <div className="space-y-2">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <span>•</span>
                  <span>{activity.text}</span>
                  {activity.time && (
                    <span className="text-white/60 text-xs">({activity.time})</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <Button variant="gold" size="lg">
            Join 500+ Global Companies →
          </Button>
        </div>
      </Container>
    </FadeInSection>
  );
};

export default LiveActivity;
