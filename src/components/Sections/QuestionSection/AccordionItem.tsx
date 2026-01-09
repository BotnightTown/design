'use client'
import { IoChevronDown } from "react-icons/io5";
import H3 from "@/components/ui/CustomTags/H3";
import { useEffect, useRef, useState } from "react";

export default function AccordionItem(){
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");
  

  const toggleIsOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return(
    <div className={`w-full h-max p-12.5 rounded-[10px] bg-(--second-ground) flex flex-col`}>
      <div 
        className="w-full flex flex-row justify-between cursor-pointer"
        onClick={toggleIsOpen}
      >
        <H3>Can you do mobile and landing page designs?</H3>
        <IoChevronDown className={`text-4xl duration-300 transition-all  ${isOpen ? "text-[#55CE9C] -rotate-180" : "text-white"}`}/>
      </div>  
      
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <p className="font-open-sans text-[18px] text-[#CFCFD6] mt-10">
          Absolutely, our UI/UX design agency handles both web and mobile interfaces. While we don't take on landing pages as standalone projects, if we're designing your product, we'll definitely make those landing pages part of the whole experience.
        </p>
      </div>
    </div>
  )
}