import React from 'react';
import { SectionWrapper, Heading, SubHeading, Description, Divider, VideoWrapper } from './AiSectionStyles';

const AiSection = () => {
  return (
    <SectionWrapper>
      <Heading>AI ბაკალავრის პროგრამა</Heading>
      <Divider />
      <SubHeading>
        ორი სადიპლომო პროგრამა BTU-ს კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო პროგრამის
        სტუდენტებს შესაძლებლობა აქვთ ბოლო, მეოთხე აკადემიური წლის პარტნიორ უნივერსიტეტში გატარებით, ერთდროულად
        ორი უნივერსიტეტის დიპლომი მოიპოვონ.
      </SubHeading>
      <Description>
        კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო პროგრამაზე დეტალური ინფორმაციის მისაღებად იხილეთ:
        <ul>
          <li>
            <a href="https://drive.google.com/file/d/1JCFceATzAUG6eisFGXBhJw7VfXfeZ9e_/view" target="_blank" rel="noopener noreferrer">
              პროგრამა
            </a>
          </li>
          <li>
            <a href="https://btu.edu.ge/wp-content/uploads/2024/07/programis-broshura.-komp.pdf" target="_blank" rel="noopener noreferrer">
              პროგრამის ბროშურა
            </a>
          </li>
          <li>
            <a href="https://btu.edu.ge/wp-content/uploads/2024/07/gatsvlithi-komp.pdf" target="_blank" rel="noopener noreferrer">
              გაცვლითი პროგრამები
            </a>
          </li>
        </ul>
      </Description>
      <VideoWrapper>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FP8XL-9_bZo" 
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </SectionWrapper>
  );
};

export default AiSection;
