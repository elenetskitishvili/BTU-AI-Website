import React from "react";
import logo from "./../../../assets/images/LOGO2.png";
import {
  FooterContainer,
  CopyrightContainer,
  Wrapper,
  Text,
  ListItem,
  ContactUsContainer,
} from "./Footer.styles";

import ContactUsComponents from "../../ContactUsComponents";

function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <img src={logo} alt="btu ai logo" />
        <div>
          <Text>
            ბიზნესისა და ტექნოლოგიების უნივერსიტეტი 2016 წლის 16 სექტემბერს
            დაარსდა.
          </Text>
          <ul>
            <ListItem>
              თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82
            </ListItem>
            <ListItem>(+995 32) 2 195 015</ListItem>
          </ul>
        </div>
      </Wrapper>
      <CopyrightContainer>
        <span>Copyright © 2024 - BTUSTUDENTS</span>
      </CopyrightContainer>
      <ContactUsContainer>
        <ContactUsComponents />
      </ContactUsContainer>
    </FooterContainer>
  );
}

export default Footer;
