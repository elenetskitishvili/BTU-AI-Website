import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SectionWrapper = styled.section`
  width: 124.5rem;
  @media (max-width: 67.5em) {
    width: 90rem;
  }
  @media (max-width: 48em) {
    width: 60rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  line-height: 43px;
  margin-bottom: 10rem;
  font-weight: 400;

  color: #fd007d;
  @media (max-width: 67.5em) {
    text-align: center;
    color: black;
    font-size: 2.2rem;
    line-height: 30px;
  }
  @media (max-width: 48em) {
    line-height: 20px;
    margin-bottom: 3rem;
  }
`;

export const GraduateList = styled.ul`
  list-style: none;
`;

export const GraduateItem = styled.a`
  display: block;
  color: #000;
  background-color: #fff;
  transition: background-color 0.3s, transform 0.2s;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 26.4px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
  text-decoration-skip-ink: auto;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02);
  }
`;

export const GraduateText = styled.p`
  font-size: 2%.2;

  &::before {
    content: "• ";
    color: #555;
  }
`;
