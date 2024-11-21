import img1 from "../../../assets/images/ai-literacy-1.png";
import img2 from "../../../assets/images/ai-literacy-2.png";
import img3 from "../../../assets/images/ai-literacy-3.png";
import img4 from "../../../assets/images/ai-literacy-4.png";

import {
  LiteracyCardsContainer,
  LiteracyCard,
  LiteracyImage,
  LiteracyLink,
} from "./LiteracyCardsStyles";

export default function LiteracyCards() {
  return (
    <LiteracyCardsContainer>
      <LiteracyCard>
        <LiteracyImage src={img1} alt="AI მომხმარებელთა ჩართულობისთვის" />
        <LiteracyLink
          href="https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-MArketing-book-Geo-.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI მომხმარებელთა ჩართულობისთვის
        </LiteracyLink>
      </LiteracyCard>
      <LiteracyCard>
        <LiteracyImage src={img2} alt="USE OF AI IN BUSINESS" />
        <LiteracyLink
          href="https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-MArketing-book-Geo-.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          USE OF AI IN BUSINESS
        </LiteracyLink>
      </LiteracyCard>
      <LiteracyCard>
        <LiteracyImage src={img3} alt="AI IN EDUCATION" />
        <LiteracyLink
          href="https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-MArketing-book-Geo-.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI IN EDUCATION
        </LiteracyLink>
      </LiteracyCard>
      <LiteracyCard>
        <LiteracyImage src={img4} alt="AI IN EDUCATION" />
        <LiteracyLink
          href="https://chrome-extension//kdpelmjpfafjppnhbloffcjpeomlnpah/https://btu.edu.ge/wp-content/uploads/2023/03/AI-MArketing-book-Geo-.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI IN EDUCATION
        </LiteracyLink>
      </LiteracyCard>
    </LiteracyCardsContainer>
  );
}
