import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit?: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, onFormSubmit }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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

  // Listen for form submission events from iframe
  useEffect(() => {
    if (!onFormSubmit) return;

    let formSubmitted = false; // Prevent multiple triggers

    const handleFormSubmit = () => {
      if (!formSubmitted && onFormSubmit) {
        formSubmitted = true;
        // Track Meta Pixel Lead event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        // Also call the callback
        onFormSubmit();
      }
    };

    const handleMessage = (event: MessageEvent) => {
      // Check if message is from the form iframe domain
      if (!event.origin.includes('plutotravels.ae') && !event.origin.includes('gohighlevel')) return;
      
      // Listen for various form submission event formats
      const data = event.data;
      if (data) {
        // Check for different possible event formats
        const isFormSubmit = 
          data.type === 'formSubmit' || 
          data.event === 'formSubmitted' || 
          data === 'formSubmitted' ||
          data.action === 'formSubmit' ||
          (typeof data === 'string' && data.toLowerCase().includes('submit')) ||
          (typeof data === 'object' && (data.formId || data.formSubmitted || data.success));
        
        if (isFormSubmit) {
          handleFormSubmit();
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Listen for form submission in the iframe (if accessible)
    const iframe = iframeRef.current;
    if (iframe) {
      const checkFormSubmission = () => {
        try {
          const iframeWindow = iframe.contentWindow;
          if (iframeWindow) {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              const form = iframeDoc.querySelector('form');
              if (form) {
                form.addEventListener('submit', handleFormSubmit);
              }
              
              // Also check for success messages or redirects
              const successElements = iframeDoc.querySelectorAll('[class*="success"], [id*="success"], [class*="thank"], [id*="thank"]');
              if (successElements.length > 0) {
                // Form might have been submitted successfully
                const observer = new MutationObserver(() => {
                  if (iframeDoc.querySelector('[class*="success"], [id*="success"], [class*="thank"], [id*="thank"]')) {
                    handleFormSubmit();
                    observer.disconnect();
                  }
                });
                observer.observe(iframeDoc.body, { childList: true, subtree: true });
              }

              // Listen for URL changes in iframe (form redirect after submission)
              let lastUrl = iframeDoc.location?.href || '';
              const urlObserver = setInterval(() => {
                try {
                  const currentUrl = iframeDoc.location?.href || '';
                  if (currentUrl !== lastUrl && (currentUrl.includes('success') || currentUrl.includes('thank'))) {
                    handleFormSubmit();
                    clearInterval(urlObserver);
                  }
                  lastUrl = currentUrl;
                } catch (e) {
                  // Cross-origin restrictions
                }
              }, 500);
            }
          }
        } catch (e) {
          // Cross-origin restrictions - use postMessage approach only
        }
      };
      
      iframe.addEventListener('load', checkFormSubmission);
      // Also check immediately if iframe is already loaded
      if (iframe.contentDocument?.readyState === 'complete') {
        checkFormSubmission();
      }
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onFormSubmit]);

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
                <h3 className="text-xl sm:text-2xl font-bold text-primary-navy">Luxury Travel Inquiry</h3>
                <p className="text-gray-600 text-sm">Let us help you plan your perfect journey</p>
                </div>

              <div className="relative w-full overflow-hidden rounded-lg">
                <iframe
                  ref={iframeRef}
                  src="https://crm.plutotravels.ae/widget/form/IG8UA8lR0S0fhs8QXVG9"
                  style={{ 
                    display: 'block',
                    width: '100%',
                    height: '1347px',
                    border: 'none',
                    borderRadius: '3px'
                  }}
                  id="inline-IG8UA8lR0S0fhs8QXVG9"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Luxury Travel Inquiry Form"
                  data-height="1347"
                  data-layout-iframe-id="inline-IG8UA8lR0S0fhs8QXVG9"
                  data-form-id="IG8UA8lR0S0fhs8QXVG9"
                  title="Luxury Travel Inquiry Form"
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

export default ConsultationModal;


