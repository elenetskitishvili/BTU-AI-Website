import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavList,
  NavItem,
  StyledLink,
  BurgerMenu,
  MobileNav,
} from "./Navigation.styles";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <StyledLink to="/aboutus">ჩვენ შესახებ</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/bachelorinai">AI ბაკალავრის პროგრამა</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/studentsuccessstories">წარმატების ისტორიები</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/contactus">კონტაქტი</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/faq">FAQ</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/blog">ბლოგი</StyledLink>
          </NavItem>
        </NavList>
      </Nav>

      <BurgerMenu onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </BurgerMenu>

      <MobileNav $isOpen={isOpen}>
        <ul>
          <li>
            <StyledLink to="/aboutus" onClick={toggleMenu}>ჩვენ შესახებ</StyledLink>
          </li>
          <li>
            <StyledLink to="/bachelorinai" onClick={toggleMenu}>AI ბაკალავრის პროგრამა</StyledLink>
          </li>
          <li>
            <StyledLink to="/studentsuccessstories" onClick={toggleMenu}>წარმატების ისტორიები</StyledLink>
          </li>
          <li>
            <StyledLink to="/contactus" onClick={toggleMenu}>კონტაქტი</StyledLink>
          </li>
          <li>
            <StyledLink to="/faq" onClick={toggleMenu}>FAQ</StyledLink>
          </li>
          <li>
            <StyledLink to="/blog" onClick={toggleMenu}>ბლოგი</StyledLink>
          </li>
        </ul>
      </MobileNav>
    </>
  );
}

export default Navigation;
