import Image from "next/image"
import H2 from "../ui/CustomTags/H2"
import P from "../ui/CustomTags/P"
import Button from "../ui/Button"

export default function EndingSection(){
  return(
    <section className="w-full h-max text-white p-5 xl:px-40 xl:py-20">
      <div className="w-full h-max p-10 lg:p-18 bg-(--second-ground) rounded-[10px] flex flex-col items-center xl:flex-row gap-5 lg:gap-10">
        <div className="w-full max-w-100 lg:max-w-none lg:w-151 lg:h-96 flex-1 lg:block">
          <Image
            width={650}
            height={400}
            src={"/cutted.png"}
            alt="image"
            className="object-cover" 
          />
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-start gap-5 lg:gap-10">
          <div className="flex flex-col gap-5">
            <H2 className="font-semibold text-start">Ready to enhance your product with powerful design?</H2>
            <P className="text-start text-(--text-body)">we will choose a suitable work format and offer a solution that will really give results.</P>
          </div>
          <Button title="Get Design"/>
        </div>
      </div>
    </section>
  )
}