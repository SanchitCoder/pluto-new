import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const springSnap = { type: 'spring' as const, stiffness: 520, damping: 38, mass: 0.85 };
const springExit = { type: 'spring' as const, stiffness: 380, damping: 34, mass: 0.88 };
const springEnter = { type: 'spring' as const, stiffness: 460, damping: 32, mass: 0.9 };

function exitDistancePx(): number {
  if (typeof window === 'undefined') return 420;
  return Math.min(480, window.innerWidth * 0.48);
}

export type ContentShuffleStackProps<T extends { id: string }> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  /** Min height of the stacked area (taller for blog cards vs testimonials) */
  stackMinHeightClass?: string;
  /** Max width of each card slot */
  maxWidthClass?: string;
  intervalMs?: number;
};

function AutoShuffleFrontLayer<T extends { id: string }>({
  item,
  shuffleSignal,
  onExitComplete,
  onEntranceDone,
  renderItem,
  maxWidthClass,
}: {
  item: T;
  shuffleSignal: number;
  onExitComplete: () => void;
  onEntranceDone: () => void;
  renderItem: (item: T) => React.ReactNode;
  maxWidthClass: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);
  const opacity = useMotionValue(1);

  const prevSignal = useRef(0);
  const cycleLock = useRef(false);
  const prevItemId = useRef<string | null>(null);

  useEffect(() => {
    if (shuffleSignal === 0 || shuffleSignal === prevSignal.current || cycleLock.current) return;
    prevSignal.current = shuffleSignal;
    cycleLock.current = true;

    let cancelled = false;
    const run = async () => {
      const dist = exitDistancePx();
      await Promise.all([
        animate(x, dist, springExit),
        animate(rotate, 10, springExit),
        animate(y, 14, springExit),
        animate(scale, 0.94, springExit),
      ]);
      if (cancelled) return;
      await animate(opacity, 0, { duration: 0.2, ease: 'easeOut' });
      if (cancelled) return;
      onExitComplete();
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [shuffleSignal, onExitComplete, x, y, scale, rotate, opacity]);

  useLayoutEffect(() => {
    if (prevItemId.current === null) {
      prevItemId.current = item.id;
      return;
    }
    if (prevItemId.current === item.id) return;
    prevItemId.current = item.id;

    x.set(exitDistancePx() * 0.1);
    y.set(24);
    scale.set(0.9);
    rotate.set(-5);
    opacity.set(0.65);

    let cancelled = false;
    const runEnter = async () => {
      await Promise.all([
        animate(x, 0, springEnter),
        animate(y, 0, springEnter),
        animate(scale, 1, springEnter),
        animate(rotate, 0, springEnter),
        animate(opacity, 1, springEnter),
      ]);
      if (!cancelled) {
        cycleLock.current = false;
        onEntranceDone();
      }
    };
    runEnter();
    return () => {
      cancelled = true;
    };
  }, [item.id, x, y, scale, rotate, opacity, onEntranceDone]);

  return (
    <motion.div
      className={`absolute inset-x-0 top-0 mx-auto w-full ${maxWidthClass} pointer-events-auto select-auto`}
      style={{
        zIndex: 30,
        x,
        y,
        scale,
        rotate,
        opacity,
      }}
    >
      {renderItem(item)}
    </motion.div>
  );
}

/**
 * Same shuffle / swipe-right / rise animation as testimonials, with arbitrary card content.
 */
export default function ContentShuffleStack<T extends { id: string }>({
  items,
  renderItem,
  className = '',
  stackMinHeightClass = 'min-h-[min(440px,72vh)]',
  maxWidthClass = 'max-w-md',
  intervalMs = 2000,
}: ContentShuffleStackProps<T>) {
  const [order, setOrder] = useState<T[]>(() => [...items]);
  const [shuffleSignal, setShuffleSignal] = useState(0);
  const nextShuffleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverPausedRef = useRef(false);

  const itemsKey = items.map((i) => i.id).join('|');
  useEffect(() => {
    setOrder([...items]);
    setShuffleSignal(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsKey]);

  const handleExitComplete = useCallback(() => {
    setOrder((prev) => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  const queueNextShuffle = useCallback(() => {
    if (order.length <= 1 || hoverPausedRef.current) return;
    if (nextShuffleTimer.current) window.clearTimeout(nextShuffleTimer.current);
    nextShuffleTimer.current = window.setTimeout(() => {
      setShuffleSignal((s) => s + 1);
      nextShuffleTimer.current = null;
    }, intervalMs);
  }, [order.length, intervalMs]);

  const handleStackPointerEnter = useCallback(() => {
    hoverPausedRef.current = true;
    if (nextShuffleTimer.current) {
      window.clearTimeout(nextShuffleTimer.current);
      nextShuffleTimer.current = null;
    }
  }, []);

  const handleStackPointerLeave = useCallback(() => {
    hoverPausedRef.current = false;
    queueNextShuffle();
  }, [queueNextShuffle]);

  useEffect(() => {
    if (order.length <= 1) return;
    queueNextShuffle();
    return () => {
      if (nextShuffleTimer.current) window.clearTimeout(nextShuffleTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- queueNextShuffle stable for order.length + intervalMs
  }, [itemsKey, order.length, intervalMs]);

  const visible = order.slice(0, Math.min(3, order.length));
  const front = visible[0];
  const behind = visible.slice(1);
  const paintBehind = [...behind].reverse();

  return (
    <div
      className={`relative mx-auto w-full ${maxWidthClass} ${className}`}
      onPointerEnter={handleStackPointerEnter}
      onPointerLeave={handleStackPointerLeave}
    >
      <div className={`relative w-full overflow-visible ${stackMinHeightClass}`}>
        {paintBehind.map((item, idx) => {
          const depth = behind.length - idx;
          const z = 30 - depth * 10;
          const scale = 1 - depth * 0.045;
          const yOffset = depth * 14;
          const opacityStatic = 1 - depth * 0.06;

          return (
            <motion.div
              key={item.id}
              className={`pointer-events-none absolute inset-x-0 top-0 mx-auto w-full ${maxWidthClass}`}
              style={{ zIndex: z }}
              initial={false}
              animate={{ y: yOffset, scale, opacity: opacityStatic }}
              transition={springSnap}
            >
              {renderItem(item)}
            </motion.div>
          );
        })}

        {front && order.length > 0 ? (
          <AutoShuffleFrontLayer
            key={itemsKey}
            item={front}
            shuffleSignal={shuffleSignal}
            onExitComplete={handleExitComplete}
            onEntranceDone={queueNextShuffle}
            renderItem={renderItem}
            maxWidthClass={maxWidthClass}
          />
        ) : null}
      </div>
    </div>
  );
}
