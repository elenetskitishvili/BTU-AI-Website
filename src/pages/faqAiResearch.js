import PageTitleSection from "../components/ReusableComponents/PageTitleSection";
import SectionHeading from "../components/ReusableComponents/SectionHeading";
import FaqAside from "../components/FaqComponents/FaqAside";
import AiResearchArticle from "../components/FaqComponents/AIResearchArticle";
import { SectionContent } from "../components/FaqComponents/FaqLayout/FaqLayoutStyles";

function faqAiResearch() {
  return (
    <main>
      <PageTitleSection title="AI კვლევები" />
      <SectionHeading heading="AI კვლევები" faq="FAQ" />
      <SectionContent>
        <AiResearchArticle />
        <FaqAside />
      </SectionContent>
    </main>
  );
}

export default faqAiResearch;
