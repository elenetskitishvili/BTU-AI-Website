import React from "react";
import logo from "./../../../assets/images/LOGO2.png";
import arrow from "./../../../assets/images/Frame.png";
import {
  FooterContainer,
  CopyrightContainer,
  Wrapper,
  Text,
  ListItem,
  ContactUsWrapper,
  ContactUsContainer,
  Form,
  Label,
  InputContainer,
  Input,
  Icon,
  Button,
} from "./Footer.styles";

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
      <ContactUsWrapper>
        <ContactUsContainer>
          <Form>
            <Label>მოგვწერე</Label>
            <InputContainer>
              <Input placeholder="Your Email" />
              <Button type="submit">
                <Icon src={arrow} alt="arrow icon" />
              </Button>{" "}
            </InputContainer>
          </Form>
        </ContactUsContainer>{" "}
      </ContactUsWrapper>
    </FooterContainer>
  );
}

export default Footer;
