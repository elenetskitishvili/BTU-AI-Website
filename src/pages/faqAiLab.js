import PageTitleSection from "../components/ReusableComponents/PageTitleSection";
import SectionHeading from "../components/ReusableComponents/SectionHeading";
import FaqAside from "../components/FaqComponents/FaqAside";
import AiLabArticle from "../components/FaqComponents/AiLabArticle/index";
import { SectionContent } from "../components/FaqComponents/FaqLayout/FaqLayoutStyles";

export default function FaqAiLab() {
  return (
    <main>
      <PageTitleSection title="AI ლაბორატორიები" />
      <SectionHeading heading="AI ლაბორატორიები" faq="FAQ" />
      <SectionContent>
        <AiLabArticle />
        <FaqAside />
      </SectionContent>
    </main>
  );
}
