import HeaderLink from "./ui/HeaderLink";

export default function Footer(){
  return(
    <footer className="w-full h-max py-10 text-white bg-(--second-ground) flex flex-row justify-center items-center gap-40">
      <div className="w-32 h-25 bg-[#DBDBDB]">
      </div>
      <div className="flex flex-row gap-20">
        <HeaderLink title="Services"/>
        <HeaderLink title="Work"/>
        <HeaderLink title="Pricing"/>
        <HeaderLink title="FAQ"/>
      </div>
      <div className="font-main flex flex-col gap-1 text-[24px]">
        <h2 className="font-semibold text-center text-[48px]">0800 33 29 54</h2>
        <p>work graphic</p>
        <p className="font-semibold">write ro us</p>
        <p>cheto.tam@gmail.com</p>
      </div>
    </footer>
  )
}