import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #474747;
  display: flex;
  flex-direction: column;
  position: relative;
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
    gap: 15px;
    padding: 15px;
  }
  @media (max-width: 32em) {
    flex-direction: column;
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

export const ContactUsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 85em) {
    position: absolute;
    right: 25%;
    top: 20%;
  }
  @media (max-width: 45em) {
    right: 40%;
    top: 10%;
  }
  @media (max-width: 35em) {
    top: 5%;
    right: 55%;
  }
`;
