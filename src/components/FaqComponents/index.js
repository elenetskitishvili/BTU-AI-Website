import React from "react";
import PageTitleSection from "./../ReusableComponents/PageTitleSection";
import SectionHeading from "./../ReusableComponents/SectionHeading";
import { FaqContainer, Line, ListItem, Text } from "./FaqStyles";
import { useNavigate } from "react-router-dom";
import AccordionSection from "./AccordionSection";

function FaqComponents() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <PageTitleSection title="ხშირად დასმული კითხვები" />
      <SectionHeading heading="FAQ" />

      {/* FAQ List Section */}
      <FaqContainer>
        <ListItem onClick={() => handleNavigate("/faq/ailab")}>
          <Line />
          <Text>AI ლაბორატორიები</Text>
        </ListItem>
        <ListItem onClick={() => handleNavigate("/faq/airesearch")}>
          <Line />
          <Text>კვლევები</Text>
        </ListItem>
        <ListItem onClick={() => handleNavigate("/faq/ailiteracy")}>
          <Line />
          <Text>AI წიგნიერების სერია</Text>
        </ListItem>
      </FaqContainer>
      <AccordionSection />
    </div>
  );
}

export default FaqComponents;
