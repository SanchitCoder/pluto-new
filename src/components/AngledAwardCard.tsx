import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '../lib/utils';

const spring = { type: 'spring' as const, mass: 3, stiffness: 400, damping: 50 };

type AngledAwardCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Y-rotation in degrees when idle (e.g. +18 / -18 for alternating depth in a grid). */
  angleY?: number;
  /** Scale when hovered (Lightswind default ~1.05). */
  hoverScale?: number;
  /** Idle translateZ (px). */
  zIdle?: number;
  /** Hovered translateZ (px). */
  zHover?: number;
};

/**
 * 3D “angled” card shell (Lightswind-style): perspective tilt, spring to flat + pop on hover.
 * Parent should set CSS perspective (e.g. perspective-[1000px]).
 */
export function AngledAwardCard({
  children,
  className,
  angleY = 18,
  hoverScale = 1.05,
  zIdle = 60,
  zHover = 120,
}: AngledAwardCardProps) {
  const [hovered, setHovered] = useState(false);

  const variants: Variants = {
    idle: {
      rotateY: angleY,
      z: zIdle,
      scale: 1,
      opacity: 0.92,
      transition: spring,
    },
    hover: {
      rotateY: 0,
      z: zHover,
      scale: hoverScale,
      opacity: 1,
      transition: spring,
    },
  };

  return (
    <motion.div
      className={cn(
        'relative w-full cursor-default overflow-visible will-change-transform [transform-style:preserve-3d]',
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
      variants={variants}
      initial="idle"
      animate={hovered ? 'hover' : 'idle'}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="w-full [transform-style:preserve-3d]">{children}</div>
    </motion.div>
  );
}
