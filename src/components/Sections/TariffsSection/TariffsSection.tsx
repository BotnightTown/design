import H2 from "@/components/ui/CustomTags/H2";
import TariffCard from "./TariffCard";

export default function TariffsSection(){
  return(
    <section id="pricing" className="w-full h-max text-white p-5 xl:px-40 xl:py-20 flex flex-col items-center gap-5 md:gap-10 lg:gap-20">
      <H2>Our tariffs</H2>
      <div className="w-full lg:w-max flex flex-row gap-10 overflow-x-scroll hide-scrollbar">
      <TariffCard
        title="Starter"
        price="$1,999 / month"
        subtitle="Perfect for early-stage startups and MVPs"
        description="Ideal for quick launches and initial redesigns."
        features={[
          "Part-time senior UX/UI designer (~50 hrs/month)",
          "MVP design from scratch (10–15 screens)",
          "Basic UX research & user flows",
          "Wireframes + high-fidelity UI in Figma",
          "1 major revision round per task",
          "Weekly Slack check-ins",
          "Responsive web & mobile layouts",
          "Basic component library",
        ]}
      />

      <TariffCard
        title="Growth"
        badge="Most Popular"
        price="$4,999 / month"
        subtitle="Best choice for scaling SaaS teams"
        description="Ideal for product-led growth and frequent releases."
        features={[
          "Full-time senior designer + junior support",
          "Unlimited design requests & revisions",
          "Deep UX research & usability testing",
          "Advanced design systems",
          "Dashboards & complex flows",
          "Motion & micro-interactions",
          "CRO-focused UI optimizations",
          "24–48h priority turnaround",
          "Monthly roadmap & reports",
        ]}
        highlighted
      />

      <TariffCard
        title="Enterprise"
        price="Custom pricing"
        subtitle="From $12,000 / month or $60,000+ per project"
        description="For complex B2B and enterprise-grade products."
        features={[
          "Dedicated design team + PM",
          "160+ hours/month or fixed scope",
          "End-to-end design process",
          "Competitive & heuristic audits",
          "Enterprise design systems",
          "Advanced prototyping & testing",
          "Dev collaboration (tokens, Storybook)",
          "CRO, A/B testing & SEO landings",
          "Weekly strategy calls",
        ]}
      />

      </div>
    </section>
  )
}