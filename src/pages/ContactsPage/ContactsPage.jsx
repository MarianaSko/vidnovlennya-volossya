import { useMediaQuery } from "react-responsive";
import ContactsItem from "../../components/Contacts/ContactsItem";
import { StyledHeading } from "../HomePage/HomePage.styled";
import {
  ChannelWrapper,
  ContactsContainer,
  Divider,
  Wrapper,
} from "./ContactsPage.styled";
import { SlLocationPin } from "react-icons/sl";
import Links from "../../components/Links/Links";
import { BsTelephone } from "react-icons/bs";
import { IoShareSocialOutline } from "react-icons/io5";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";

const ContactsPage = () => {
  const isVisibleLinks = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <Wrapper>
      {!isVisibleLinks && <Links />}
      <StyledHeading>Наші контакти</StyledHeading>
      <ContactsContainer>
        <ContactsItem
          title="Локація"
          img={<SlLocationPin color=" #0e8c56" size={30} />}
        >
          <a
            href="https://www.google.com/maps?q=%D0%A1%D1%82%D1%83%D0%B4%D1%96%D1%8F+%E2%80%9CVidnovlennya+volossya%E2%80%9D,+%D0%A2%D0%BE%D1%80%D0%B3%D1%96%D0%B2%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0+%D0%BB%D1%96%D0%BD%D1%96%D1%8F,+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A9%D0%B8%D1%80%D0%B5%D1%86%D1%8C%D0%BA%D0%B0,+36,+%D0%B2%D1%83%D0%BB.+%D0%97%D0%B0%D1%85%D1%96%D0%B4%D0%BD%D0%B0,+5,+%D0%9F%D0%B0%D0%B2%D1%96%D0%BB%D1%8C%D0%B9%D0%BE%D0%BD,+86%D0%B0,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000&ftid=0x473ae74c45aaa9c9:0xfbe48406899acf82&entry=gps&lucs=,94208285,94224819,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTE3LjEuNjI5MjAYACCenQoqUSw5NDIwODI4NSw5NDIyNDgxOSw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICVUE%3D&g_st=ic"
            rel="noopener noreferrer"
            target="_blank"
          >
            м.Львів, вул. Щирецька, 36
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.671475149814!2d23.9737793!3d49.8110437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae74c45aaa9c9%3A0xfbe48406899acf82!2z0KHRgtGD0LTRltGPIOKAnFZpZG5vdmxlbm55YSB2b2xvc3N5YeKAnQ!5e0!3m2!1suk!2sua!4v1731851736107!5m2!1suk!2sua"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: "100%",
              height: "250px",
              border: "none",
              borderRadius: "10px", // Optional: rounded corners
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Optional: shadow effect
            }}
          ></iframe>
        </ContactsItem>
        <ContactsItem
          title="Контактний номер"
          img={<BsTelephone color=" #0e8c56" size={30} />}
        >
          <a href="tel:+380984053772" rel="noopener noreferrer" target="_blank">
            +38 098 40 53 772
          </a>
          <Divider />

          <ChannelWrapper>
            <p>
              Підписуйтесь на наш канал, де ви можете отримати знижки та догляд
              за вашим волоссям 💚
            </p>
            <a
              href="https://t.me/maysternyavidnovlennyavolossya"
              rel="noopener noreferrer"
              target="_blank"
            >
              <PiTelegramLogoLight
                color=" #0e8c56"
                size={30}
                cursor="pointer"
              ></PiTelegramLogoLight>
              МАЙСТЕРНЯ ВІДНОВЛЕННЯ ВОЛОССЯ
            </a>
          </ChannelWrapper>
        </ContactsItem>
        <ContactsItem
          title="Соціальні мережі"
          img={<IoShareSocialOutline color=" #0e8c56" size={30} />}
        >
          <a
            href="https://t.me/vidnovlennyavolossya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <PiTelegramLogoLight
              color=" #0e8c56"
              size={30}
              cursor="pointer"
            ></PiTelegramLogoLight>
            Telegram
          </a>
          <a
            href="https://www.instagram.com/vidnovlennyavolossya/?igshid=MzRlODBiNWFlZA%3D%3D"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram
              color=" #0e8c56"
              size={30}
              cursor="pointer"
            ></FaInstagram>
            Instagram
          </a>
          <a
            href="https://www.facebook.com/Vidnovlennyavolossya"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LiaFacebookF
              color=" #0e8c56"
              size={30}
              cursor="pointer"
            ></LiaFacebookF>
            Facebook
          </a>
        </ContactsItem>
      </ContactsContainer>
    </Wrapper>
  );
};

export default ContactsPage;
