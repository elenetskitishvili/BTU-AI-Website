import React from "react";
import {
  PageTitleSectionWrapper,
  PageTitleSectionLine,
  PageTitle,
} from "./PageTitleSectionStyles";

function PageTitleSection({ title }) {
  return (
    <PageTitleSectionWrapper>
      <PageTitleSectionLine />
      <PageTitle>{title}</PageTitle>
    </PageTitleSectionWrapper>
  );
}

export default PageTitleSection;
