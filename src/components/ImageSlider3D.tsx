import React, { useEffect } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { cn } from '../lib/utils';
import { useCyclingCardScales, cardZoomScaleTransition } from '../hooks/useCyclingCardScales';

export type Slider3DSlide = {
  image: string;
  name: string;
};

export type Slider3DRowType = 'top' | 'middle' | 'bottom';

export interface ImageSlider3DProps {
  slides: Slider3DSlide[];
  /** Seconds for one full 360° rotation */
  duration?: number;
  /** Card width (used in 3D placement math) */
  cardWidth?: string;
  cardAspectRatio?: string;
  perspective?: string;
  containerClassName?: string;
  imageClassName?: string;
  rotationDirection?: 'left' | 'right';
  withMask?: boolean;
  /**
   * Top/bottom: concave ring (negative translateZ).
   * Middle: convex ring (positive translateZ) + front-facing card scales up (inverted feel vs top/bottom).
   */
  rowType?: Slider3DRowType;
  /** Client Reviews–style cycling scale pulse + shimmer on each card (concave rows). */
  cyclingEmphasis?: boolean;
}

function concaveTransform(i: number, n: number, cardWidth: string): string {
  return `rotateY(calc(${i} * (1turn / ${n}))) translateZ(calc(-1 * (0.5 * ${cardWidth} + 0.5em) / tan(0.5 * (1turn / ${n}))))`;
}

function middleBaseTranslateZ(cardWidth: string, n: number): string {
  return `calc(1.2 * (0.5 * ${cardWidth} + 0.5em) / tan(0.5 * (1turn / ${n})))`;
}

/** Angular distance (deg) from facing the camera; 0 = front, 180 = back. */
function angularDistFromFront(rotateYDeg: number, i: number, n: number): number {
  const anglePerCard = 360 / n;
  let theta = (rotateYDeg + i * anglePerCard) % 360;
  if (theta < 0) theta += 360;
  return Math.min(theta, 360 - theta);
}

type RingSlideProps = {
  slide: Slider3DSlide;
  i: number;
  n: number;
  cardWidth: string;
  cardAspectRatio: string;
  imageClassName: string;
  rotateY: MotionValue<number>;
  rowType: Slider3DRowType;
  cyclingEmphasis?: boolean;
  emphasisScale?: number;
};

function RingSlide({
  slide,
  i,
  n,
  cardWidth,
  cardAspectRatio,
  imageClassName,
  rotateY,
  rowType,
  cyclingEmphasis = false,
  emphasisScale = 1,
}: RingSlideProps) {
  const isMiddle = rowType === 'middle';

  const transform = useTransform(rotateY, (R) => {
    if (!isMiddle) {
      return concaveTransform(i, n, cardWidth);
    }
    const dist = angularDistFromFront(R, i, n);
    const scale = Math.max(0.85, 1.15 - (dist / 180) * 0.3);
    const tz = middleBaseTranslateZ(cardWidth, n);
    return `rotateY(calc(${i} * (1turn / ${n}))) translateZ(calc(${tz})) scale(${scale})`;
  });

  const zIndex = useTransform(rotateY, (R) => {
    if (!isMiddle) return 1;
    const dist = angularDistFromFront(R, i, n);
    return Math.round(100 - (dist / 180) * 45);
  });

  const filter = useTransform(rotateY, (R) => {
    if (!isMiddle) return 'none';
    const dist = angularDistFromFront(R, i, n);
    const b = 1 + 0.15 - (dist / 180) * 0.2;
    const brightness = Math.min(1.22, Math.max(0.92, b));
    return `brightness(${brightness})`;
  });

  const media = (
    <>
      <img
        src={slide.image}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80&auto=format&fit=crop';
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/35 to-transparent"
        aria-hidden
      />
      <span className="absolute bottom-2 left-2 right-2 z-[1] text-center text-[11px] font-semibold leading-tight text-white sm:bottom-2.5 sm:text-xs md:text-sm">
        {slide.name}
      </span>
    </>
  );

  if (!cyclingEmphasis) {
    return (
      <motion.div
        className={cn(
          'col-start-1 row-start-1 relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10',
          imageClassName
        )}
        style={{
          width: cardWidth,
          aspectRatio: cardAspectRatio,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transform,
          zIndex: isMiddle ? zIndex : 1,
          filter,
        }}
      >
        {media}
      </motion.div>
    );
  }

  const stackZ = isMiddle ? zIndex : emphasisScale > 1.05 ? 20 : 10;

  return (
    <motion.div
      className="col-start-1 row-start-1"
      style={{
        width: cardWidth,
        aspectRatio: cardAspectRatio,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform,
        zIndex: stackZ,
        filter,
      }}
    >
      <motion.div
        className={cn(
          'relative h-full w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10',
          imageClassName
        )}
        animate={{ scale: emphasisScale }}
        transition={cardZoomScaleTransition}
        style={{ transformOrigin: 'center center' }}
      >
        <div className="client-review-shimmer-ring" aria-hidden />
        {media}
      </motion.div>
    </motion.div>
  );
}

