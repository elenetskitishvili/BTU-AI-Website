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
  ErrorMessage,
  SuccessMessage,
} from "./ContactForm.styles";
import Button from "./../../../assets/images/contactbutton.svg";
import { useState } from "react";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    if (!formValues.name.trim()) return "Name is required";
    if (!formValues.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      return "Please enter a valid email address";
    }
    if (!formValues.message.trim()) return "Message is required";
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      const response = await fetch(
        "/wai-django-final-b9968118d906.herokuapp.com/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );


      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData.error || "Submission failed");
      }

      setFormValues({
        name: "",
        email: "",
        message: "",
      });
      setSuccessMessage("Thank you! Your message has been sent successfully.");
    } catch (err) {
      setError(err.message);
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <FormHeading>
        თუ გსურს დამატებით ინფორმაციის მიღება, შეავსე ფორმა
      </FormHeading>
      <Form onSubmit={handleSubmit} noValidate>
        <InputWrapper>
          <InputContainer>
            <Label>
              სახელი <span>*</span>
            </Label>
            <Input
              name="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="თქვენი სახელი"
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>
              ელ.ფოსტა <span>*</span>
            </Label>
            <Input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="თქვენი ელ-ფოსტა"
              required
            />
          </InputContainer>
        </InputWrapper>
        <div>
          <Label>
            ტექსტი <span>*</span>
          </Label>
          <TextArea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="ტექსტი..."
            required
          />
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        <ButtonContainer type="submit" disabled={loading}>
          <p>{loading ? "გაგზავნა..." : "გაგზავნა"}</p>
          <img src={Button} alt="button" />
        </ButtonContainer>
      </Form>
    </FormWrapper>
  );
}

export default ContactForm;
