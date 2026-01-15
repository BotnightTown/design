import Button from "./ui/Button";
import HeaderLink from "./ui/HeaderLink";

export default function Header(){
  return(
    <header className="w-full h-max p-4 lg:py-10 text-white bg-(--main-ground) flex flex-row justify-center items-center gap-5.5 md:gap-20 xl:gap-40">
      <div className="w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-25 bg-[#DBDBDB]">
      </div>
      <div className="flex flex-row gap-5.5 md:gap-15 lg:gap-20">
        <HeaderLink title="Services" href="services"/>
        <HeaderLink title="Work" href="work"/>
        <HeaderLink title="Pricing" href="pricing"/>
        <HeaderLink title="FAQ" href="FAQ"/>
      </div>
      <div className="w-max h-max hidden lg:block">
        <Button title="Contact Us"/>
      </div>
    </header>
  )
}