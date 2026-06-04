import { useRef, useCallback, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type BlogCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T) => string;
};

export default function BlogCarousel<T>({ items, renderItem, getKey }: BlogCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-blog-card]');
    const gap = 24;
    const step = (card?.offsetWidth ?? track.clientWidth * 0.85) + gap;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2.5 text-luxury-darkBlue shadow-md transition hover:bg-luxury-pearl md:flex"
        aria-label="Previous blog posts"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white p-2.5 text-luxury-darkBlue shadow-md transition hover:bg-luxury-pearl md:flex"
        aria-label="Next blog posts"
      >
        <ChevronRight size={22} />
      </button>

      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2 pt-1 [-webkit-overflow-scrolling:touch]"
      >
        {items.map((item, index) => (
          <div
            key={getKey(item)}
            data-blog-card
            className="w-[min(88vw,360px)] shrink-0 snap-start sm:w-[min(42vw,380px)] lg:w-[min(32%,400px)]"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
