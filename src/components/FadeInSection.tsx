import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Softer ease, GPU-friendly (opacity); slightly earlier trigger for a smoother feel */
const viewport = { once: true, amount: 0.08, margin: '0px 0px -7% 0px' } as const;
const easeSmooth = [0.25, 0.1, 0.25, 1] as const;

/**
 * Flags a section as off-screen via `data-offscreen` (set directly on the DOM node, no re-render).
 * index.css uses the flag to pause always-running CSS animations (shimmer rings etc.) that would
 * otherwise keep repainting while the section is scrolled out of view.
 */
function useOffscreenFlag() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        node.dataset.offscreen = entry.isIntersecting ? 'false' : 'true';
      },
      { rootMargin: '150px 0px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Scroll-triggered fade-in for page sections (opacity only — keeps sticky positioning working). */
export const FadeInSection: React.FC<React.ComponentPropsWithoutRef<'section'>> = ({
  className,
  children,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const flagRef = useOffscreenFlag();

  if (reduceMotion) {
    return (
      <section ref={flagRef} className={className} {...rest}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={flagRef}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.62, ease: easeSmooth }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

/** Fade-in on mount for above-the-fold blocks (e.g. hero) without scroll observers. */
export const FadeInOnMount: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  className,
  children,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.62, ease: easeSmooth }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const FadeInFooter: React.FC<React.ComponentPropsWithoutRef<'footer'>> = ({
  className,
  children,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <footer className={className} {...rest}>
        {children}
      </footer>
    );
  }

  return (
    <motion.footer
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.62, ease: easeSmooth }}
      {...rest}
    >
      {children}
    </motion.footer>
  );
};
