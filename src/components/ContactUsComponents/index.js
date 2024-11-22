import React from "react";
import PageTitleSection from "./../ReusableComponents/PageTitleSection";
import SectionHeading from "./../ReusableComponents/SectionHeading";
import { GoogleMapWrapper, Iframe } from "./ContactUs.styles";

function ContactUsComponents() {
  return (
    <>
      <PageTitleSection title="კონტაქტი" />
      <SectionHeading heading="საკონტაქტო ინფორმაცია" />
      <GoogleMapWrapper>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.265408691404!2d44.736092075895776!3d41.7065696712611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f9.1!3m3!1m2!1s0x40447344e8047ced%3A0xb53d8ecd4495903f!2sBusiness%20and%20Technology%20University!5e0!3m2!1sen!2sge!4v1732278019277!5m2!1sen!2sge"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </GoogleMapWrapper>
    </>
  );
}

export default ContactUsComponents;
