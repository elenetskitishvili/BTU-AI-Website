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

function Header() {
  return (
    <header>
      <div>
        <p>
          BTU AI4Globe საქართველოდან მთელს მსოფლიოში, AI წიგნიერების
          გასაძლიერებლად
        </p>
        <div>
          <FaFacebook />
          <FaLinkedin />
          <FaInstagram />
          <FaTiktok />
          <FaYoutube />
          <FaGoogle />
        </div>
      </div>
      <div>
        <img src={logo} alt="btu ai logo" />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
