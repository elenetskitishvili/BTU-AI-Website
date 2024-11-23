import {
  FormWrapper,
  FormHeading,
  Form,
  InputWrapper,
  InputContainer,
  Label,
  Input,
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
            <Input placeholder="თქვენი სახელი"></Input>
          </InputContainer>
          <InputContainer>
            <Label>
              ელ.ფოსტა <span>*</span>
            </Label>
            <Input placeholder="თქვენი ელ-ფოსტა"></Input>
          </InputContainer>
        </InputWrapper>
        <div>
          <Label>
            ტექსტი <span>*</span>
          </Label>
          <TextArea placeholder="ტექსტი..."></TextArea>
        </div>
        <ButtonContainer>
          <p>გაგზავნა</p>
          <img src={Button} alt="button"></img>
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;
