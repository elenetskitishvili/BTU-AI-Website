import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: 50px;
  background: #070b80;
  margin: 0 auto;
  color: #ffffff;
  border-radius: 6px;
`;

export const FormHeading = styled.h5`
  font-weigth: 700;
  font-size: 24px;
  text-align: center;
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 1154px;
  margin-top: 58px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  margin-bottom: 25px;
  @media (max-width: 34em) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 34em) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  span {
    color: #fd007d;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 84px;
  border-radius: 12px;
`;

export const TextAreaContainer = styled.div``;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 229px;
  resize: none;
  border-radius: 12px;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  width: 290px;
  height: 53px;
  border-radius: 12px;
  background-color: #fd007d;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 10px 59px;
  margin-top: 39px;
`;

export const ButtonBox = styled.button``;
