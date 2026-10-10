import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/** Peak scale: +6% zoom increased by 60% → 1.096× (matches Client Reviews) */
export const CARD_ZOOM_SCALE = 1 + 0.06 * 1.6;
export const CARD_ZOOM_DURATION_MS = 400;
export const CARD_ZOOM_HOLD_MS = 1000;

export const cardZoomScaleTransition = {
  duration: CARD_ZOOM_DURATION_MS / 1000,
  ease: [0.4, 0, 0.2, 1] as const,
};

/** How long after the last scroll event the page counts as "still scrolling". */
const SCROLL_CALM_MS = 220;

let lastScrollAt = 0;
if (typeof window !== 'undefined') {
  window.addEventListener(
    'scroll',
    () => {
      lastScrollAt = Date.now();
    },
    { passive: true }
  );
}

/**
 * Cycles which card in a row is “emphasized” with a subtle scale pulse (Client Reviews pattern).
 *
 * Each step re-renders the calling component, so steps are deferred while the user is scrolling,
 * the tab is hidden, or `enabled` is false — otherwise this background work competes with scrolling.
 */
export function useCyclingCardScales(count: number, enabled = true): number[] {
  const prefersReducedMotion = useReducedMotion();
  const [scales, setScales] = useState<number[]>(() => Array.from({ length: count }, () => 1));

  useEffect(() => {
    if (prefersReducedMotion || count < 1) {
      setScales(Array.from({ length: count }, () => 1));
      return;
    }
    if (!enabled) return;

    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
    const untilCalm = async () => {
      while (!cancelled && (document.hidden || Date.now() - lastScrollAt < SCROLL_CALM_MS)) {
        await sleep(120);
      }
    };
    const only = (index: number) => Array.from({ length: count }, (_, i) => (i === index ? CARD_ZOOM_SCALE : 1));

    const run = async () => {
      await untilCalm();
      if (cancelled) return;
      setScales(only(0));
      await sleep(CARD_ZOOM_DURATION_MS + CARD_ZOOM_HOLD_MS);

      let i = 0;
      while (!cancelled) {
        await untilCalm();
        if (cancelled) break;
        const next = (i + 1) % count;
        setScales(only(next));
        await sleep(CARD_ZOOM_DURATION_MS + CARD_ZOOM_HOLD_MS);
        i = next;
      }
    };

    run();
    return () => {
      cancelled = true;
      setScales(Array.from({ length: count }, () => 1));
    };
  }, [prefersReducedMotion, count, enabled]);

  if (prefersReducedMotion) {
    return Array.from({ length: count }, () => 1);
  }
  return scales.length === count ? scales : Array.from({ length: count }, () => 1);
}
