import H1 from "../../ui/CustomTags/H1"

interface NumberProps{
  number: number
  isOnTop: boolean
}

export default function NumberCard({number, isOnTop}: NumberProps){
  return(
    <div className={`absolute z-19 w-20 h-20 rounded-full border-2 border-white flex items-center justify-center
      ${isOnTop ? "top-0 left-15 -translate-y-2/3" : "bottom-0 left-1/2 -translate-x-1/2 translate-y-2/5"}
    `}>
      <H1 className="z-20 text-white">{number}</H1>
    </div>
  )
}