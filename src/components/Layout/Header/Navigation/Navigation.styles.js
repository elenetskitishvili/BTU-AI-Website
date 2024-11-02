import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  margin-left: 10rem;
  color: #000000;
  font-weight: 700;

  @media (max-width: 67.5em) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #fd007d;
    text-decoration: underline;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 67.5em) {
    display: block;
    padding: 0 6rem;
  }
`;

export const MobileNav = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 8rem;
  left: 10rem;
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 48em) {
    top: 12rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style-type: none;
    padding: 0;
  }
`;
