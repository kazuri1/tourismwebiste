import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Carousel.css";
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
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const recalcPages = () => {
    const vp = viewportRef.current;
    if (!vp) return;
    const pages = Math.max(1, Math.ceil(vp.scrollWidth / vp.clientWidth));
    setTotalPages(pages);
    const page = Math.round(vp.scrollLeft / vp.clientWidth);
    setCurrentPage(page);
  };

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const onScroll = () => {
      const page = Math.round(vp.scrollLeft / vp.clientWidth);
      setCurrentPage(page);
    };

    vp.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalcPages);
    recalcPages();

    return () => {
      vp.removeEventListener("scroll", onScroll as EventListener);
      window.removeEventListener("resize", recalcPages);
    };
  }, []);

  const scrollByPage = (dir: 1 | -1) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const delta = dir * vp.clientWidth;
    vp.scrollBy({ left: delta, behavior: "smooth" });
  };

  const goToPage = (pageIndex: number) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const clamped = Math.max(0, Math.min(totalPages - 1, pageIndex));
    vp.scrollTo({ left: clamped * vp.clientWidth, behavior: "smooth" });
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

        <div className="carousel-controls">
          <button
            className="carousel-btn prev-btn"
            onClick={() => scrollByPage(-1)}
            aria-label="Previous"
            disabled={currentPage <= 0}
          >
            ‹
          </button>
          <button
            className="carousel-btn next-btn"
            onClick={() => scrollByPage(1)}
            aria-label="Next"
            disabled={currentPage >= totalPages - 1}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
