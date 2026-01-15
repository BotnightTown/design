import H2 from "@/components/ui/CustomTags/H2";
import AccordionItem from "./AccordionItem";
import questions from '@/data/questions.json'

export default function QuestionSection(){

  return(
    <section id="FAQ" className="w-full h-max text-white p-5 xl:px-40 xl:py-20 flex flex-col items-center gap-5 md:gap-10 lg:gap-20">
      <H2>Frequently asked questions</H2>
      <div className="flex flex-col gap-5 lg:gap-10">
        {
          questions.map((item, index) => (
            <AccordionItem question={item.question} answer={item.answer} key={index}/>
          ))
        }
      </div>
    </section>
  )
}