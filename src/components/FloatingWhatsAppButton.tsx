import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Format the phone number for WhatsApp (remove spaces and add country code)
    const phoneNumber = '971509110065';
    const message = 'Hello! I would like to know more about your travel services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-[60]">
      <motion.button
        onClick={handleWhatsAppClick}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 1, // Show after 1 second
          duration: 0.5,
          type: "spring",
          stiffness: 200
        }}
      >
        <MessageCircle 
          size={24} 
          className="text-white group-hover:animate-pulse sm:w-7 sm:h-7" 
        />
      </motion.button>
      
      {/* Tooltip - Hidden on mobile for cleaner UI */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden sm:block absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg"
      >
        Chat with us on WhatsApp
        <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-r-4 border-r-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
      </motion.div>
    </div>
  );
};

export default FloatingWhatsAppButton;
