import CustomTagType from "@/types/CustomTagType";

export default function P({ children, className = "" }: CustomTagType) {
  return(
    <p
      className={`font-open-sans font-normal text-[24px] text-center ${className}`}
    >
      {children}
    </p>
  )
}