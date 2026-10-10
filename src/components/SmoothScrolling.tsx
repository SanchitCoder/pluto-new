import { useEffect, useState, type ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

const lenisOptions = {
  autoRaf: true,
  /** Snappy follow-through: a lower value made scrolling feel laggy on top of trackpad inertia */
  lerp: 0.13,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.12,
  anchors: true,
  stopInertiaOnNavigate: true,
} as const;

/**
 * macOS / iOS already give every input device smooth, inertial native scrolling. Layering JS smoothing
 * (Lenis) on top only adds input lag and forces the main thread to redraw on every frame.
 */
const prefersNativeScroll = () =>
  typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent);

/**
 * Precision touchpads (Windows/Linux) also inertia-scroll natively and report small or fractional
 * wheel deltas; a classic mouse wheel reports large integer steps. Hand touchpads back to native scrolling.
 */
function TouchpadGuard() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // pinch-zoom gesture
      const looksLikeTouchpad = e.deltaMode === 0 && (Math.abs(e.deltaY) < 40 || !Number.isInteger(e.deltaY));
      if (looksLikeTouchpad) {
        lenis.options.smoothWheel = false;
        window.removeEventListener('wheel', onWheel, true);
      }
    };
    window.addEventListener('wheel', onWheel, { passive: true, capture: true });
    return () => window.removeEventListener('wheel', onWheel, true);
  }, [lenis]);

  return null;
}

/**
 * Smooth wheel scrolling via Lenis for classic mouse wheels only. Native scrolling is used on macOS,
 * on touchpads, on touch devices, and when the user prefers reduced motion.
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

  if (reducedMotion || prefersNativeScroll()) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <TouchpadGuard />
      {children}
    </ReactLenis>
  );
}
