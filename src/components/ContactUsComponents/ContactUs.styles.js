import styled from "styled-components";

export const ContactUsContainer = styled.div`
  width: 539px;
  height: 382px;
  background-color: #fd007d;
  border-top-left-radius: 40px;
  @media (max-width: 85em) {
    width: 0px;
    height: 0px;
  }
`;

export const Form = styled.form`
  padding: 179px 0 0 47px;
  @media (max-width: 85em) {
    padding: 0;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: #ffffff;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 144px;
  height: 21px;
  border-radius: 30px;
  border: none;
  padding-left: 11px;
  &::placeholder {
    color: #4747476e;
    font-weight: 700;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;

export const Icon = styled.img`
  position: relative;
  right: 11px;
`;
