import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

export type WordRevealParagraph = {
  /** Plain paragraph; split on whitespace into words */
  text: string;
  className?: string;
};

type Props = {
  paragraphs: WordRevealParagraph[];
  /** Extra classes on the scroll-tracking wrapper */
  className?: string;
  /**
   * How aggressively scroll maps to words (>1 = more words per wheel/trackpad delta).
   * Default tuned so a modest scroll reveals text before the block leaves the viewport.
   */
  sensitivity?: number;
};

function splitWords(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean);
}

/**
 * Reveals words in order as scroll progress advances through the target (scroll-linked).
 * Full text is available to screen readers via sr-only; animated layer is aria-hidden.
 */
/** Prior default 2.35; reduced ~35% for slower word reveal per scroll */
const DEFAULT_SENSITIVITY = 2.35 * 0.65;

export const ScrollLinkedWordReveal: React.FC<Props> = ({
  paragraphs,
  className = '',
  sensitivity = DEFAULT_SENSITIVITY,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const blocks = useMemo(
    () => paragraphs.map((p) => ({ ...p, words: splitWords(p.text) })),
    [paragraphs]
  );

  const totalWords = useMemo(() => blocks.reduce((n, b) => n + b.words.length, 0), [blocks]);

  const starts = useMemo(() => {
    const s: number[] = [];
    let acc = 0;
    for (const b of blocks) {
      s.push(acc);
      acc += b.words.length;
    }
    return s;
  }, [blocks]);

  const fullPlainText = useMemo(
    () => paragraphs.map((p) => p.text).join('\n\n'),
    [paragraphs]
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    /* Shorter band than “full element”: progress runs while the block crosses the middle of the screen */
    offset: ['start 0.92', 'start 0.28'],
  });

  const [revealedCount, setRevealedCount] = useState(0);

  const applyProgress = useCallback(
    (v: number) => {
      const clamped = Math.min(1, Math.max(0, v));
      const boosted = Math.min(1, clamped * sensitivity);
      const next = Math.min(totalWords, Math.max(0, Math.round(boosted * totalWords)));
      setRevealedCount((prev) => (prev === next ? prev : next));
    },
    [totalWords, sensitivity]
  );

  useMotionValueEvent(scrollYProgress, 'change', applyProgress);

  useEffect(() => {
    applyProgress(scrollYProgress.get());
  }, [scrollYProgress, applyProgress]);

  const lastVisibleIndex = revealedCount - 1;
  const showCaret = revealedCount > 0 && revealedCount < totalWords;

  return (
    <>
      <p className="sr-only">{fullPlainText}</p>
      <div
        ref={ref}
        className={cn(
          /* Shorter track = scroll progress moves faster relative to word count */
          'pb-10 md:pb-14',
          className
        )}
        aria-hidden="true"
      >
        <div className="space-y-6">
          {blocks.map((block, bi) => (
            <p
              key={bi}
              className={block.className ?? 'text-lg text-gray-700 leading-relaxed'}
            >
              {block.words.map((word, wi) => {
                const globalIdx = starts[bi] + wi;
                const visible = globalIdx < revealedCount;
                const isLastVisible = visible && globalIdx === lastVisibleIndex;
                return (
                  <React.Fragment key={`${bi}-${wi}`}>
                    {wi > 0 ? ' ' : null}
                    <span
                      className={
                        visible
                          ? 'text-gray-700 transition-[color] duration-200'
                          : 'text-transparent select-none'
                      }
                    >
                      {word}
                    </span>
                    {isLastVisible && showCaret ? (
                      <span
                        className="ml-0.5 inline-block h-[1em] w-px animate-pulse bg-primary-navy/50 align-[-0.08em]"
                        aria-hidden
                      />
                    ) : null}
                  </React.Fragment>
                );
              })}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
