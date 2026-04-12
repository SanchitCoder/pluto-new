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

/**
 * Cycles which card in a row is “emphasized” with a subtle scale pulse (Client Reviews pattern).
 */
export function useCyclingCardScales(count: number): number[] {
  const prefersReducedMotion = useReducedMotion();
  const [scales, setScales] = useState<number[]>(() => Array.from({ length: count }, () => 1));

  useEffect(() => {
    if (prefersReducedMotion || count < 1) {
      setScales(Array.from({ length: count }, () => 1));
      return;
    }

    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

    const run = async () => {
      const first = Array.from({ length: count }, () => 1);
      first[0] = CARD_ZOOM_SCALE;
      setScales(first);
      await sleep(CARD_ZOOM_DURATION_MS);
      if (cancelled) return;
      await sleep(CARD_ZOOM_HOLD_MS);
      if (cancelled) return;

      let i = 0;
      while (!cancelled) {
        const next = (i + 1) % count;
        const nextScales = Array.from({ length: count }, () => 1);
        nextScales[next] = CARD_ZOOM_SCALE;
        setScales(nextScales);
        await sleep(CARD_ZOOM_DURATION_MS);
        if (cancelled) break;
        await sleep(CARD_ZOOM_HOLD_MS);
        if (cancelled) break;
        i = next;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion, count]);

  if (prefersReducedMotion) {
    return Array.from({ length: count }, () => 1);
  }
  return scales.length === count ? scales : Array.from({ length: count }, () => 1);
}
