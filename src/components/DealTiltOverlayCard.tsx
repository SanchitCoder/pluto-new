import React from 'react';
import styled from 'styled-components';
import { Tag, TrendingDown } from 'lucide-react';

const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: -10px;

  .card {
    position: relative;
    width: 100%;
    height: 220px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s ${EASE};
    outline: none;
  }

  @media (min-width: 640px) {
    .card {
      height: 240px;
    }
  }

  .card__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.2) 45%, transparent 100%);
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.6s ${EASE};
  }

  .card__badges {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    z-index: 4;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
    pointer-events: none;
    transition: opacity 0.6s ${EASE};
  }

  .card__surface {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 14px 16px;
    z-index: 2;
    transition: opacity 0.6s ${EASE};
  }

  .card__surface-title {
    margin: 0 0 8px;
    font-size: 1.05rem;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    font-family: 'Playfair Display', serif;
  }

  @media (min-width: 640px) {
    .card__surface-title {
      font-size: 1.15rem;
    }
  }

  .card__prices {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 8px;
  }

  .card__price-old {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: line-through;
  }

  .card__price-new {
    font-size: 1.35rem;
    font-weight: 700;
    color: #fff;
  }

  @media (min-width: 640px) {
    .card__price-new {
      font-size: 1.5rem;
    }
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    z-index: 5;
    transition: all 0.6s ${EASE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    pointer-events: none;
    overflow-y: auto;
  }

  .card__content-title {
    margin: 0;
    font-size: 1.1rem;
    color: #0a1f3d;
    font-weight: 700;
    line-height: 1.25;
    font-family: 'Playfair Display', serif;
  }

  @media (min-width: 640px) {
    .card__content-title {
      font-size: 1.2rem;
    }
  }

  .card__content-desc {
    margin: 0;
    font-size: 0.8rem;
    color: #64748b;
    line-height: 1.45;
    font-family: 'Inter', system-ui, sans-serif;
    flex: 1;
    min-height: 0;
  }

  .card:hover,
  .card:focus-within {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card:hover .card__content,
  .card:focus-within .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
    pointer-events: auto;
  }

  .card:hover .card__surface,
  .card:focus-within .card__surface,
  .card:hover .card__badges,
  .card:focus-within .card__badges,
  .card:hover .card__gradient,
  .card:focus-within .card__gradient {
    opacity: 0;
  }
`;

const BadgeSale = styled.span`
  display: inline-flex;
  max-width: 58%;
  align-items: center;
  gap: 4px;
  border-radius: 9999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(to right, #e85d4a, #f7941d);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 640px) {
    font-size: 13px;
    padding: 6px 14px;
    max-width: none;
  }
`;

const BadgeDiscount = styled.span`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 6px 10px;
  color: #fff;
  background: #4caf50;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  font-size: 11px;
  font-weight: 700;

  @media (min-width: 640px) {
    padding: 8px 12px;
    font-size: 13px;
  }

  .pct {
    font-size: 1.1em;
    line-height: 1.1;
  }

  .off {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 2px;
  }
`;

export interface DealTiltOverlayCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  label: string;
}

export const DealTiltOverlayCard: React.FC<DealTiltOverlayCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  originalPrice,
  salePrice,
  discount,
  label,
}) => {
  return (
    <StyledWrapper>
      <div
        className="card"
        tabIndex={0}
        role="article"
        aria-label={`${title} — hover or focus for details`}
      >
        <img
          className="card__image"
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80';
          }}
        />
        <div className="card__gradient" aria-hidden />
        <div className="card__badges" aria-hidden>
          <BadgeSale>
            <Tag size={14} aria-hidden />
            {label}
          </BadgeSale>
          <BadgeDiscount>
            <TrendingDown size={16} aria-hidden />
            <span className="pct">{discount}%</span>
            <span className="off">OFF</span>
          </BadgeDiscount>
        </div>
        <div className="card__surface">
          <h3 className="card__surface-title">{title}</h3>
          <div className="card__prices">
            <span className="card__price-old">AED {originalPrice.toLocaleString()}</span>
            <span className="card__price-new">AED {salePrice.toLocaleString()}</span>
          </div>
        </div>
        <div className="card__content">
          <p className="card__content-title">{title}</p>
          <p className="card__content-desc">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};
