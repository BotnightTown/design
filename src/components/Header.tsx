import Button from "./ui/Button";
import HeaderLink from "./ui/HeaderLink";

export default function Header(){
  return(
    <header className="w-full h-max py-10 text-white bg-(--main-ground) flex flex-row justify-center items-center gap-40">
      <div className="w-32 h-25 bg-[#DBDBDB]">
      </div>
      <div className="flex flex-row gap-20">
        <HeaderLink title="Services"/>
        <HeaderLink title="Work"/>
        <HeaderLink title="Pricing"/>
        <HeaderLink title="FAQ"/>
      </div>
      <Button title="Contact Us"/>
    </header>
  )
}