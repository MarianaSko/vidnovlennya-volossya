import { NavLink, Outlet } from "react-router-dom";
import {
  AddressWrapper,
  LayoutContainer,
  LeftContainer,
  LinksContainer,
  Logo,
  OutletContainer,
  RightContainer,
  SocialMediaWrapper,
  StyledFooter,
  StyledHeader,
  Wrapper,
} from "./Layout.styled";
import logo from "../../images/logo.png";
import phone from "../../images/phone.svg";
import menu from "../../images/menu.svg";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { PiTelegramLogoLight } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Menu from "../Menu/Menu";
import { PhoneLink } from "../Menu/Menu.styled";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallTablet = useMediaQuery({ query: "(max-width: 560px)" });
  return (
    <LayoutContainer>
      <StyledHeader>
        {!isSmallTablet ? (
          <>
            <LeftContainer>
              <NavLink to="/">
                <Logo src={logo} alt="" />
              </NavLink>
              <NavLink to="services">Послуги</NavLink>
              <NavLink to="contacts">Контакти</NavLink>
            </LeftContainer>

            <RightContainer href="tel:+380984053772">
              <img src={phone} alt="" />
              +38 098 40 53 772
            </RightContainer>
          </>
        ) : (
          <>
            <NavLink to="/">
              <Logo src={logo} alt="" />
            </NavLink>
            <button type="button" onClick={() => setIsMenuOpen(true)}>
              <img src={menu} alt="" />
            </button>
          </>
        )}
        {isMenuOpen && <Menu close={setIsMenuOpen}></Menu>}
      </StyledHeader>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <StyledFooter>
        <AddressWrapper>
          <NavLink to="/">
            <Logo src={logo} alt="" />
          </NavLink>
          <a
            href="https://www.google.com/maps?q=%D0%A1%D1%82%D1%83%D0%B4%D1%96%D1%8F+%E2%80%9CVidnovlennya+volossya%E2%80%9D,+%D0%A2%D0%BE%D1%80%D0%B3%D1%96%D0%B2%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0+%D0%BB%D1%96%D0%BD%D1%96%D1%8F,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A9%D0%B8%D1%80%D0%B5%D1%86%D1%8C%D0%BA%D0%B0,+36,+%D0%B2%D1%83%D0%BB.+%D0%97%D0%B0%D1%85%D1%96%D0%B4%D0%BD%D0%B0,+5,+%D0%9F%D0%B0%D0%B2%D1%96%D0%BB%D1%8C%D0%B9%D0%BE%D0%BD,+86%D0%B0,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000&ftid=0x473ae74c45aaa9c9:0xfbe48406899acf82&entry=gps&lucs=,94208285,94224819,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTE3LjEuNjI5MjAYACCenQoqUSw5NDIwODI4NSw5NDIyNDgxOSw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICVUE%3D&g_st=ic"
            rel="noopener noreferrer"
            target="_blank"
          >
            Львів, вул. Щирецька, 36
          </a>
        </AddressWrapper>
        <Wrapper>
          <PhoneLink href="tel:+380984053772">+38 098 40 53 772</PhoneLink>

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
        </Wrapper>
      </StyledFooter>
    </LayoutContainer>
  );
};

export default Layout;
