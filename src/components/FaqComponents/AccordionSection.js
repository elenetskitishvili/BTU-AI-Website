import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  width: 100%;
  max-width: 1245px;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  text-transform: uppercase;
  color: #fd007d;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #fd007d;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AccordionItem = styled.div`
  border: 1px solid #fd007d;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f9f9f9;
  cursor: pointer;

  h3 {
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    color: #070b80;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  span {
    font-size: 24px;
    color: #fd007d;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const AccordionContent = styled.div`
  padding: 20px;
  background-color: #fff;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 15px;
  }
`;

// Accordion Component
function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "AI ლაბორატორიის დასახელებები, რა შემიძლია შევისწავლო?",
      answer:
        "AI4GLOBE სკოლა, საგანმანათლებლო ინტენსივები, ტექნოლოგიის სწავლების პროგრამები.",
    },
    {
      question: "AI სერვისები რას წარმოადგენენ და როგორ ვგებულობ?",
      answer: "მოწყობილობის ინსტალაციები, მოხსენებები და ვორქშოფები.",
    },
    {
      question: "რას წარმოადგენს AI4GLOBE ინიციატივა?",
      answer:
        "AI4GLOBE სკოლა არის გლობალური ინიციატივა ტექნოლოგიური განათლების და ზრდისთვის.",
    },
  ];

  return (
    <SectionContainer>
      <Title>გაიგე სწრაფად</Title>
      <HorizontalLine />
      <AccordionContainer>
        {accordionData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader onClick={() => toggleAccordion(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </AccordionHeader>
            <AccordionContent isOpen={activeIndex === index}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </SectionContainer>
  );
}

export default AccordionSection;
