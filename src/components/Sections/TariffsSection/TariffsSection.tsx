import H2 from "@/components/ui/CustomTags/H2";
import TariffCard from "./TariffCard";

export default function TariffsSection(){
  return(
    <section className="w-full h-max text-white px-40 py-20 flex flex-col items-center gap-20">
      <H2>Our tariffs</H2>
      <div className="w-max flex flex-row gap-10">
        <TariffCard title="Start">
          <p className="font-open-sans text-[18px] text-center text-(--text-body)">
            text opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext opisanie text opisan
          </p>
          <p className="font-open-sans text-[18px] text-center text-(--text-body)">
            text opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext opisanie text opisan
          </p>
        </TariffCard>
        <TariffCard title="Start">
          <p className="font-open-sans text-[18px] text-center text-(--text-body)">
            text opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext opisanie text opisan
          </p>
          <p className="font-open-sans text-[18px] text-center text-(--text-body)">
            text opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext opisanie text opisan
          </p>
        </TariffCard>
        <TariffCard title="Start">
          <p className="font-open-sans text-[18px] text-center text-(--text-body)">
            text opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext opisanie text opisan
          </p>
          <p className="font-open-sans text-[18px] text-center text-(--text-body)">
            text opisanie text opisanietext opisanie text opisanietext opisanie text opisanie text opisanietext opisanie text opisan
          </p>
        </TariffCard>
      </div>
    </section>
  )
}