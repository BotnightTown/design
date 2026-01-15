import H3 from "@/components/ui/CustomTags/H3";
interface TariffCardProps {
  title: string;
  badge?: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}


export default function TariffCard({
  title,
  badge,
  price,
  subtitle,
  description,
  features,
  highlighted = false,
}: TariffCardProps) {
  return (
    <div
      className={`
        w-58 md:w-80 xl:w-100
        h-max md:h-max xl:h-130
        bg-(--card-background)
        rounded-[10px]
        flex flex-col
        p-5 xl:p-10
        gap-3 xl:gap-5
        shrink-0
        transition-all duration-300
        ${highlighted ? "border border-[#55CE9C]" : ""}
        hover:shadow-[0_4px_22px_0_rgba(85,206,156,0.05)]
      `}
    >
      <div className="flex flex-col gap-2 xl:gap-4">
        <div className="flex items-center justify-between">
          <H3>{title}</H3>
          {badge && (
            <span className="text-xs text-[#55CE9C] uppercase tracking-wide">
              {badge}
            </span>
          )}
        </div>

        <p className="text-2xl font-semibold">{price}</p>
        <p className="text-sm text-(--text-body)">{subtitle}</p>
      </div>

      <p className="text-sm text-(--text-body)">
        {description}
      </p>

      <div className="w-full border-t border-[#434343]"/>

      <ul className="flex flex-col gap-2 text-xs md:text-sm text-(--text-body)">
        {features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}
