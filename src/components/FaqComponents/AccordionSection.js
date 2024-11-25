import React, { useState } from "react";
import styled from "styled-components";
import PlusIconImage from "../../assets/images/plus-svg.svg";
import MinusIconImage from "../../assets/images/minus-svg.svg";

// Styled Components
const HeaderContainer = styled.div`
  max-width: 1245px;
  margin: 0 auto;
  margin-top: 137px;
  margin-bottom: 40px;
  color: #fd007d;
  border-bottom: 3px solid #fd007d;
  display: flex;
  flex-direction: column;

  @media (max-width: 1300px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media (max-width: 700px) {
    margin-top: 50px;
    margin-left: 18px;
    margin-right: 18px;
  }
`;

const Title = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 54.48px;
  text-transform: uppercase;
  color: #fd007d;
  padding-bottom: 10px;

  @media (max-width: 1300px) {
    font-size: 32px;
  }

  @media (max-width: 700px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1245px;
  margin: 0 auto 243px;
  padding: 0;

  @media (max-width: 1300px) {
    margin: 0 32px 243px;
  }

  @media (max-width: 700px) {
    margin: 0 18px 50px;
  }
`;

const AccordionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const VerticalLine = styled.div`
  width: 5px;
  height: 40px;
  background-color: #fd007d;
  margin-right: 20px;

  @media (max-width: 700px) {
    width: 4px;
    height: 30px;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Question = styled.h3`
  font-family: "Noto Sans", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32.69px;
  color: #070b80;
  margin: 0;

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const IconImage = styled.img`
  width: 30px;

  @media (max-width: 700px) {
    width: 16px;
  }
`;

const AccordionContent = styled.div`
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "10px 15px" : "0 15px")};
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  color: #333;

  @media (max-width: 1300px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "AI ლექტორის დახმარებით, რა შემიძლია შევისწავლო?",
      answer:
        "AI4GLOBE სკოლა, საგანმანათლებლო ინტენსივები, ტექნოლოგიის სწავლების პროგრამები.",
    },
    {
      question: "AI სასწავლო რესურსები და მათზე წვდომა?",
      answer: "მოწყობილობის ინსტალაციები, მოხსენებები და ვორქშოფები.",
    },
    {
      question: "რას ემსახურება AI4GLOBE ინიციატივა?",
      answer: "AI4Globe ახალი, საერთაშორისო ინიციატივაა.",
    },
    {
      question: "AI ლაბორატორიის დასახელებები, რა შემიძლია შევისწავლო?",
      answer: "AI4GLOBE სკოლა, საგანმანათლებლო ინტენსივები.",
    },
  ];

  return (
    <>
      <HeaderContainer>
        <Title>გაიგე სწრაფად</Title>
      </HeaderContainer>

      <AccordionContainer>
        {accordionData.map((item, index) => (
          <div key={index}>
            <AccordionItem onClick={() => toggleAccordion(index)}>
              <QuestionContainer>
                <VerticalLine />
                <Question>{item.question}</Question>
              </QuestionContainer>
              <IconImage
                src={activeIndex === index ? MinusIconImage : PlusIconImage}
                alt={activeIndex === index ? "Minus Icon" : "Plus Icon"}
              />
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
