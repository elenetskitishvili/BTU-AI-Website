import styled from "styled-components";

export const HeaderContainer = styled.header``;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 124.5rem;
  @media (max-width: 67.5em) {
    justify-content: center;
    gap: 2rem;
  }
  @media (max-width: 48em) {
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
`;

export const TopBar = styled.div`
  background-color: #474747;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopText = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: #fff;
  padding: 1rem 0;
`;

export const Highlight = styled.span`
  color: #fd007d;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #fd007d;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 14rem;
  height: auto;
  @media (max-width: 67.5em) {
    order: 2;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 124.5rem;
  @media (max-width: 67.5em) {
    justify-content: space-between;
  }
`;
