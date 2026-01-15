import CustomTagType from "@/types/CustomTagType";

export default function H1({ children, className = "" }: CustomTagType) {
  return (
    <h1
      className={`font-main font-bold text-center text:text-[22px] md:text-[32px] lg:text-[64px] ${className}`}
    >
      {children}
    </h1>
  );
}