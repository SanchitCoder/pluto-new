import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import LunaAIChat from './LunaAIChat';

/** Four-pointed sparkle (industry-standard AI cue). */
function FourPointStar({ className, size = 10 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M6 0L7.4 4.6L12 6L7.4 7.4L6 12L4.6 7.4L0 6L4.6 4.6Z"
      />
    </svg>
  );
}

const LunaAIChatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            type="button"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-20 right-4 z-[60] sm:bottom-6 sm:right-6"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.035, y: -2 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Open Pluto AI travel assistant"
            title="Pluto AI — ask anything about travel"
          >
            <span className="luna-ai-fab-shell">
              <span className="luna-ai-fab-spin" aria-hidden />
              <span className="relative z-10 flex items-center gap-2 rounded-full bg-gradient-to-b from-[#E3E3E4] via-[#D8D7D8] to-[#C0BFBE] px-3.5 py-2 pl-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-1px_0_rgba(0,0,0,0.06)] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:pl-3">
                <motion.span
                  className="inline-flex text-black"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [1, 1.18, 1],
                          opacity: [0.85, 1, 0.85],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FourPointStar size={10} />
                </motion.span>
                <span className="select-none text-sm font-extrabold tracking-[0.14em] text-black sm:text-[0.95rem]">
                  AI
                </span>
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <LunaAIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default LunaAIChatButton;
