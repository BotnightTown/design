import Button from "../ui/Button";
import H2 from "../ui/CustomTags/H2";
import P from "../ui/CustomTags/P";

export default function ResultsSection(){
  return(
    <section className="w-full h-max text-white p-5 xl:px-40 xl:py-20 flex flex-col items-center gap-5 md:gap-10 lg:gap-20">
      <H2>After Working With Us,<br /> Clients See the Difference Immediately…</H2>
      <div className="w-full h-max flex flex-row justify-center lg:justify-between gap-10 lg:px-20">
        <div className="w-38 md:w-55 lg:w-85 flex flex-col gap-2 lg:gap-7.5">
          <H2>+100%</H2>
          <P className="text-(--text-body)">We design for performance, not aesthetics.</P>
        </div>
        <div className="w-38 md:w-55 lg:w-85 flex flex-col gap-2 lg:gap-7.5">
          <H2>+ 360°</H2>
          <P className="text-(--text-body)">A holistic system, not isolated screens.</P>
        </div>
      </div>
      <div className="w-max flex flex-col gap-2 lg:gap-7.5">
        <H2>+ Research-Backed Decisions</H2>
        <P className="text-(--text-body)">Every project starts with data, insights, and strategic analysis</P>
      </div>
      <Button title={"Contact Us"} />
    </section>
  )
}