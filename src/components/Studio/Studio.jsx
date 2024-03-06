import { useMediaQuery } from "react-responsive";
import studio from "../../images/studio.jpg";
import { StyledDescription } from "../../pages/HomePage/HomePage.styled";
import { ImagesWrapper, StyledHeading, StyledText } from "./Studio.styled";
import { Container, StyledDiv } from "./Studio.styled";
import { Wrapper } from "./Studio.styled";
import photo from "../../images/iryna.jpg";

const Studio = () => {
  const isSmallTablet = useMediaQuery({ query: "(max-width: 620px)" });

  return (
    <Container>
      <Wrapper>
        {!isSmallTablet ? (
          <img src={studio} alt="" />
        ) : (
          <ImagesWrapper>
            <img src={studio} alt="" />
            <img src={photo}></img>
          </ImagesWrapper>
        )}

        <StyledDiv>
          <StyledHeading>СТУДІЯ &#34;VIDNOVLENNYA VOLOSSYA&#34;</StyledHeading>
          <StyledDescription>
            ЗАТИШНА СТУДІЯ З ЗЕЛЕНОЮ ЕКОЗОНОЮ, ЗАПАШНОЮ КАВОЮ, WI-FI ТА ДИТЯЧОЮ
            КІМНАТОЮ ДЛЯ ВАШОГО КОМФОРТНОГО ПЕРЕБУВАННЯ У НАС.
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
