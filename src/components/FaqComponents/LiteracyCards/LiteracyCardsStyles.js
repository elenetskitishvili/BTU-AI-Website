import styled from "styled-components";

export const LiteracyCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  row-gap: 10px;
  height: 680px;

  @media (max-width: 550px) {
    height: 550px;
  }
`;

export const LiteracyCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 330px;

  @media (max-width: 550px) {
    height: 200px;
  }
`;

export const LiteracyImage = styled.img`
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: top;
`;

export const LiteracyLink = styled.a`
  font-weight: 700;
  color: #fd007d;
  font-size: 18px;
  letter-spacing: -0.05em;
  line-height: 24.52px;
  text-decoration: none;

  &:hover,
  &:active {
    color: #fd007d;
  }

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;
