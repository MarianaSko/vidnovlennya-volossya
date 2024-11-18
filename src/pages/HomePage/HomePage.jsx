import backgroundImg from "../../images/main_photo.png";
import photo from "../../images/photo.jpg";

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
  TabletWrapper,
  TextWrapper,
  Wrapper,
} from "./HomePage.styled";
import Studio from "../../components/Studio/Studio";
import { useNavigate } from "react-router-dom";
import Links from "../../components/Links/Links";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });

  return (
    <div>
      <Wrapper>
        <TabletWrapper>
          <HomePageContainer>
            <Links />
            <TextWrapper>
              <StyledHeading>
                Студія &#34;VIDNOVLENNYA VOLOSSYA&#34;
              </StyledHeading>
              <StyledText>Відновлюємо волосся з любов&apos;ю 💚</StyledText>
              <StyledDescription>
                Уже п&apos;ять років наша студія надає послуги з відновлення
                волосся у Львові. Саме з нами ви можете не хвилюватись про свою
                зачіску, адже ми дбаємо про кожного клієнта, як про себе.
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
        </TabletWrapper>
        <Studio></Studio>
      </Wrapper>
    </div>
  );
};

export default HomePage;
