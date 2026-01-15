import H2 from "../../ui/CustomTags/H2";
import Reason from "./Reason";

export default  function ReasonSection(){
  return(
    <section id="services" className="w-full h-max text-white p-5 xl:px-40 xl:py-20 flex flex-col items-center gap-5 md:gap-10 lg:gap-20">
      <H2>Why your business needs strong design</H2>
      <div className="w-full flex flex-col items-center gap-5 lg:gap-10">
        <Reason 
          number="01"
          title="Design that drives action, not decoration"
        >
          <p className="w-80 md:w-90 lg:w-105 h-max text-(--text-body) text-center lg:text-start font-open-sans text-[12px] md:text-[16px] lg:text-[18px]">
            Strong UX guides users toward the right decisions. Clear flows and intentional interfaces increase conversions and <strong>reduce friction at every step.</strong>
          </p>
        </Reason>
        <Reason
          number="02"
          title="A premium look that builds trust instantly"
        >
          <p className="w-80 md:w-90 lg:w-105 h-max text-(--text-body) text-center lg:text-start font-open-sans text-[12px] md:text-[16px] lg:text-[18px]">
            People judge your product in seconds.Modern, high-quality design elevates perception, builds credibility, and <strong>positions your business above competitors.</strong>
          </p>
        </Reason>
        <Reason
          number="03"
          title="Clear structure users understand immediately"
        >
          <p className="w-80 md:w-90 lg:w-105 h-max text-(--text-body) text-center lg:text-start font-open-sans text-[12px] md:text-[16px] lg:text-[18px]">
            Visual hierarchy and focus remove confusion.Users instantly know where to look, what matters, and <strong>how to move forward without thinking.</strong>
          </p>
        </Reason>
        <Reason
          number="04"
          title="Messaging that explains value in seconds"
        >
          <p className="w-80 md:w-90 lg:w-105 h-max text-(--text-body) text-center lg:text-start font-open-sans text-[12px] md:text-[16px] lg:text-[18px]">
            SDesign amplifies your message.Clear, story-driven layouts help users quickly understand what you offer and <strong>why it matters to them.</strong>
          </p>
        </Reason>
        <Reason
          number="05"
          title="Consistent design that scales with your business"
        >
          <p className="w-80 md:w-90 lg:w-105 h-max text-(--text-body) text-center lg:text-start font-open-sans text-[12px] md:text-[16px] lg:text-[18px]">
            A clean component system ensures consistency across all screens. This makes the product easier to grow, maintain, and  <strong>evolve without losing quality.</strong>
          </p>
        </Reason>
      </div>
    </section>
  )
}