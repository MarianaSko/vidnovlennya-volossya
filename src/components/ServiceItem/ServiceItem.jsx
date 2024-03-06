import { register } from "swiper/element/bundle";
import "swiper/css";
import {
  Img,
  InfoWrapper,
  PicWrapper,
  Section,
  StyledDescription,
  StyledItem,
  StyledLink,
  StyledName,
  StyledPrice,
} from "./ServiceItem.styled";

register();

const ServiceItem = ({ obj }) => {
  const { name, descr, price, imgBefore, imgAfter } = obj;
  console.log(Object.values(imgAfter)[0]);

  return (
    <StyledItem>
      <Section>
        <swiper-container speed="500" navigation="true" autoplay="true">
          <swiper-slide>
            <PicWrapper>
              <Img src={Object.values(imgAfter)[0]} alt="car1" />
            </PicWrapper>
          </swiper-slide>
          <swiper-slide>
            <PicWrapper>
              <Img src={Object.values(imgBefore)[0]} alt="car2" />
            </PicWrapper>
          </swiper-slide>
        </swiper-container>
      </Section>
      <InfoWrapper>
        <StyledName>{name}</StyledName>
        <StyledPrice>
          Від <span>{price} грн.</span>
        </StyledPrice>
        <StyledDescription>{descr}</StyledDescription>
        <StyledLink
          href="https://t.me/vidnovlennyavolossya"
          rel="noopener noreferrer"
          target="_blank"
        >
          Консультація та запис
        </StyledLink>
      </InfoWrapper>
    </StyledItem>
  );
};

export default ServiceItem;
