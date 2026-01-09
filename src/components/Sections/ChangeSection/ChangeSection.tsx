import H2 from "../../ui/CustomTags/H2";
import Carousel from "./Carousel";

export default function ChangeSection(){
  return(
    <section className="w-full h-max text-white px-40 py-20 flex flex-col items-center gap-20">
      <H2>How design has changed our clients' websites</H2>
      <div className="w-325 h-162 rounded-3xl bg-(--second-ground) p-20">
        <Carousel />
      </div>
    </section>
  )
}