/**
 * Lightswind-style 3D carousel: slides arranged on a Y-axis ring, infinite rotateY.
 * Pass destination-style slides for image + label overlay.
 */
export function ImageSlider3D({
  slides,
  duration = 36,
  cardWidth = '12rem',
  cardAspectRatio = '7/10',
  perspective = '40rem',
  containerClassName = '',
  imageClassName = '',
  rotationDirection = 'left',
  withMask = true,
  rowType = 'top',
  cyclingEmphasis = false,
}: ImageSlider3DProps) {
  const n = slides.length;
  const prefersReducedMotion = useReducedMotion();
  const emphasisScales = useCyclingCardScales(cyclingEmphasis ? n : 0);
  const animationDuration = prefersReducedMotion ? duration * 4 : duration;

  const maskStyles: React.CSSProperties = withMask
    ? {
        WebkitMask: 'linear-gradient(90deg, transparent, #000 12% 88%, transparent)',
        mask: 'linear-gradient(90deg, transparent, #000 12% 88%, transparent)',
      }
    : {};

  const effectivePerspective = rowType === 'middle' ? '45rem' : perspective;

  const rotateY = useMotionValue(rotationDirection === 'left' ? 0 : 360);

  useEffect(() => {
    if (n < 1) return;
    if (prefersReducedMotion) {
      rotateY.set(rotationDirection === 'left' ? 0 : 360);
      return;
    }
    const from = rotationDirection === 'left' ? 0 : 360;
    const to = rotationDirection === 'left' ? 360 : 0;
    const controls = animate(rotateY, [from, to], {
      duration: animationDuration,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    });
    return () => controls.stop();
  }, [n, prefersReducedMotion, rotationDirection, animationDuration, rotateY]);

  if (n < 1) return null;

  return (
    <div
      className={cn(
        'grid h-full min-h-[220px] w-full place-items-center overflow-hidden sm:min-h-[260px] md:min-h-[300px]',
        containerClassName
      )}
      style={{
        perspective: effectivePerspective,
        ...maskStyles,
      }}
      aria-hidden
    >
      <motion.div
        className="pointer-events-auto grid place-self-center"
        style={{ transformStyle: 'preserve-3d', rotateY }}
      >
        {slides.map((slide, i) => (
          <RingSlide
            key={`${slide.name}-${i}`}
            slide={slide}
            i={i}
            n={n}
            cardWidth={cardWidth}
            cardAspectRatio={cardAspectRatio}
            imageClassName={imageClassName}
            rotateY={rotateY}
            rowType={rowType}
            cyclingEmphasis={cyclingEmphasis}
            emphasisScale={emphasisScales[i] ?? 1}
          />
        ))}
      </motion.div>
    </div>
  );
}

type RowStackProps = {
  slides: Slider3DSlide[];
  duration?: number;
  cardWidth?: string;
  className?: string;
  cyclingEmphasis?: boolean;
};

/** Single 3D destination carousel row (top / concave). */
export function Destinations3DRowStack({
  slides,
  duration = 38,
  cardWidth = '12.65rem',
  className = '',
  cyclingEmphasis = false,
}: RowStackProps) {
  return (
    <div
      className={cn(
        'flex w-full origin-center scale-[0.88] sm:scale-95 md:scale-100',
        className
      )}
      role="presentation"
    >
      <ImageSlider3D
        slides={slides}
        duration={duration}
        cardWidth={cardWidth}
        rotationDirection="left"
        rowType="top"
        withMask
        cyclingEmphasis={cyclingEmphasis}
      />
    </div>
  );
}

export default ImageSlider3D;
