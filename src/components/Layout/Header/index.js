import Navigation from "./Navigation";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import logo from "./../../../assets/images/LOGO.png";
import {
  HeaderContainer,
  TopBar,
  TopText,
  Highlight,
  TopContainer,
  SocialIcons,
  HeaderWrapper,
  LogoContainer,
  LogoImage,
} from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <TopBar>
        <TopContainer>
          <TopText>
            <Highlight>BTU AI4Globe</Highlight> საქართველოდან მთელს მსოფლიოში,{" "}
            <Highlight>AI</Highlight> წიგნიერების გასაძლიერებლად
          </TopText>
          <SocialIcons>
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
            <FaGoogle />
          </SocialIcons>
        </TopContainer>
      </TopBar>
      <LogoContainer>
        <HeaderWrapper>
          <LogoImage src={logo} alt="btu ai logo" />
          <Navigation />
        </HeaderWrapper>
      </LogoContainer>
    </HeaderContainer>
  );
}

export default Header;
