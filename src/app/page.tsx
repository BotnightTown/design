import ChangeSection from "@/components/Sections/ChangeSection/ChangeSection";
import EndingSection from "@/components/Sections/EndingSection";
import LiveStoriesSection from "@/components/Sections/LiveStoriesSection/LiveStoriesSection";
import ProcessSection from "@/components/Sections/ProcessSection/ProcessSection";
import QuestionSection from "@/components/Sections/QuestionSection/QuestionSection";
import ReasonSection from "@/components/Sections/ReasonSection/ReasonSection";
import ResultsSection from "@/components/Sections/ResultsSection";
import TariffsSection from "@/components/Sections/TariffsSection/TariffsSection";
import TitleSection from "@/components/Sections/TitleSection";

export default function Home() {
  return (
    <div className="bg-(--main-ground)">
      <TitleSection />
      <ReasonSection />
      <ChangeSection />
      <ProcessSection />
      <ResultsSection />
      <TariffsSection />
      <LiveStoriesSection />
      <QuestionSection />
      <EndingSection />
    </div>
  );
}
