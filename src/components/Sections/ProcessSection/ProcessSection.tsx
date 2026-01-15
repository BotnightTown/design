import H2 from "@/components/ui/CustomTags/H2";
import Card from "./Card";
import NumberCard from "./NumberCard";

export default function ProcessSection() {
  return (
    <section className="p-5 xl:px-40 xl:py-20 flex flex-col gap-10 lg:gap-20 text-white">
      <H2>Our Design Process</H2>
      <div className="relative w-full h-max flex flex-row items-center justify-center gap-40 ">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-x-20 lg:gap-y-30
            xl:gap-x-20 xl:gap-y-40

            lg:[&>.top-row]:pl-15
            lg:[&>.bottom-row]:pr-15
          "
        >
          <div className="top-row order-1 lg:order-1">
            <Card
              title="Discovery & Research"
              text="We define business goals, target audience, positioning, and product structure."
            >
              <NumberCard number={1} isOnTop={false} />
            </Card>
          </div>

          <div className="bottom-row order-2 lg:order-3">
            <Card
              title="UX Structure & Prototyping"
              text="User flows, page logic, behavior scenarios, and high-fidelity wireframes."
            >
              <NumberCard number={2} isOnTop={true} />
            </Card>
          </div>

          <div className="top-row order-3 lg:order-2">
            <Card
              title="UI Design & Visual System"
              text="Unique style, polished interfaces, typography, components, animations, and responsive design."
            >
              <NumberCard number={3} isOnTop={false} />
            </Card>
          </div>

          <div className="bottom-row order-4 lg:order-4">
            <Card
              title="Delivery & Support"
              text="Full handoff, design documentation, and implementation support."
            >
              <NumberCard number={4} isOnTop={true} />
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
}
