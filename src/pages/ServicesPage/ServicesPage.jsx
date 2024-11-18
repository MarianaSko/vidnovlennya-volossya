import {
  Container,
  HeadingWrapper,
  Logo,
  LogoSm,
  StyledDescription,
  StyledHeading,
  StyledList,
  StyledText,
  Wrapper,
} from "./ServicesPage.styled";
import { useMediaQuery } from "react-responsive";
import { servicesList } from "../../components/ServiceItem/servicesList";
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import Links from "../../components/Links/Links";
import logo from "../../images/logo_full.png";

const ServicesPage = () => {
  const isVisibleLinks = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <Container>
      {!isVisibleLinks && <Links />}
      <Logo src={logo} alt="" />
      <HeadingWrapper>
        <StyledHeading>Наші послуги</StyledHeading>
        {isVisibleLinks ? (
          <Wrapper>
            <LogoSm src={logo} alt="" />
            <StyledText>Чудовий результат за дві години</StyledText>
          </Wrapper>
        ) : (
          <StyledText>Чудовий результат за дві години</StyledText>
        )}
        <StyledDescription>
          МАЙСТРИНІ СТУДІЇ <span>&#34;VIDNOVLENNYA VOLOSSYA&#34; </span> ЗНАЮТЬ,
          ЯК ПРАВИЛЬНО ПІДІБРАТИ ТА ЯКІСНО ВИКОНАТИ ПРОЦЕДУРИ ДЛЯ ВАШОГО
          ВОЛОССЯ. МИ ВИКОРИСТОВУЄМО ЛИШЕ СЕРТИФІКОВАНІ ПРОФЕСІЙНІ ЗАСОБИ
          <span> PREMIUM-КЛАСУ</span>.
        </StyledDescription>
      </HeadingWrapper>
      <StyledList>
        {servicesList.map((item) => (
          <ServiceItem key={item.id} obj={item}></ServiceItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default ServicesPage;
