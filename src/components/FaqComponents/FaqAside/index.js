import {
  FaqAsideWrapper,
  FaqAsideCard,
  FaqAsideCardImage,
  FaqAsideCardLink,
} from "./FaqAsideStyles";

import img1 from "../../../assets/images/faq-aside-1.jfif";
import img2 from "../../../assets/images/faq-aside-2.png";
import img3 from "../../../assets/images/faq-aside-3.jfif";

export default function FaqAside() {
  return (
    <FaqAsideWrapper>
      <FaqAsideCard>
        <FaqAsideCardImage
          src={img1}
          alt="Trainings and workshops in the field of artificial intelligence"
        />
        <FaqAsideCardLink
          href="https://btu.edu.ge/treningebi-da-vorqshophebi-khelovnuri-inteleqtis-mimarthulebith/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ტრენინგები და ვორქშოფები ხელოვნური ინტელექტის მიმართულებით
        </FaqAsideCardLink>
      </FaqAsideCard>

      <FaqAsideCard>
        <FaqAsideCardImage
          src={img2}
          alt="BTU AI - Sustainability Lab Podcast Series!"
        />
        <FaqAsideCardLink
          href="https://btu.edu.ge/btu-ai-sustainability-lab-podkastebis-seria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BTU AI - Sustainability Lab პოდკასტების სერია!
        </FaqAsideCardLink>
      </FaqAsideCard>

      <FaqAsideCard>
        <FaqAsideCardImage
          src={img3}
          alt="How to Use Artificial Intelligence - Training at BTU!"
        />
        <FaqAsideCardLink
          href="https://btu.edu.ge/rogor-gamoviqheno-khelovnuri-inteleqti-ghia-treningi-qhvela-msurvelisthvis-btu-shi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          როგორ გამოვიყენო ხელოვნური ინტელექტი - ტრენინგი BTU-ში!
        </FaqAsideCardLink>
      </FaqAsideCard>
    </FaqAsideWrapper>
  );
}
