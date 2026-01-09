import H3 from "@/components/ui/CustomTags/H3";
import { ReactNode } from "react";

interface TariffCardProps{
  title: string,
  children: ReactNode
}

export default function TariffCard({title, children}: TariffCardProps){
  return(
    <div className="w-109 h-109 bg-(--second-ground) rounded-[10px] flex flex-col items-center p-10 gap-5 transition-all ease-out duration-300 hover:shadow-[0_4px_22px_0_rgba(85,206,156,0.05)]">
      <div className="flex flex-col gap-5">
        <div className="w-28 h-25 bg-[#626262] rounded-2xl"/>
        <H3>Start</H3>
      </div>
      <div className="flex flex-col gap-5">
        {children}
      </div>
    </div>
  )
}