import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PromotionalPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// public/Crisis-Video.mp4 – Vite copies to dist root; ensure file is committed so production has it
const CRISIS_VIDEO_SRC = '/Crisis-Video.mp4';

const PromotionalPopup: React.FC<PromotionalPopupProps> = ({ isOpen, onClose }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Autoplay when popup opens; retry after delay for production (slower load)
  React.useEffect(() => {
    if (!isOpen) return;
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.muted = true; // Required for autoplay in production (browser policy)
      video.play().catch(() => {});
    };

    playVideo();
    const retry = setTimeout(playVideo, 300);
    return () => clearTimeout(retry);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={CRISIS_VIDEO_SRC}
                className="absolute inset-0 w-full h-full object-contain"
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                onLoadedData={(e) => {
                  const v = e.currentTarget;
                  v.muted = true;
                  v.play().catch(() => {});
                }}
                onCanPlay={(e) => {
                  const v = e.currentTarget;
                  if (v.paused) {
                    v.muted = true;
                    v.play().catch(() => {});
                  }
                }}
              >
                <source src={CRISIS_VIDEO_SRC} type="video/mp4" />
              </video>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-2 right-2 z-20 w-9 h-9 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all shadow-lg border-2 border-yellow-500"
                aria-label="Close popup"
              >
                <X size={18} className="text-black font-bold" />
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PromotionalPopup;

