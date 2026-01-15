import HeaderLink from "./ui/HeaderLink";

export default function Footer(){
  return(
    <footer className="w-full h-max p-5 lg:py-10 text-white bg-(--second-ground) flex flex-col xl:flex-row justify-center items-center gap-5 md:gap-10 xl:gap-40">
      <div className="flex flex-row justify-center items-center gap-5 lg:gap-40">
        <div className="w-14 h-14 lg:w-32 lg:h-25 bg-[#DBDBDB]">
        </div>
        <div className="flex flex-row gap-5 lg:gap-20">
          <HeaderLink title="Services" href="services"/>
          <HeaderLink title="Work" href="work"/>
          <HeaderLink title="Pricing" href="pricing"/>
          <HeaderLink title="FAQ" href="FAQ"/>
        </div>
      </div>
      <div className="font-main grid grid-cols-2 xl:grid-cols-1 gap-1 text-[24px] text-center">
        <h2 className="font-semibold text-center text-[22px] lg:text-[48px] top-row order-1 lg:order-1">0800 33 29 54</h2>
        <p className="text-base lg:text-[24px] bottom-row order-3 lg:order-2">work graphic</p>
        <p className="font-semibold text-[22px] lg:text-[24px] bottom-row order-2 lg:order-3">write ro us</p>
        <p className="text-base lg:text-[24px] bottom-row order-4 lg:order-4">cheto.tam@gmail.com</p>
      </div>
    </footer>
  )
}