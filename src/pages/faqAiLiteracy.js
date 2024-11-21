import PageTitleSection from "../components/ReusableComponents/PageTitleSection";
import SectionHeading from "../components/ReusableComponents/SectionHeading";
import FaqAside from "../components/FaqComponents/FaqAside";
import LiteracyCards from "../components/FaqComponents/LiteracyCards";
import { SectionContent } from "../components/FaqComponents/FaqLayout/FaqLayoutStyles";

export default function FaqAiLiteracy() {
  return (
    <main>
      <PageTitleSection title="AI წიგნიერება" />
      <SectionHeading heading="AI წიგნიერება" faq="FAQ" />
      <SectionContent>
        <LiteracyCards />
        <FaqAside />
      </SectionContent>
    </main>
  );
}
