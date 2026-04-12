import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface BookingDiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl?: string;
  formId?: string;
}

const BookingDiscoveryModal: React.FC<BookingDiscoveryModalProps> = ({ 
  isOpen, 
  onClose, 
  formUrl = 'https://crm.plutotravels.ae/widget/form/XgPsoEP0kbbLRxQn8vzm',
  formId = 'XgPsoEP0kbbLRxQn8vzm'
}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://crm.plutotravels.ae/js/form_embed.js"]');
    
    if (!existingScript && !scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://crm.plutotravels.ae/js/form_embed.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
      setScriptLoaded(true);
    } else if (existingScript) {
      setScriptLoaded(true);
    }
  }, [isOpen, scriptLoaded]);

  const resetAndClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-2 sm:p-4"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-2xl bg-white rounded-lg sm:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={resetAndClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700 touch-manipulation"
              aria-label="Close modal"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="relative">
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-navy">Booking Discovery Call</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">Book your discovery call with us</p>
              </div>
              
              <div className="relative w-full overflow-hidden rounded-lg">
                <iframe
                  src={formUrl}
                  style={{
                    display: 'block',
                    width: '100%',
                    border: 'none',
                    overflow: 'hidden'
                  }}
                  className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[896px] min-h-[500px]"
                  id={`${formId}_${Date.now()}`}
                  scrolling="no"
                  title="Book Your Private Consultation"
                  allow="clipboard-read; clipboard-write"
                />
              </div>
              
              <button
                onClick={resetAndClose}
                className="mt-3 sm:mt-4 w-full px-4 py-2.5 sm:py-2 rounded-lg border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors text-sm sm:text-base font-medium touch-manipulation"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingDiscoveryModal;


