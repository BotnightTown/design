'use client'

import { useRef, useState, useEffect } from "react";
import CarouselCard from "./CarouselCard";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [0, 1, 2, 3, 4];

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.children[index] as HTMLElement;
    if (!card) return;

    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const scrollPos = cardCenter - containerCenter;

    container.scrollTo({
      left: scrollPos,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const next = () => {
    const newIndex = (activeIndex + 1) % cards.length;
    scrollToIndex(newIndex);
  };

  const prev = () => {
    const newIndex = (activeIndex - 1 + cards.length) % cards.length;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const centers = Array.from(container.children).map((child) => {
        const el = child as HTMLElement;
        return el.offsetLeft + el.offsetWidth / 2;
      });
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      const closestIndex = centers.reduce((prev, curr, idx) =>
        Math.abs(curr - containerCenter) < Math.abs(centers[prev] - containerCenter) ? idx : prev
      , 0);
      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-max relative flex flex-col items-center gap-5">
      <div
        className="w-full flex gap-5 lg:gap-10 overflow-x-scroll hide-scrollbar scroll-smooth px-10"
        ref={scrollRef}
      >
        {cards.map((_, i) => (
          <CarouselCard key={i} />
        ))}
      </div>

      <div className="w-max grid grid-cols-3 justify-items-center items-center">
        <button 
          className="w-4 lg:w-12.5 h-4 lg:h-12.5 border lg:border-4 border-white rounded-full relative cursor-pointer"
          onClick={prev}
        >
          <IoChevronBackSharp 
            className="text-sm lg:text-4xl absolute top-1/2 left-1.75 lg:left-5 -translate-x-1/2 -translate-y-1/2"
          />
        </button>
        <div className="w-max flex justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 lg:w-6 h-2.5 lg:h-6 rounded-full cursor-pointer ${
                i === activeIndex ? "bg-[#55CE9C]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button 
          className="w-4 lg:w-12.5 h-4 lg:h-12.5 border lg:border-4 border-white rounded-full relative cursor-pointer"
          onClick={next}
        >
          <IoChevronForwardSharp 
            className="text-sm lg:text-4xl absolute top-1/2 left-1.75 lg:left-6 -translate-x-1/2 -translate-y-1/2"
          />
        </button>
      </div>

    </div>
  );
}
