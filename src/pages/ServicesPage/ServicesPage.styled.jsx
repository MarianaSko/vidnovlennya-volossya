import styled from "styled-components";
export const Container = styled.div`
  padding: 40px 120px;
  @media only screen and (max-width: 1200px) {
    padding-right: 60px;
  }
  @media only screen and (max-width: 1000px) {
    padding: 20px 28px;
  }
  @media only screen and (max-width: 440px) {
    padding: 20px 16px;
  }
`;

export const StyledHeading = styled.h2`
  color: #5c8692;
  font-size: 16px;
  line-height: 1.54;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  @media only screen and (max-width: 440px) {
    font-size: 14px;
  }
`;

export const StyledText = styled.p`
  color: #141414;
  text-align: center;
  font-family: "Playfair Display";
  font-size: 45px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.01em;
  max-width: 660px;
  @media only screen and (max-width: 1000px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 440px) {
    font-size: 20px;
  }
`;

export const StyledDescription = styled.p`
  color: #5c8692;
  text-align: center;
  font-size: 15px;
  line-height: 1.54;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }

  span {
    color: #0e8c56;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 40px;
  @media only screen and (max-width: 680px) {
    margin-top: 20px;
    gap: 32px;
  }
`;

export const Logo = styled.img`
  height: 240px;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const LogoSm = styled.img`
  height: 120px;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }
  @media only screen and (max-width: 420px) {
    height: 80px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
`;
