import CustomTagType from "@/types/CustomTagType";

export default function H3({ children, className = "" }: CustomTagType) {
  return(
    <h3
      className={`font-main font-semibold text-[24px] text-center ${className}`}
    >
      {children}
    </h3>
  )
}