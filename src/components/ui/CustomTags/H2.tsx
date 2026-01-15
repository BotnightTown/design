import CustomTagType from "@/types/CustomTagType";

export default function H2({ children, className = "" }: CustomTagType) {
  return (
    <h2
      className={`font-main font-bold text-center text-[18px] md:text-[28px] lg:text-[48px] ${className}`}
    >
      {children}
    </h2>
  );
}