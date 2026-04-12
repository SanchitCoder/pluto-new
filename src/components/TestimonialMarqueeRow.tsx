import React, { useMemo } from 'react';
import { ThreeDScrollTriggerRow } from './ThreeDScrollTrigger';
import { TestimonialCardFace, type ShuffleTestimonial, type StackVariant } from './TestimonialShuffleStack';
import { cn } from '../lib/utils';

const CARD_CELL =
  'inline-block w-[min(92vw,380px)] shrink-0 mr-6 align-top [vertical-align:top] whitespace-normal';

type TestimonialMarqueeRowProps = {
  items: ShuffleTestimonial[];
  variant: StackVariant;
  /** Marquee travel direction */
  direction?: 1 | -1;
  baseVelocity?: number;
  className?: string;
};

/**
 * Horizontal scroll-triggered marquee of testimonial cards (same card UI as shuffle stack).
 */
export function TestimonialMarqueeRow({
  items,
  variant,
  direction = 1,
  baseVelocity = 5,
  className,
}: TestimonialMarqueeRowProps) {
  const cards = useMemo(
    () =>
      items.map((item) => (
        <div key={item.id} className={CARD_CELL}>
          <TestimonialCardFace item={item} variant={variant} />
        </div>
      )),
    [items, variant]
  );

  return (
    <ThreeDScrollTriggerRow
      direction={direction}
      baseVelocity={baseVelocity}
      className={cn(
        'py-3 [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat]',
        className
      )}
    >
      {cards}
    </ThreeDScrollTriggerRow>
  );
}
