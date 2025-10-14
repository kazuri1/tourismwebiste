"use client";
import React, { useRef } from "react";
// Styles now imported globally from app/layout.tsx in Next.js
import { ImageTitleCard } from "./atoms/ImageTitleCard";

export interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  category?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  onItemClick?: (item: CarouselItem) => void;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  onItemClick,
  className,
}) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  // Note: simple scroll-snap carousel without controls

  return (
    <div className={`carousel-container ${className || ""}`}>
      <div className="carousel-wrapper">
        <div ref={viewportRef} className="carousel-viewport">
          <div className="carousel-track">
            {items.map((item) => (
              <div key={item.id} className="carousel-item">
                <ImageTitleCard
                  imageUrl={item.imageUrl}
                  title={item.title}
                  category={item.category}
                  onClick={() => onItemClick?.(item)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls removed per request */}
      </div>
    </div>
  );
};
