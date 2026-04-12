import React, { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import { cn } from '../lib/utils';

export type AngledSliderItem = {
  id: string | number;
  url?: string;
  alt?: string;
  title?: string;
  [key: string]: unknown;
};

const spring = { type: 'spring' as const, mass: 3, stiffness: 400, damping: 50 };

const cardVariants: Variants = {
  offHover: (angle: number) => ({
    rotateY: angle,
    z: 60,
    opacity: 0.9,
    scale: 1,
    zIndex: 30,
    transition: spring,
  }),
  onHover: (hoverScale: number) => ({
    rotateY: 0,
    z: 120,
    opacity: 1,
    scale: hoverScale,
    zIndex: 50,
    transition: spring,
  }),
};

function AngledCard<T extends AngledSliderItem>({
  item,
  angle,
  hoverScale,
  cardWidth,
  renderCard,
}: {
  item: T;
  angle: number;
  hoverScale: number;
  cardWidth: string;
  renderCard?: (item: T) => React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative shrink-0 overflow-visible group cursor-default"
      style={{
        width: cardWidth,
        height: '100%',
        transformStyle: 'preserve-3d',
      }}
      custom={isHovered ? hoverScale : angle}
      variants={cardVariants}
      initial="offHover"
      animate={isHovered ? 'onHover' : 'offHover'}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          renderCard
            ? 'overflow-visible border-0 bg-transparent p-0 shadow-none'
            : 'overflow-hidden min-h-[280px] rounded-xl border border-gray-200/90 bg-white shadow-2xl shadow-gray-900/15'
        )}
      >
        {renderCard ? (
          renderCard(item)
        ) : (
          <>
            <div className="relative h-full min-h-[280px] w-full">
              <img
                src={item.url}
                alt={item.alt || item.title || 'Slide'}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {item.title ? (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            ) : null}
          </>
        )}
      </div>
    </motion.div>
  );
}

export interface AngledSliderProps<T extends AngledSliderItem = AngledSliderItem> {
  items: T[];
  speed?: number;
  direction?: 'left' | 'right';
  containerHeight?: string;
  cardWidth?: string;
  gap?: string;
  /** Base Y-rotation in degrees when idle. */
  angle?: number;
  /** Alternate sign per card index (±angle) for a zig-zag depth read. */
  alternateAngle?: boolean;
  hoverScale?: number;
  className?: string;
  renderCard?: (item: T) => React.ReactNode;
}

export function AngledSlider<T extends AngledSliderItem>({
  items,
  speed = 40,
  direction = 'left',
  containerHeight = '400px',
  cardWidth = '300px',
  gap = '40px',
  angle = 20,
  alternateAngle = false,
  hoverScale = 1.05,
  className,
  renderCard,
}: AngledSliderProps<T>) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    const calculateWidth = () => {
      const numWidth = parseInt(cardWidth?.toString().replace('px', '') || '300', 10);
      const numGap = parseInt(gap?.toString().replace('px', '') || '40', 10);

      if (!Number.isNaN(numWidth) && !Number.isNaN(numGap)) {
        setWidth((numWidth + numGap) * items.length);
      } else if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        setWidth(scrollWidth / 3);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, [items, cardWidth, gap]);

  useEffect(() => {
    if (width <= 0 || reduceMotion) return;

    const startX = direction === 'left' ? 0 : -width;
    const endX = direction === 'left' ? -width : 0;

    if (isHovered) return;

    const runAnimation = () => {
      const currentX = x.get();
      const totalDist = width;
      const dist = Math.abs(endX - currentX);
      const duration = speed * (dist / totalDist);

      const controls = animate(x, endX, {
        duration,
        ease: 'linear',
        onComplete: () => {
          x.set(startX);
          runAnimation();
        },
      });
      return controls;
    };

    const animation = runAnimation();

    return () => {
      animation.stop();
    };
  }, [width, speed, direction, isHovered, x, reduceMotion]);

  return (
    <div
      role="region"
      aria-label="Award highlights"
      className={cn(
        'relative w-full overflow-hidden py-8 sm:py-10',
        className
      )}
      style={{
        height: containerHeight,
        perspective: '1000px',
      }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex h-full items-stretch"
        style={{ x, gap, transformStyle: 'preserve-3d' }}
      >
        {duplicatedItems.map((item, index) => {
          const logicalIndex = index % items.length;
          const cardAngle = alternateAngle
            ? logicalIndex % 2 === 0
              ? angle
              : -angle
            : angle;
          return (
            <AngledCard
              key={`${item.id}-${index}`}
              item={item}
              angle={cardAngle}
              hoverScale={hoverScale}
              cardWidth={cardWidth}
              renderCard={renderCard}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
