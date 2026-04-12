import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type ShimmerBorderCardProps = {
  children: React.ReactNode;
  /** Classes on the outer shimmer wrapper (e.g. shadow) */
  className?: string;
  /** Classes on the inner white/content shell */
  innerClassName?: string;
};

/**
 * Neon blue rotating border + cursor spotlight (masked by inner card).
 * Inner surface stays visually neutral (caller supplies bg via innerClassName).
 */
export function ShimmerBorderCard({
  children,
  className = '',
  innerClassName = '',
}: ShimmerBorderCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [wakeKey, setWakeKey] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 320, damping: 32, mass: 0.45 });
  const smoothY = useSpring(mouseY, { stiffness: 320, damping: 32, mass: 0.45 });

  const glowHalf = 220;
  const spotlightX = useTransform(smoothX, (x) => x - glowHalf);
  const spotlightY = useTransform(smoothY, (y) => y - glowHalf);

  const borderRotate = useMotionValue(0);
  const durationRef = useRef(5.75);
  durationRef.current = isHovered ? 2.75 : 5.75;

  useEffect(() => {
    let prev = performance.now();
    let angle = 0;
    borderRotate.set(0);

    let id = 0;
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - prev) / 1000);
      prev = now;
      const speed = 360 / durationRef.current;
      angle = (angle + speed * dt) % 360;
      borderRotate.set(angle);
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [wakeKey, borderRotate]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mouseX.set(e.clientX - r.left);
      mouseY.set(e.clientY - r.top);
    },
    [mouseX, mouseY]
  );

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
    setWakeKey((k) => k + 1);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`group relative rounded-2xl p-px ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        aria-hidden
      >
        <motion.div
          className="absolute left-1/2 top-1/2 aspect-square w-[220%] max-w-none -translate-x-1/2 -translate-y-1/2 will-change-transform opacity-[0.85] transition-opacity duration-300 group-hover:opacity-100"
          style={{
            rotate: borderRotate,
            background:
              'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(34,211,238,0.12) 55deg, rgba(56,189,248,0.95) 110deg, rgba(14,165,233,0.85) 165deg, rgba(6,182,212,0.45) 220deg, rgba(34,211,238,0.15) 280deg, transparent 320deg)',
          }}
        />
      </div>

      <div
        className={`relative z-[2] overflow-hidden rounded-[15px] bg-white ${innerClassName}`}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-[1] h-[440px] w-[440px] max-w-[min(440px,140%)] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle closest-side, rgba(56,189,248,0.28) 0%, rgba(14,165,233,0.1) 28%, transparent 62%)',
            x: spotlightX,
            y: spotlightY,
          }}
        />
        <div className="relative z-[3]">{children}</div>
      </div>
    </div>
  );
}

export default ShimmerBorderCard;
