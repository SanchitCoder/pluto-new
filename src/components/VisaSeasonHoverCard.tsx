import React from 'react';
import { cn } from '../lib/utils';

export interface VisaSeasonHoverCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Seasonal-style hover card (Lightswind-inspired): image overlay, title/subtitle,
 * description reveals on hover; optional footer (e.g. CTAs). On md+, sits in a row
 * with siblings and expands to 2/3 width on hover.
 */
export const VisaSeasonHoverCard: React.FC<VisaSeasonHoverCardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'group relative flex min-h-0 flex-col justify-end overflow-hidden rounded-lg bg-black p-6 shadow-lg transition-all duration-500 md:min-w-0 md:w-1/3 md:hover:w-2/3',
        'h-[350px] w-full lg:h-[450px]',
        className
      )}
    >
      <img
        src={imageSrc}
        className="absolute inset-0 h-full w-full object-cover object-center"
        alt={imageAlt || title}
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';
        }}
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-sm text-gray-300">{subtitle}</p>
        </div>
        <div className="mt-3 translate-y-4 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <p className="text-base leading-snug text-white lg:text-lg">{description}</p>
        </div>
        {children ? <div className="relative z-10 mt-4 flex flex-col gap-2">{children}</div> : null}
      </div>
    </div>
  );
}
