import {
  FormWrapper,
  FormHeading,
  Form,
  InputWrapper,
  InputContainer,
  Label,
  Input,
  TextAreaContainer,
  TextArea,
  ButtonContainer,
} from "./ContactForm.styles";
import Button from "./../../../assets/images/contactbutton.svg";

function ContactForm() {
  return (
    <FormWrapper>
      <FormHeading>
        თუ გსურს დამატებით ინფორმაციის მიღება, შეავსე ფორმა
      </FormHeading>
      <Form>
        <InputWrapper>
          <InputContainer>
            <Label>
              სახელი <span>*</span>
            </Label>
            <Input></Input>
          </InputContainer>
          <InputContainer>
            <Label>
              ელ.ფოსტა <span>*</span>
            </Label>
            <Input></Input>
          </InputContainer>
        </InputWrapper>
        <TextAreaContainer>
          <Label>
            ტექსტი <span>*</span>
          </Label>
          <TextArea></TextArea>
        </TextAreaContainer>
        <ButtonContainer>
          <p>გაგზავნა</p>
          <img src={Button}></img>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;
