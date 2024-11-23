import React from "react";
import PageTitleSection from "./../ReusableComponents/PageTitleSection";
import SectionHeading from "./../ReusableComponents/SectionHeading";
import {
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
import GoogleMap from "./Googlemap";

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
        <GoogleMap />
        <SectionHeading heading="მოგვწერე" showIcons={false} />
        <ContactForm />
      </Wrapper>
    </>
  );
}

export default ContactUsComponents;
