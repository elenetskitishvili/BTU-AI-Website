import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1245px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 43px;
  text-transform: uppercase;
  color: #fd007d;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1245px;
  padding: 0;
  background: #ffffff;
  margin: 20px auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const AccordionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer; /* Add cursor pointer */

  &:last-child {
    border-bottom: none;
  }
`;

const VerticalLine = styled.div`
  width: 5px;
  height: 20px;
  background-color: #fd007d;
  margin-right: 15px;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Question = styled.h3`
  font-family: "Noto Sans", sans-serif;
  font-size: 20px;
  color: #070b80;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PlusIcon = styled.span`
  font-size: 24px;
  color: #fd007d;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const AccordionContent = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: ${({ isOpen }) => (isOpen ? "10px 15px" : "0")}; /* Remove underline */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

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
    {
      question: "AI ლაბორატორიის დასახელებები, რა შემიძლია შევისწავლო?",
      answer:
        "AI4GLOBE სკოლა, საგანმანათლებლო ინტენსივები, ტექნოლოგიის სწავლების პროგრამები.",
    },
  ];

  return (
    <>
      <HeaderContainer>
        <Title>გაიგე სწრაფად</Title>
        <HorizontalLine />
      </HeaderContainer>

      <AccordionContainer>
        {accordionData.map((item, index) => (
          <div key={index} style={{ width: "100%" }}>
            <AccordionItem onClick={() => toggleAccordion(index)}>
              <QuestionContainer>
                <VerticalLine />
                <Question>{item.question}</Question>
              </QuestionContainer>
              <PlusIcon>{activeIndex === index ? "-" : "+"}</PlusIcon>
            </AccordionItem>

            <AccordionContent isOpen={activeIndex === index}>
              {item.answer}
            </AccordionContent>
          </div>
        ))}
      </AccordionContainer>
    </>
  );
}

export default AccordionSection;
