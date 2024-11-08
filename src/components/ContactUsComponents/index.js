import React from "react";
import arrow from "./../../assets/images/Frame.png";
import {
  ContactUsContainer,
  Form,
  Label,
  InputContainer,
  Input,
  Icon,
  Button,
} from "./ContactUs.styles";

function ContactUsComponents() {
  return (
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
    </ContactUsContainer>
  );
}

export default ContactUsComponents;
