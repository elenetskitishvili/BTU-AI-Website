import styled from "styled-components";

export const SectionHeadingWrapper = styled.div`
  max-width: 1245px;
  margin: 0 auto;
  margin-top: 137px;
  color: #fd007d;
  border-bottom: 3px solid #fd007d;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1300px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media (max-width: 700px) {
    margin-top: 50px;
    margin-left: 18px;
    margin-right: 18px;
  }
`;

export const SectionHeadingTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 54.48px;
  letter-spacing: -5%;
  padding-bottom: 6px;

  @media (max-width: 1300px) {
    font-size: 32px;
  }

  @media (max-width: 700px) {
    font-size: 24px;
    padding-bottom: 0;
  }
`;

export const FaqPrefix = styled.span`
  color: rgba(253, 0, 125, 0.5);
`;

export const SectionHeadingIcons = styled.div`
  background-color: #fd007d;
  color: #fff;
  padding: 4px 16.31px 0;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 700px) {
    display: none;
  }
`;
