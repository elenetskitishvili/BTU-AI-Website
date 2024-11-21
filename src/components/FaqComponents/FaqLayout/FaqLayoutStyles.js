import styled from "styled-components";

export const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 242px;
  column-gap: 153px;
  max-width: 1245px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 230px;

  @media (max-width: 1300px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 1000px) {
    column-gap: 80px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
