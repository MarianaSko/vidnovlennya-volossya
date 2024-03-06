import { NavLink, Outlet } from "react-router-dom";
import {
  LeftContainer,
  LinksContainer,
  Logo,
  RightContainer,
  SocialMediaWrapper,
  StyledFooter,
  StyledHeader,
} from "./Layout.styled";
import logo from "../../images/logo.png";
import phone from "../../images/phone.svg";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { PiTelegramLogoLight } from "react-icons/pi";

const Layout = () => {
  return (
    <div>
      <StyledHeader>
        <LeftContainer>
          <NavLink to="/">
            <Logo src={logo} alt="" />
          </NavLink>
          <NavLink to="services">Послуги</NavLink>
          <NavLink to="contacts">Контакти</NavLink>
        </LeftContainer>
        <RightContainer>
          <img src={phone} alt="" />
          <a href="tel:+380984053772">+38 098 40 53 772</a>
        </RightContainer>
      </StyledHeader>
      <Outlet />
      <StyledFooter>
        <NavLink to="/">
          <Logo src={logo} alt="" />
        </NavLink>
        <a
          href="https://maps.app.goo.gl/T4ESx8PZyFihL7Em9"
          rel="noopener noreferrer"
          target="_blank"
        >
          Львів, вул. Василя Стуса, 24
        </a>
        <LinksContainer>
          <SocialMediaWrapper>
            <a
              href="https://t.me/vidnovlennyavolossya"
              rel="noopener noreferrer"
              target="_blank"
            >
              <PiTelegramLogoLight
                color="#f0c2d2"
                size={40}
                cursor="pointer"
              ></PiTelegramLogoLight>
            </a>
            <a
              href="https://www.instagram.com/vidnovlennyavolossya/?igshid=MzRlODBiNWFlZA%3D%3D"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram
                color="#f0c2d2"
                size={40}
                cursor="pointer"
              ></FaInstagram>
            </a>
            <a
              href="https://www.facebook.com/Vidnovlennyavolossya"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LiaFacebookF
                color="#f0c2d2"
                size={40}
                cursor="pointer"
              ></LiaFacebookF>
            </a>
          </SocialMediaWrapper>
        </LinksContainer>
        <p> &copy; 2024 Студія &#34;Vidnovlennya Volossya&#34;</p>
      </StyledFooter>
    </div>
  );
};

export default Layout;
