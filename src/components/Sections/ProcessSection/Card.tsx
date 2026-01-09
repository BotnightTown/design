import { ReactNode } from "react";
import H3 from "../../ui/CustomTags/H3";

export default function Card({
  title,
  text,
  children
}: {
  title: string;
  text: string;
  children: ReactNode
}) {
  return (
    <div className="group w-126 h-57.5 p-10 relative">
      <div
        className="
          absolute inset-0
          bg-(--second-ground) rounded-[10px]
          transition-all ease-out duration-300
          group-hover:shadow-[0_4px_22px_0_rgba(85,206,156,0.05)]
          pointer-events-none
        "
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-5 bg-none">
        <H3 className="mb-4 text-xl font-semibold text-white">
          {title}
        </H3>
        <p className="font-open-sans text-[18px] text-center text-(--text-body)">
          {text}
        </p>
      </div>

      {children}
    </div>
  );
}
