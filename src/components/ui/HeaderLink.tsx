export default function HeaderLink({title}: {title: string}){
  return(
    <button className="text-white font-main text-2xl hover:text-[#55CE9C] active:text-[#438A6C] cursor-pointer transition-all">
      {title}
    </button>
  )
}