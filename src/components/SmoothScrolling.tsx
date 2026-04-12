import React, { useEffect, useState, type ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

const lenisOptions = {
  autoRaf: true,
  /** Slightly softer follow-through than default */
  lerp: 0.078,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.12,
  anchors: true,
  stopInertiaOnNavigate: true,
} as const;

/**
 * Smooth wheel/touch scrolling via Lenis. Disabled when the user prefers reduced motion.
 */
export function SmoothScrolling({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return <ReactLenis root options={lenisOptions}>{children}</ReactLenis>;
}
