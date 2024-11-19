import styled from "styled-components";
import backgroundImage from "../../../assets/images/page-title-bg.png";

export const PageTitleSectionWrapper = styled.section`
  width: 100%;
  height: 166px;
  padding: 0 174px;

  display: flex;
  align-items: center;
  gap: 47px;

  background-image: linear-gradient(
      90deg,
      rgba(11, 16, 141, 0.65) 0%,
      rgba(253, 0, 125, 0.71) 85%
    ),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    padding: 0 80px;
  }

  @media (max-width: 550px) {
    padding: 0 40px;
    gap: 24px;
  }

  @media (max-width: 350px) {
    padding: 0 20px;
    gap: 18px;
    height: 100px;
  }
`;

export const PageTitleSectionLine = styled.div`
  width: 5px;
  height: 94px;
  background-color: #fd007d;

  @media (max-width: 350px) {
    height: 60px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 57.6px;
  color: #fff;
  border: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1200px) {
    font-size: 32px;
  }

  @media (max-width: 550px) {
    font-size: 24px;
  }

  @media (max-width: 350px) {
    font-size: 18px;
  }
`;
