import { useMediaQuery } from "react-responsive";
import stud from "../../images/studio_portrait.jpg";
import studioAdd1 from "../../images/studio_new.jpg";
import studioAdd2 from "../../images/studio_new1.jpg";
import team from "../../images/team.jpg";

import { StyledDescription } from "../../pages/HomePage/HomePage.styled";
import { Section, StyledHeading, StyledText } from "./Studio.styled";
import { Container, StyledDiv } from "./Studio.styled";
import { Wrapper } from "./Studio.styled";
import photo from "../../images/photo_landscape.jpg";
import { PicWrapper } from "../ServiceItem/ServiceItem.styled";
import "swiper/css";

const Studio = () => {
  const isSmallTablet = useMediaQuery({ query: "(max-width: 720px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 460px)" });

  return (
    <Container>
      <Wrapper>
        {!isSmallTablet ? (
          <img src={stud} alt="" />
        ) : (
          // <ImagesWrapper>
          //   <img src={studio} alt="" />
          //   <img src={photo}></img>
          // </ImagesWrapper>
          <Section>
            <swiper-container
              speed="500"
              navigation="true"
              autoplay="true"
              style={{
                "--swiper-theme-color": "#0e8c56",
                "--swiper-navigation-color": "#0e8c56",
                "--swiper-navigation-size": "28px",
              }}
            >
              <swiper-slide>
                <PicWrapper>
                  <img src={studioAdd1} alt="card1" />
                </PicWrapper>
              </swiper-slide>
              <swiper-slide>
                <PicWrapper>
                  <img src={studioAdd2} alt="card2" />
                </PicWrapper>
              </swiper-slide>
              <swiper-slide>
                <PicWrapper>
                  <img src={team} alt="card3" />
                </PicWrapper>
              </swiper-slide>
              {isSmallScreen && (
                <swiper-slide>
                  <PicWrapper>
                    <img src={photo} alt="card4" />
                  </PicWrapper>
                </swiper-slide>
              )}
            </swiper-container>
          </Section>
        )}

        <StyledDiv>
          <StyledHeading>СТУДІЯ &#34;VIDNOVLENNYA VOLOSSYA&#34;</StyledHeading>
          <StyledDescription>
            Затишна студія зі смачною кавою, екозоною та WI-Fi - запорука вашого
            комфортного перебування у нас. Працюємо лише за попереднім записом.
          </StyledDescription>
          <StyledText>
            <span>Ми завжди раді нашим відвідувачам!</span>
          </StyledText>
          <StyledText>
            Працюємо лише за попереднім записом з<span> 8:00</span> до{" "}
            <span>21:00</span>
          </StyledText>
        </StyledDiv>
      </Wrapper>
    </Container>
  );
};

export default Studio;
