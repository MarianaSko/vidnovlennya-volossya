import backgroundImg from "../../images/background.png";
import photo from "../../images/iryna.jpg";
import {
  HomePageContainer,
  StyledBackground,
  StyledBtn,
  StyledDescription,
  StyledDiv,
  StyledFrame,
  StyledHeading,
  StyledPhoto,
  StyledText,
  TextWrapper,
  Wrapper,
} from "./HomePage.styled";
import Studio from "../../components/Studio/Studio";
import { useNavigate } from "react-router-dom";
import Links from "../../components/Links/Links";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const navigate = useNavigate();
  console.log(screen.width);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });

  return (
    <div>
      <Wrapper>
        <HomePageContainer>
          <Links />
          <TextWrapper>
            <StyledHeading>
              Студія &#34;VIDNOVLENNYA VOLOSSYA &#34;
            </StyledHeading>
            <StyledText>
              Відновлюємо волосся з любов&apos;ю до своїх клієнтів💚{" "}
            </StyledText>
            <StyledDescription>
              З 2019 року наша студія успішно надає послуги з відновлення
              волосся усіх видів у м. Львів. Саме з нами можете не хвилюватись
              про ваше волосся, бо ми дбаємо про кожного клієнта, як про себе.
            </StyledDescription>
            <StyledBtn onClick={() => navigate("/services")}>
              Переглянути послуги
            </StyledBtn>
          </TextWrapper>
        </HomePageContainer>
        {!isTabletOrMobile ? (
          <StyledDiv>
            <StyledFrame>
              <StyledBackground>
                <img src={backgroundImg} alt="Фото Ірини Лащенко" />
              </StyledBackground>
            </StyledFrame>
          </StyledDiv>
        ) : (
          <StyledPhoto src={photo}></StyledPhoto>
        )}
      </Wrapper>
      <Studio></Studio>
    </div>
  );
};

export default HomePage;
