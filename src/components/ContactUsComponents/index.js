import React from "react";
import PageTitleSection from "./../ReusableComponents/PageTitleSection";
import SectionHeading from "./../ReusableComponents/SectionHeading";
import {
  GoogleMapWrapper,
  Iframe,
  ContactInformation,
  InfoText,
  Wrapper,
  InfoWrapper,
  InfoColumn,
  InfoRow,
  ContainerOne,
} from "./ContactUs.styles";

import Phone from "./../../assets/images/Vector.svg";
import Message from "./../../assets/images/Vector (1).svg";
import Location from "./../../assets/images/Location.svg";
import ContactForm from "./ContactForm";

function ContactUsComponents() {
  return (
    <>
      <PageTitleSection title="კონტაქტი" />
      <SectionHeading heading="საკონტაქტო ინფორმაცია" showIcons={true} />

      <Wrapper>
        <ContactInformation>
          <InfoText>
            ცხელი ხაზის სამუშაო საათებია ორშაბათიდან პარასკევის ჩათვლით
            10:00-18:00 საათამდე.
          </InfoText>
          <InfoWrapper>
            <ContainerOne>
              <InfoColumn>
                <img src={Phone} alt="arrow icon" />
                <InfoRow>
                  <h5>ტელეფონი</h5>
                  <span href="tel:+995 32 2 195 015">(+995 32) 2 195 015</span>
                </InfoRow>
              </InfoColumn>
              <InfoColumn>
                <img src={Message} alt="arrow icon" />
                <InfoRow>
                  <h5>ელ.ფოსტა</h5>
                  <a href="mailto:info@btu.edu.ge">info@btu.edu.ge</a>
                </InfoRow>
              </InfoColumn>
            </ContainerOne>
            <InfoColumn>
              <img src={Location} alt="arrow icon" />
              <InfoRow>
                <h5>მისამართი</h5>
                <p>თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82</p>
                <p>
                  ჩვენს კამპუსამდე მოსვლა შესაძლებელია: ავტობუსით #173 #345 #351
                  ან მიკროავტობუსით #449 #450
                </p>
              </InfoRow>
            </InfoColumn>
          </InfoWrapper>
        </ContactInformation>
        <GoogleMapWrapper>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.265408691404!2d44.736092075895776!3d41.7065696712611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f9.1!3m3!1m2!1s0x40447344e8047ced%3A0xb53d8ecd4495903f!2sBusiness%20and%20Technology%20University!5e0!3m2!1sen!2sge!4v1732278019277!5m2!1sen!2sge"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Iframe>
        </GoogleMapWrapper>
        <SectionHeading heading="მოგვწერე" showIcons={false} />
        <ContactForm />
      </Wrapper>
    </>
  );
}

export default ContactUsComponents;
