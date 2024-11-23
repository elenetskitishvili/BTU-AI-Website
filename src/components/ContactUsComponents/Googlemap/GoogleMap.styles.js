import styled from "styled-components";

export const GoogleMapWrapper = styled.div`
  margin: 0 auto;
  margin-top: 95px;
  max-width: 1240px;
  height: 852px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 90em) {
    min-height: 852px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0 auto;
  @media (max-width: 90em) {
    max-width: 80%;
  }
`;
