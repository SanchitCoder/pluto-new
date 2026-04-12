import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileBottomCTA: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-luxury-canvas border-t-2 border-primary-coral shadow-2xl z-50">
      <div className="grid grid-cols-2">
        <a
          href="tel:+971509110065"
          className="bg-gradient-to-r from-primary-teal to-primary-navy text-white py-4 flex items-center justify-center gap-2 font-semibold active:opacity-90 transition-opacity"
        >
          <Phone size={20} />
          Call Now
        </a>
        <a
          href="https://wa.me/971509110065"
          className="bg-gradient-to-r from-primary-coral via-primary-orange to-accent-gold text-white py-4 flex items-center justify-center gap-2 font-semibold active:opacity-90 transition-opacity"
        >
          <MessageCircle size={20} />
          Chat
        </a>
      </div>
    </div>
  );
};

export default MobileBottomCTA;
