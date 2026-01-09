import H2 from "@/components/ui/CustomTags/H2";
import Card from "./Card";
import NumberCard from "./NumberCard";

export default function ProcessSection() {
  return (
    <section className="px-40 py-20 flex flex-col gap-20 text-white">
      <H2>Our Design Process</H2>
      <div className="relative w-full h-max flex flex-col items-center gap-40 ">
        <div className="w-max flex flex-row gap-30 pl-30">
          <Card
            title="Discovery & Research"
            text="We define business goals, target audience, positioning, and product structure."
          >
            <NumberCard number={1} isOnTop={false}/>
          </Card>
          
          <Card
            title="UI Design & Visual System"
            text="Unique style, polished interfaces, typography, components, animations, and responsive design."
          >
            <NumberCard number={3} isOnTop={false}/>
          </Card>
        </div>
        <div className="w-max flex flex-row gap-30 pr-30">
          <Card
            title="UX Structure & Prototyping"
            text="User flows, page logic, behavior scenarios, and high-fidelity wireframes."
          >
            <NumberCard number={2} isOnTop={true}/>
          </Card>
          <Card
            title="Delivery & Support"
            text="Full handoff, design documentation, and implementation support."
          >
            <NumberCard number={4} isOnTop={true}/>
          </Card>
        </div>
      </div>

    </section>
  );
}
