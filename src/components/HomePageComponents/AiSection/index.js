import React from 'react';
import {
  SectionWrapper,
  ContentWrapper,
  TextContent,
  Heading,
  Divider,
  SubHeading,
  Description,
  VideoWrapper,
} from './AiSectionStyles';

const AiSection = () => {
  return (
    <SectionWrapper>
      {/* Heading and Divider */}
      <Heading>AI <span>ბაკალავრის პროგრამა</span></Heading>
      <Divider />

      {/* Content Wrapper for Two-Column Layout */}
      <ContentWrapper>
        {/* Left Column: Text Content */}
        <TextContent>
        <SubHeading>
          <ul>
            <li>ორი სადიპლომო პროგრამა</li>
            <li>
              BTU-ს კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო პროგრამის 
              სტუდენტებს შესაძლებლობა აქვთ ბოლო, მეოთხე აკადემიური წლის პარტნიორ 
              უნივერსიტეტში გატარებით, ერთდროულად ორი უნივერსიტეტის დიპლომი მოიპოვონ.
            </li>
          </ul>
        </SubHeading>
        <Description>
  კომპიუტერული მეცნიერება და ხელოვნური ინტელექტის საბაკალავრო პროგრამაზე დეტალური ინფორმაციის მისაღებად იხილეთ:
  <ul>
    <li>
      <a
        href="https://drive.google.com/file/d/1JCFceATzAUG6eisFGXBhJw7VfXfeZ9e_/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        პროგრამა
      </a>
    </li>
    <li>
      <a
        href="https://btu.edu.ge/wp-content/uploads/2024/07/programis-broshura.-komp.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        პროგრამის ბროშურა
      </a>
    </li>
    <li>
      <a
        href="https://btu.edu.ge/wp-content/uploads/2024/07/gatsvlithi-komp.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        გაცვლითი პროგრამები
      </a>
    </li>
  </ul>
</Description>
        </TextContent>

        {/* Right Column: Video Content */}
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/FP8XL-9_bZo"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AiSection;
