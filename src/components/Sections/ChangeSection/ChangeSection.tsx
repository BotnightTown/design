import H2 from "../../ui/CustomTags/H2";
import Carousel from "./Carousel";

export default function ChangeSection(){
  return(
    <section id="work" className="w-full h-max text-white p-5 xl:px-40 xl:py-20 flex flex-col items-center gap-5 md:gap-10 lg:gap-20">
      <H2>How design has changed our clients' websites</H2>
      <div className="w-full md:w-180 lg:w-250 xl:w-315 h-max lg:h-162 p-5 lg:p-20 rounded-[10px] lg:rounded-3xl bg-(--second-ground)">
        <Carousel />
      </div>
    </section>
  )
}