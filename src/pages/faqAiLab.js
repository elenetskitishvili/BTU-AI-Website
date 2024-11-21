import PageTitleSection from "../components/ReusableComponents/PageTitleSection";
import SectionHeading from "../components/ReusableComponents/SectionHeading";
import FaqLayout from "../components/FaqComponents/FaqLayout";

export default function FaqAiLab() {
  return (
    <main>
      <PageTitleSection title="AI ლაბორატორიები" />
      <SectionHeading heading="AI კვლევები" faq="FAQ" />
      <FaqLayout />
    </main>
  );
}
