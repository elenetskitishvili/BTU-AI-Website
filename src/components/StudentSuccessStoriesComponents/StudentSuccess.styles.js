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

export const CardContainer = styled.section`
  border: 1px solid #e9ecef;
  border-radius: 14px;
  padding: 5rem;
  margin-top: 10rem;
  border-top: none;
  box-shadow: 1px 4px 4px 0px #0b108d45;
  @media (max-width: 67.5em) {
    /* width: 90rem; */
  }
  @media (max-width: 48em) {
    /* width: 60rem; */
  }
`;
export const CardTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: #fd007d70;
  /* background-image: linear-gradient(0deg, #3f5efb, #fc466b);
    border-radius: 30px;
    transform: skew(-19deg, 9deg);
    object-fit: ; */
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform: skew(-20deg);
  /* border-top-left-radius: 20px;
  border-bottom-left-radius: 20px; */
  z-index: 2;

  @media (max-width: 67.5em) {
    /* width: 90rem; */
  }
  @media (max-width: 48em) {
    /* width: 60rem; */
  }
`;

export const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  padding: 0;
`;

export const CardItem = styled.li`
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 55rem;
  display: flex;
  overflow: hidden;
  z-index: 1;

  height: 200px;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #495057;
  margin: 0.5rem 0;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  line-height: 43px;
  margin-bottom: 10rem;
  font-weight: 400;
  color: #fd007d;
  @media (max-width: 67.5em) {
    text-align: center;

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
