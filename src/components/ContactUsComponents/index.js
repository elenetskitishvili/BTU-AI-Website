import React, { useEffect, useState } from "react";
import PageTitleSection from "./../ReusableComponents/PageTitleSection";
import SectionHeading from "./../ReusableComponents/SectionHeading";
import { Wrapper, GoogleMapButton } from "./ContactUs.styles";

import ContactForm from "./ContactForm";
import GoogleMap from "./Googlemap";
import ContactInformation from "./ContactInformation";

function ContactUsComponents() {
  const [showMapButton, setShowMapButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 35em)").matches) {
        setShowMapButton(true);
      } else {
        setShowMapButton(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openGoogleMap = () => {
    window.open(
      "https://www.google.com/maps?q=41.70657,44.736092&hl=en&z=17",
      "_blank"
    );
  };

  return (
    <>
      <PageTitleSection title="კონტაქტი" />
      <SectionHeading heading="საკონტაქტო ინფორმაცია" showIcons={true} />

      <Wrapper>
        <ContactInformation />

        {showMapButton ? (
          <GoogleMapButton onClick={openGoogleMap}>
            Open Google Map
          </GoogleMapButton>
        ) : (
          <GoogleMap />
        )}

        <SectionHeading heading="მოგვწერე" showIcons={false} />
        <ContactForm />
      </Wrapper>
    </>
  );
}

export default ContactUsComponents;
