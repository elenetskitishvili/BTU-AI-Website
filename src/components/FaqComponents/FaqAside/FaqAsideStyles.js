import styled from "styled-components";

export const FaqAsideWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 50px;
  }
`;

export const FaqAsideCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 260px;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 242px;
  }
`;

export const FaqAsideCardImage = styled.img`
  width: 100%;
  height: 184px;
  object-fit: cover;
  object-position: center;
`;

export const FaqAsideCardLink = styled.a`
  color: #fd007d;
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
  letter-spacing: -5%;
  line-height: 21.79px;
  cursor: pointer;
`;
