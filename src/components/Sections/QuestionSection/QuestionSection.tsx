import H2 from "@/components/ui/CustomTags/H2";
import AccordionItem from "./AccordionItem";

export default function QuestionSection(){
  return(
    <section className="w-full h-max text-white px-40 py-20 flex flex-col items-center gap-20">
      <H2>Frequently asked questions</H2>
      <div className="flex flex-col gap-10">
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
      </div>
    </section>
  )
}