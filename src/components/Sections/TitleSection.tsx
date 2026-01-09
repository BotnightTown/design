import Button from "../ui/Button";
import H1 from "../ui/CustomTags/H1";
import H3 from "../ui/CustomTags/H3";
import P from "../ui/CustomTags/P";

export default function TitleSection(){
  return(
    <section className="w-full h-max text-white px-40 py-20 flex flex-col items-center gap-20">
      <div className="flex flex-col gap-10 items-center">
        <H1 className="w-240">Design that elevates your product and drives real sales</H1>
        <P className="w-175">We create high-conversion interfaces, clear UX flows, and a visual identity that sets your business apart.</P>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <Button title="Get Design"/>
        <div className="m-5 relative">
          <P className="w-max absolute bg-(--main-ground) px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">take your choice</P>
          <div className="border border-white w-100 top-1/2"/>
        </div>
      </div>
    </section>
  )
}