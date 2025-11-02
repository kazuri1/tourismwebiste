"use client";
import React, { useRef, useState, useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
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
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const checkScrollPosition = () => {
    if (viewportRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = viewportRef.current;
      const isAtStart = scrollLeft <= 10;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      setShowLeftArrow(!isAtStart);
      setShowRightArrow(!isAtEnd);
    }
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      checkScrollPosition();
      viewport.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        viewport.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, [items]);

  const scrollRight = () => {
    if (viewportRef.current) {
      const scrollAmount = viewportRef.current.clientWidth * 0.8;
      viewportRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (viewportRef.current) {
      const scrollAmount = viewportRef.current.clientWidth * 0.8;
      viewportRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

        {showLeftArrow && (
          <button
            className="carousel-arrow-left"
            onClick={scrollLeft}
            aria-label="Scroll left"
            type="button"
          >
            <ChevronLeftIcon />
          </button>
        )}

        {showRightArrow && (
          <button
            className="carousel-arrow-right"
            onClick={scrollRight}
            aria-label="Scroll right"
            type="button"
          >
            <ChevronRightIcon />
          </button>
        )}
      </div>
    </div>
  );
};
