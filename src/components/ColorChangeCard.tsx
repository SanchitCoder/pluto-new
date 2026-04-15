import React from 'react';

export type ColorChangeCardProps = {
  title: string;
  description?: string;
  imageUrl: string;
  className?: string;
};

export const ColorChangeCard: React.FC<ColorChangeCardProps> = ({
  title,
  description,
  imageUrl,
  className = '',
}) => {
  return (
    <div
      className={`group relative flex h-full min-h-[160px] sm:min-h-[180px] cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-lg transition-[box-shadow,transform] duration-300 hover:-translate-y-2 hover:shadow-[0_20px_42px_-10px_rgba(10,31,61,0.14),0_8px_24px_-6px_rgba(43,122,155,0.13)] ${className}`}
    >
      <div className="services-grid-shimmer-ring" aria-hidden />

      <div className="absolute inset-[5px] z-10 flex flex-col overflow-hidden rounded-[calc(0.5rem-5px)] sm:rounded-[calc(0.75rem-5px)]">
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full origin-center object-cover transition-transform duration-500 ease-out group-hover:scale-[1.8]"
            aria-hidden
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[4.6rem] bg-gradient-to-t from-black via-black/75 to-transparent sm:h-[5.175rem]"
          aria-hidden
        />

        <div className="relative z-10 mt-auto flex flex-col justify-end p-4 sm:p-5">
          <h3 className="text-left text-lg font-bold leading-tight text-white sm:text-xl">
            {title}
          </h3>
          {description?.trim() ? (
            <p className="mt-1 text-left text-xs leading-snug text-white sm:text-sm">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ColorChangeCard;
