import React from 'react';
import { SectionWrapper, Heading, SubHeading, Description, Divider } from './AiSectionStyles';

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
          <li>პროგრამა</li>
          <li>პროგრამის ბროშურა</li>
          <li>გაცვლითი პროგრამები</li>
        </ul>
      </Description>
    </SectionWrapper>
  );
};

export default AiSection;
