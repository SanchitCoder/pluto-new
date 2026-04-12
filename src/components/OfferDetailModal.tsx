import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MapPin, Clock, Star, CheckCircle, Calendar } from 'lucide-react';
import Button from './Button';

interface OfferPackage {
  id: string;
  title: string;
  destination: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  originalPrice: number | null;
  discount: number;
  rating: number;
  reviews: number;
  category: string;
  highlights: string[];
  includes: string[];
  badge?: string;
  validUntil?: string;
}

interface OfferDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: OfferPackage | null;
  onBookConsultation: () => void;
}

const OfferDetailModal: React.FC<OfferDetailModalProps> = ({ isOpen, onClose, offer, onBookConsultation }) => {
  if (!offer) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-4xl bg-white rounded-lg sm:rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700 touch-manipulation"
              aria-label="Close modal"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="relative">
              {/* Image */}
              <div className="relative h-48 sm:h-64 md:h-80 rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                {offer.badge && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-primary-gold text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      {offer.badge}
                    </span>
                  </div>
                )}
                {offer.validUntil && (
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <div className="bg-black/70 text-white px-3 py-2 rounded-lg text-xs sm:text-sm">
                      Valid until: {new Date(offer.validUntil).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                )}
              </div>

              {/* Title and Basic Info */}
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-navy mb-3 sm:mb-4 font-heading">
                  {offer.title}
                </h2>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{offer.destination}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} className="sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{offer.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star size={18} className="text-yellow-400 fill-yellow-400 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-semibold">{offer.rating}</span>
                    <span className="text-gray-400 text-sm sm:text-base">({offer.reviews} reviews)</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-gold">
                      AED {offer.price.toLocaleString()}
                    </span>
                    {offer.originalPrice && (
                      <span className="text-xl sm:text-2xl text-gray-400 line-through">
                        AED {offer.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-sm sm:text-base text-gray-500">per person</span>
                  </div>
                  {offer.id === '1' && (
                    <p className="text-sm sm:text-base text-primary-orange font-semibold mt-2">
                      Early Booking: Confirm by 31 January
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-2 sm:mb-3 font-heading">Description</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-body">{offer.description}</p>
              </div>

              {/* Highlights */}
              {offer.highlights && offer.highlights.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-3 sm:mb-4 font-heading">Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {offer.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle size={18} className="text-primary-gold flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                        <span className="text-gray-700 text-sm sm:text-base font-body">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Includes */}
              {offer.includes && offer.includes.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-navy mb-3 sm:mb-4 font-heading">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {offer.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle size={18} className="text-primary-gold flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                        <span className="text-gray-700 text-sm sm:text-base font-body">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <Button
                  variant="gold"
                  size="lg"
                  fullWidth
                  onClick={() => {
                    onBookConsultation();
                    onClose();
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferDetailModal;





