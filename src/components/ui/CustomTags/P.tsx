import CustomTagType from "@/types/CustomTagType";

export default function P({ children, className = "" }: CustomTagType) {
  return(
    <p
      className={`font-open-sans font-normal text-[12px] md:text-[18px] lg:text-[24px] text-center ${className}`}
    >
      {children}
    </p>
  )
}