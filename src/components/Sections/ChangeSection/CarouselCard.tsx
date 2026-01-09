import H3 from "../../ui/CustomTags/H3";

export default function CarouselCard(){
  return(
    <div className="flex flex-col items-center gap-5">
      <div className="w-165 h-89 bg-[#656565] rounded-3xl"></div>
      <H3>current view</H3>
    </div>
  )
}