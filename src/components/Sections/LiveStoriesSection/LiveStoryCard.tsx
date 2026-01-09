import H3 from "@/components/ui/CustomTags/H3";

export default function LiveStoryCard(){
  return(
    <div className="flex-shrink-0 w-87.5 h-100 rounded-[10px] p-5 bg-(--second-ground) text-white flex flex-col gap-10">
      <div className="w-full h-max flex flex-col items-start gap-2">
        <H3>Client Name</H3>
        <p className="font-open-sans text-[18px] text-center text-[#A29C9C]">
          position of the client
        </p>
      </div>
      <p className=" h-fullfont-open-sans text-[18px] text-(--text-body)">
        text opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext opisanie text opisantext opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext 
      </p>
      <button className="font-main font-semibold text-[18px] text-[#55CE9C] cursor-pointer">see full comment</button>
    </div>
  )
}