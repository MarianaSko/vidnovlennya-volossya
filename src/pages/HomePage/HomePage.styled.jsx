import styled from "styled-components";

export const HomePageContainer = styled.div`
  padding: 120px 120px;
  @media only screen and (max-width: 950px) {
    padding-top: 40px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 795px) {
    padding-left: 80px;
  }
`;

export const StyledDiv = styled.div`
  background-color: #1e705c;
  position: absolute;
  top: 80px;
  right: 0px;
  z-index: -1;
  height: 100vh;
  min-width: 40%;
`;

export const StyledFrame = styled.div`
  width: 500px;
  height: 500px;
  border: 10px solid #ebf3f5;
  margin-top: 100px;
  margin-left: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1180px) {
    margin-left: -50px;
  }
`;

export const StyledBackground = styled.div`
  min-width: 400px;
  max-height: 400px;
  background-color: #0e8c56;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    max-height: 680px;
  }
`;

export const StyledHeading = styled.h1`
  color: #5c8692;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: 0.075em;
  margin-bottom: 8px;
  @media only screen and (max-width: 795px) {
    font-size: 14px;
  }
`;

export const StyledText = styled.p`
  color: #141414;
  font-family: Playfair Display;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin-bottom: 24px;
  @media only screen and (max-width: 950px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 795px) {
    font-size: 28px;
  }
`;

export const StyledDescription = styled.p`
  color: #555;
  font-size: 19px;
  line-height: 1.7;
  @media only screen and (max-width: 950px) {
    font-size: 16px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const SectionContainer = styled.div``;

export const StyledBtn = styled.button`
  margin-top: 24px;
  border: 2px solid #0e8c56;
  border-radius: 24px;
  color: #0e8c56;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  padding: 16px 40px;

  &:hover,
  &:focus {
    background-color: #0e8c56;
    color: #fff;
  }
  @media only screen and (max-width: 950px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 795px) {
    padding: 8px 20px;
  }
`;

export const StyledPhoto = styled.img`
  margin-top: 40px;
  margin-right: 60px;
  max-height: 420px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;
