import H3 from "@/components/ui/CustomTags/H3";
import { useModal } from "@/context/ModalContext";

interface LiveStoryCardProps{
  clientName: string,
  position: string,
  liveStory: string
}

export default function LiveStoryCard({ clientName, position, liveStory }: LiveStoryCardProps){
  const { open } = useModal();

  return(
    <div className="shrink-0 w-43 lg:w-87.5 h-50 lg:h-100 rounded-[10px] p-5 bg-(--second-ground) text-white flex flex-col gap-2 lg:gap-10">
      <div className="w-full h-max flex flex-col items-start gap-2">
        <H3>{clientName}</H3>
        <p className="font-open-sans text-[12px] lg:text-[18px] text-center text-[#A29C9C]">
          {position}
        </p>
      </div>
      <p className="h-full font-open-sans text-[12px] lg:text-[18px] text-(--text-body) overflow-hidden
    mask-[linear-gradient(to_bottom,black_70%,transparent)]
    [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
        {liveStory} 
      </p>
      <button 
        className="font-main font-semibold text-[12px] lg:text-[18px] text-[#55CE9C] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          open("liveStory", {
            clientName,
            position,
            liveStory,
          });
        }}
      >
        see full comment
      </button>
    </div>
  )
}