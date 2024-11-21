import FaqAside from "../FaqAside/index";
import AiLabArticle from "../AiLabArticle/index";
import { SectionContent } from "./FaqLayoutStyles";

function FaqLayout() {
  return (
    <SectionContent>
      <AiLabArticle />
      <FaqAside />
    </SectionContent>
  );
}

export default FaqLayout;
