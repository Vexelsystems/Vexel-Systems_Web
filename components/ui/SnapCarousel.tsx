"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SnapCarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function SnapCarousel({ children, className = "", scrollContainerClassName = "" }: { children: React.ReactNode, className?: string, scrollContainerClassName?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const items = React.Children.toArray(children);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;

      // Let's try a logic that works for partial views (like 85vw)
      // We can find which child is closest to the center.
      
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;
      
      const containerCenter = scrollLeft + width / 2;
      
      Array.from(scrollRef.current.children).forEach((child, i) => {
        const childEl = child as HTMLElement;
        const childCenter = childEl.offsetLeft + childEl.offsetWidth / 2;
        const distance = Math.abs(childCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });
      
      setActiveIndex(closestIndex);
    }
  };

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 gap-4 ${scrollContainerClassName}`}
      >
        {children}
      </div>

      {/* Dot Indicators - Only show on mobile (hidden on md) because desktop usually grids */}
      <div className="flex justify-center gap-2 md:hidden">
        {items.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              if (scrollRef.current) {
                const child = scrollRef.current.children[idx] as HTMLElement;
                scrollRef.current.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" }); // 24 is px-6 padding roughly
              }
            }}
            initial={false}
            animate={{
              width: activeIndex === idx ? 24 : 8,
              backgroundColor: activeIndex === idx ? "#0ea5e9" : "#e5e7eb", // primary vs gray-200
              opacity: activeIndex === idx ? 1 : 0.5
            }}
            className="h-2 rounded-full transition-all duration-300"
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
