import styled from "styled-components";

export const ProgramsContainer = styled.div`
  margin: 0 17rem 24.5rem 17.7rem;
`;

export const ProgramsList = styled.div`
  display: flex;
  gap: 4.8rem;

  @media (max-width: 90em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 75em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 50em) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  width: 28rem;
  min-height: 28rem;
  background-color: ${(props) => props.color};
  color: #ffffff;

  p {
    font-family: Josefin Sans;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;
    padding: 0 1.4rem 1.5rem;
  }

  img {
    max-width: 28rem;
  }
`;
