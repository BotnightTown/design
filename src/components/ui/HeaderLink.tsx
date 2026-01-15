export default function HeaderLink({title, href}: {title: string, href: string}){
  return(
    <a href={`#${href}`} className="text-white font-main text-base md:text-lg lg:text-2xl hover:text-[#55CE9C] active:text-[#438A6C] cursor-pointer transition-all">
      {title}
    </a>
  )
}