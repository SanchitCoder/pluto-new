import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export type ShuffleTestimonial = {
  id: string;
  name: string;
  title?: string;
  text: string;
  rating: number;
  image?: string;
  /** Override initials in the avatar circle (e.g. single letter like Google) */
  avatarInitial?: string;
  avatarClassName?: string;
};

export type StackVariant = 'client' | 'google';

const AUTO_INTERVAL_MS = 2000;

const springSnap = { type: 'spring' as const, stiffness: 520, damping: 38, mass: 0.85 };
const springExit = { type: 'spring' as const, stiffness: 380, damping: 34, mass: 0.88 };
const springEnter = { type: 'spring' as const, stiffness: 460, damping: 32, mass: 0.9 };

function exitDistancePx(): number {
  if (typeof window === 'undefined') return 420;
  return Math.min(480, window.innerWidth * 0.48);
}

function initials(name: string): string {
  const parts = name.replace(/["']/g, '').trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return parts[0]?.slice(0, 2).toUpperCase() || '?';
}

type TestimonialShuffleStackProps = {
  items: ShuffleTestimonial[];
  className?: string;
  variant?: StackVariant;
  instruction?: string;
  instructionClassName?: string;
  intervalMs?: number;
};

function AutoShuffleFrontCard({
  item,
  variant,
  shuffleSignal,
  onExitComplete,
  onEntranceDone,
}: {
  item: ShuffleTestimonial;
  variant: StackVariant;
  shuffleSignal: number;
  onExitComplete: () => void;
  onEntranceDone: () => void;
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
      className="absolute inset-x-0 top-0 mx-auto w-full max-w-md pointer-events-none"
      style={{
        zIndex: 30,
        x,
        y,
        scale,
        rotate,
        opacity,
      }}
    >
      <TestimonialCardFace item={item} variant={variant} />
    </motion.div>
  );
}

const TestimonialShuffleStack: React.FC<TestimonialShuffleStackProps> = ({
  items,
  className = '',
  variant = 'client',
  instruction,
  instructionClassName,
  intervalMs = AUTO_INTERVAL_MS,
}) => {
  const [order, setOrder] = useState<ShuffleTestimonial[]>(() => [...items]);
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

  // First shuffle after load / when the testimonial set changes — not on every internal reorder.
  useEffect(() => {
    if (order.length <= 1) return;
    queueNextShuffle();
    return () => {
      if (nextShuffleTimer.current) window.clearTimeout(nextShuffleTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- queueNextShuffle is stable for order.length + intervalMs; omit to avoid resetting the timer when the callback identity flips.
  }, [itemsKey, order.length, intervalMs]);

  const visible = order.slice(0, Math.min(3, order.length));
  const front = visible[0];
  const behind = visible.slice(1);
  const paintBehind = [...behind].reverse();

  const hint = instruction?.trim() ?? '';

  return (
    <div className={`relative mx-auto w-full max-w-lg select-none ${className}`}>
      {hint ? (
        <p
          className={`instruction text-center text-sm mb-4 ${
            instructionClassName ?? (variant === 'google' ? 'text-white/70' : 'text-slate-400')
          }`}
        >
          {hint}
        </p>
      ) : null}

      <div className="relative min-h-[min(640px,88vh)] w-full overflow-visible">
        {/* Capture hover: card layers use pointer-events-none; this layer sits under them. */}
        <div
          className="absolute inset-0 z-[1] pointer-events-auto"
          aria-hidden
          onPointerEnter={handleStackPointerEnter}
          onPointerLeave={handleStackPointerLeave}
        />
        {paintBehind.map((item, idx) => {
          const depth = behind.length - idx;
          const z = 30 - depth * 10;
          const scale = 1 - depth * 0.045;
          const yOffset = depth * 14;
          const opacityStatic = 1 - depth * 0.06;

          return (
            <motion.div
              key={item.id}
              className="absolute inset-x-0 top-0 mx-auto w-full max-w-md pointer-events-none"
              style={{ zIndex: z }}
              initial={false}
              animate={{ y: yOffset, scale, opacity: opacityStatic }}
              transition={springSnap}
            >
              <TestimonialCardFace item={item} variant={variant} />
            </motion.div>
          );
        })}

        {front && order.length > 0 ? (
          <AutoShuffleFrontCard
            key={itemsKey}
            item={front}
            variant={variant}
            shuffleSignal={shuffleSignal}
            onExitComplete={handleExitComplete}
            onEntranceDone={queueNextShuffle}
          />
        ) : null}
      </div>
    </div>
  );
};

function GoogleGlyph({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="14" height="14" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function TestimonialCardFace({
  item,
  variant = 'client',
}: {
  item: ShuffleTestimonial;
  variant?: StackVariant;
}) {
  const ini = item.avatarInitial?.trim() || initials(item.name);
  const avatarBg =
    item.avatarClassName ?? 'bg-gradient-to-br from-slate-700 to-slate-900';

  return (
    <div className="whitespace-normal rounded-2xl border border-gray-200 bg-white p-6 text-gray-900 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] ring-1 ring-gray-200/80">
      <div className="flex items-start gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
          {item.image ? (
            <img src={item.image} alt="" className="h-full w-full object-cover" />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center text-sm font-bold text-white ${avatarBg}`}
            >
              {ini}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= item.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            {variant === 'google' ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-700">
                <GoogleGlyph className="h-3.5 w-3.5 shrink-0" />
                Google
              </span>
            ) : null}
          </div>
          {variant === 'google' ? (
            <p className="mt-1.5 text-xs text-gray-600 break-words text-pretty">
              {item.title ? `Google review · ${item.title}` : 'Google review'}
            </p>
          ) : (
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600 break-words text-pretty">
              {item.title ?? 'Verified client'}
            </p>
          )}
        </div>
      </div>

      <blockquote className="mt-5 border-l-2 border-gray-300 pl-4">
        <Quote className="mb-2 h-5 w-5 text-gray-400" aria-hidden />
        <p className="text-sm leading-relaxed text-black md:text-base break-words text-pretty hyphens-auto">
          {item.text}
        </p>
      </blockquote>

      <p className="mt-5 text-sm font-semibold text-black">{item.name}</p>
    </div>
  );
}

export default TestimonialShuffleStack;
