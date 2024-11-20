import React from "react";
import PageTitleSection from "./../ReusableComponents/PageTitleSection";
import SectionHeading from "./../ReusableComponents/SectionHeading";
import { GoogleMapWrapper } from "./ContactUs.styles";

function ContactUsComponents() {
  return (
    <>
      <PageTitleSection title="კონტაქტი" />
      <SectionHeading heading="საკონტაქტო ინფორმაცია" />
      <GoogleMapWrapper></GoogleMapWrapper>
    </>
  );
}

export default ContactUsComponents;
