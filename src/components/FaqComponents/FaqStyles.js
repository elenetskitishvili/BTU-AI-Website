import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1245px;
  margin: 0 auto;
  color: #fd007d;

  @media (max-width: 1300px) {
    margin: 0 32px;
  }

  @media (max-width: 700px) {
    margin: 0 18px;
  }
`;

export const Line = styled.div`
  width: 5px;
  height: 40px;
  background-color: #fd007d;
  margin-right: 20px;

  @media (max-width: 700px) {
    width: 4px;
    height: 30px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  color: #070b80;
  text-transform: uppercase;

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;
