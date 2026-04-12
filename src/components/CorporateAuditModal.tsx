import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface CorporateAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CorporateAuditModal: React.FC<CorporateAuditModalProps> = ({ isOpen, onClose }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the GoHighLevel form embed script only once
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-[92%] max-w-4xl bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="relative">
              <div className="text-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-navy">Corporate Travel RFP Form</h3>
                <p className="text-gray-600 text-sm">Request your corporate travel audit</p>
              </div>
              
              <div className="relative w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://crm.plutotravels.ae/widget/form/JbK9svv1CGCrZSZj9h2h"
                  style={{ 
                    display: 'block',
                    width: '100%',
                    height: '1347px',
                    border: 'none',
                    borderRadius: '3px'
                  }}
                  id="inline-JbK9svv1CGCrZSZj9h2h"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Corporate Travel RFP Form"
                  data-height="1347"
                  data-layout-iframe-id="inline-JbK9svv1CGCrZSZj9h2h"
                  data-form-id="JbK9svv1CGCrZSZj9h2h"
                  title="Corporate Travel RFP Form"
                  allow="clipboard-read; clipboard-write"
                />
              </div>
              
              <button
                onClick={resetAndClose}
                className="mt-4 w-full px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm sm:text-base"
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

export default CorporateAuditModal;











