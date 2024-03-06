import { NavLink } from "react-router-dom";
import { Backdrop, LinksWrapper, MenuContainer, Socials } from "./Menu.styled";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";

const Menu = ({ close }) => {
  return (
    <Backdrop onClick={() => close(false)}>
      <MenuContainer>
        <LinksWrapper>
          <NavLink to="/" onClick={() => close(false)}>
            Головна
          </NavLink>
          <NavLink to="services" onClick={() => close(false)}>
            Послуги
          </NavLink>
          <NavLink to="contacts" onClick={() => close(false)}>
            Контакти
          </NavLink>
        </LinksWrapper>
        <Socials>
          <a
            href="https://t.me/vidnovlennyavolossya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <PiTelegramLogoLight
              color="#1e705c"
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
              color="#1e705c"
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
              color="#1e705c"
              size={40}
              cursor="pointer"
            ></LiaFacebookF>
          </a>
        </Socials>
      </MenuContainer>
    </Backdrop>
  );
};

export default Menu;
