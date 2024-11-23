import styled from "styled-components";
export const ContactInformation = styled.div``;

export const InfoText = styled.p`
  color: #070b80;
  @media (max-width: 50em) {
    font-size: 80%;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 75em) {
    flex-direction: column;
  }
`;

export const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
  @media (max-width: 25em) {
    gap: 0;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 27px;
  h5 {
    color: #fd007d;
  }
`;

export const InfoRow = styled.div``;

export const InfoIcon = styled.img`
  @media (max-width: 25em) {
    display: none;
  }
`;

export const LocationTxt = styled.p`
  max-width: 582px;
  margin-top: 13px;
  color: #474747;
  font-size: 16px;
  @media (max-width: 90em) {
    font-size: 80%;
  }
`;

export const Mail = styled.a`
  color: #474747;
`;
