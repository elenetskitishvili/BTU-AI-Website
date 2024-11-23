import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1245px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 400;
  line-height: 32.69px;
  letter-spacing: -0.05em;
  margin-bottom: 216px;

  @media (max-width: 75em) {
    font-size: 16px;
    margin-left: 32px;
    margin-right: 32px;
  }

  @media (max-width: 43.75em) {
    margin-left: 18px;
    margin-right: 18px;
  }
`;

export const GoogleMapButton = styled.button`
  border-radius: 12px;
  background-color: #fd007d;
  color: #ffff;
  border: none;
  padding: 12px;
  margin-top: 10px;
  font-size: 16px;

  @media (max-width: 43.75em) {
    margin-left: 18px;
    margin-right: 18px;
  }
`;
