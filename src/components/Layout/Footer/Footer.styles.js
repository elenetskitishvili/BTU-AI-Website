import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #474747;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  padding: 25px 177px;
  display: flex;
  gap: 99px;
  img {
    width: 6.25rem;
  }
  @media (max-width: 85em) {
    padding: 25px 77px;
  }
  @media (max-width: 45em) {
    flex-direction: column;
    gap: 15px;
    padding: 17.5px;
  }
`;

export const Text = styled.p`
  font-size: 1em;
  font-weight: 700;
  color: #f1f1f1;
  line-height: 20px;
  margin: 0.5rem 0;
  width: 407px;
  @media (max-width: 45em) {
    max-width: 50%;
  }
`;
export const ListItem = styled(Text).attrs({ as: "li" })`
  width: auto;
`;
export const CopyrightContainer = styled.div`
  background-color: #d9d9d9;
  text-align: center;
  padding: 8px;
  span {
    font-weight: 700;
    font-size: 13px;
  }
`;

export const ContactUsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 85em) {
    position: absolute;
    right: 25%;
    top: 20%;
  }
  @media (max-width: 45em) {
    top: 5%;
    right: 55%;
  }
`;
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
