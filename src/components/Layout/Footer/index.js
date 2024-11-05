import React from "react";
import logo from "./../../../assets/images/LOGO2.png";
import {
  FooterContainer,
  LogoImage,
  CopyrightContainer,
  Wrapper,
  Text,
  ListItem,
} from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <img src={logo} alt="btu ai logo" />
        <Text>
          ბიზნესისა და ტექნოლოგიების უნივერსიტეტი 2016 წლის 16 სექტემბერს
          დაარსდა.
        </Text>
        <ul>
          <ListItem>თბილისი 0162, საქართველო ი.ჭავჭავაძის გამზირი N82</ListItem>
          <ListItem>(+995 32) 2 195 015</ListItem>
        </ul>
      </Wrapper>
      <CopyrightContainer>
        <h1>copyright</h1>
      </CopyrightContainer>
    </FooterContainer>
  );
}

export default Footer;
