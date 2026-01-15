import Button from "../ui/Button";
import H1 from "../ui/CustomTags/H1";
import P from "../ui/CustomTags/P";

export default function TitleSection(){
  return(
    <section className="w-full h-max text-white p-5 lg:px-40 lg:py-20 flex flex-col items-center gap-5 md:gap-10 lg:gap-20">
      <div className="flex flex-col gap-2 lg:gap-10 items-center">
        <H1 className="w-full lg:w-250 max-w-100 md:max-w-150 lg:max-w-none">Design that elevates your product and drives real sales</H1>
        <P className="w-full lg:w-175 max-w-100 md:max-w-150 lg:max-w-none">We create high-conversion interfaces, clear UX flows, and a visual identity that sets your business apart.</P>
      </div>
      <div className="flex flex-col gap-2 lg:gap-10 items-center">
        <Button title="Get Design"/>
        <div className="m-5 relative">
          <P className="w-max absolute bg-(--main-ground) px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">take your choice</P>
          <div className="border border-white w-75 md:w-90 lg:w-100 top-1/2"/>
        </div>
      </div>
    </section>
  )
}