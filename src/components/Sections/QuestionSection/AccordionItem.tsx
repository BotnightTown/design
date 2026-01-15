'use client'
import { IoChevronDown } from "react-icons/io5";
import H3 from "@/components/ui/CustomTags/H3";
import { useEffect, useRef, useState } from "react";

interface AccordionItemProps{
  question: string,
  answer: string
}

export default function AccordionItem({question, answer}: AccordionItemProps){
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
    <div className={`w-full h-max py-5 px-3.5 lg:p-12.5 rounded-[10px] bg-(--second-ground) flex flex-col`}>
      <div 
        className="w-full flex flex-row justify-between items-center cursor-pointer"
        onClick={toggleIsOpen}
      >
        <H3>{question}</H3>
        <IoChevronDown className={`text-xl lg:text-4xl duration-300 transition-all  ${isOpen ? "text-[#55CE9C] -rotate-180" : "text-white"}`}/>
      </div>  
      
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <p className="font-open-sans text-[10px] md:text-[14px] lg:text-[18px] text-[#CFCFD6] mt-5 lg:mt-10">
          {answer}
        </p>
      </div>
    </div>
  )
}