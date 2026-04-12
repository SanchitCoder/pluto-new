import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/971509110065"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 lg:bottom-8 lg:right-8 z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <div className="flex items-center gap-3 bg-gradient-to-r from-primary-green to-accent-emerald text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all">
          <MessageCircle size={24} />
          <span className="font-semibold hidden lg:inline">Chat with Specialist</span>
        </div>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-green" />
        </span>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
