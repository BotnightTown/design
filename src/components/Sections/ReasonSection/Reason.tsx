import { ReactNode } from "react";
import H3 from "../../ui/CustomTags/H3";
import P from "../../ui/CustomTags/P";

interface ReasonType {
  number: string,
  title: string,
  children: ReactNode
}

export default function Reason({number, title, children}: ReasonType){
  return(
    <div className="w-300 flex flex-row justify-between">
      <div className="flex flex-row items-center gap-10">
        <div className="relative">
          <svg width="78" height="73" viewBox="0 0 78 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18.2082C0 11.5318 5.05727 5.94091 11.7002 5.27335L63.5072 0.0671959C72.2038 -0.806734 79.2677 6.97844 77.5551 15.5494L68.3018 61.8567C67.0874 67.9342 61.7515 72.3093 55.5538 72.3093H13C5.8203 72.3093 0 66.489 0 59.3093V18.2082Z" fill="#111114"/>
          </svg>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-main font-semibold text-[24px] text-[#55CE9C]">{number}.</p>
        </div>
        <H3>{title}</H3>
      </div>
      {children}
    </div>
  )
}