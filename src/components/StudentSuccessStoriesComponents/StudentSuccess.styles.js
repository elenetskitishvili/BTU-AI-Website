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
  margin-bottom: 10rem;
  @media (max-width: 67.5em) {
  }
  @media (max-width: 48em) {
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
  background-color: #fd007d70;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 55rem;
  display: flex;
  overflow: hidden;
  z-index: 1;
  height: 20rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    /* transform: translateY(-5px); */
  }
`;

export const CardTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fd007d70;
  width: 50%;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: inherit;
    transform: skew(-10deg);
    transform-origin: left;
    z-index: 4;
  }

  @media (max-width: 48em) {
    width: 100%;
    transform: none;
  }
`;

export const CardImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  align-self: flex-end;
  z-index: -1;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: #fff;
  margin: 0.5rem 0;
  z-index: 10;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
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
  margin: 0;
  display: flex;
  flex-direction: column;
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
  font-size: 1.6rem;
  margin: 0;

  &::before {
    content: "• ";
    color: #555;
  }
`;


export const ShowMoreButton = styled.button`
  margin: 2rem auto;
  color: #FD007D80;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #FD007D;
    
  }
`;