import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is (nearly) on screen. Use it to pause work that would
 * otherwise keep running while the element is scrolled out of view.
 */
export function useInViewport<T extends Element>(rootMargin = '200px 0px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}
