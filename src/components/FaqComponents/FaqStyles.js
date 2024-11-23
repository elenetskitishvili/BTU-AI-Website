import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
//   margin: 50px;
width: 100%;
  max-width: 1245px;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 20px;
  }
`;

export const Line = styled.div`
  width: 40px;
  height: 0px;
  border: 5px solid #fd007d;
  transform: rotate(90deg);
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 30px;
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

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: #070b80;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
