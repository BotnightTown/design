'use client'
import { useRef, useEffect } from "react";
import CarouselCard from "../ChangeSection/CarouselCard";
import LiveStoryCard from "./LiveStoryCard";

export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 1;
    let animationFrameId: number;

    const scroll = () => {
      if (!container) return;

      // Якщо дошли до половини ширини (бо ми дублюємо елементи для циклу)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += speed;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const items = [1, 2, 3, 4, 5];
  const allItems = [...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-row gap-10 overflow-x-scroll hide-scrollbar"
    >
      {allItems.map((_, index) => (
        <LiveStoryCard key={index} />
      ))}
    </div>
  );
}
