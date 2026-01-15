'use client'
import { useRef, useEffect } from "react";
import LiveStoryCard from "./LiveStoryCard";
import liveStories from "@/data/liveStories.json";
import H2 from "@/components/ui/CustomTags/H2";

interface LiveStory {
  clientName: string;
  position: string;
  liveStory: string;
};

export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 1;
    let rafId: number;

    const scroll = () => {
      if (!container) return;

      if (!isPausedRef.current) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += speed;
        }
      }

      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const allItems: LiveStory[] = [
    ...liveStories,
    ...liveStories,
    ...liveStories,
  ];

  const toggleScroll = () => {
    isPausedRef.current = !isPausedRef.current;
  };
  
  return (
    <div className="w-full h-max text-white flex flex-col gap-5 md:gap-10 lg:gap-20">
      <H2>Live stories of satisfied customers</H2>
      <div
        ref={containerRef}
        onClick={toggleScroll}
        className="w-full flex flex-row gap-5 lg:gap-10 overflow-x-scroll hide-scrollbar 
      
        mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
      >
        {allItems.map((item, index) => (
          <LiveStoryCard key={index} clientName={item.clientName} position={item.position} liveStory={item.liveStory}/>
        ))}
      </div>
    </div>
  );
}
