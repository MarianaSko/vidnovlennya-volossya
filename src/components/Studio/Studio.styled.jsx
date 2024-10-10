import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 120px;
  @media only screen and (max-width: 950px) {
    padding: 40px 60px;
  }
  @media only screen and (max-width: 795px) {
    padding: 20px;
  }
  @media only screen and (max-width: 795px) {
    /* overflow: hidden; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    text-align: center;
  }

  img {
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    max-height: 550px;
    @media only screen and (max-width: 950px) {
      max-height: 435px;
    }
    @media only screen and (max-width: 620px) {
      box-shadow: none;
    }
  }
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  background-color: #ebf3f5;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  max-width: 600px;
  padding: 20px;
  border-radius: 8px;
  @media only screen and (max-width: 1180px) {
    p {
      font-size: 16px;
    }
  }
`;

export const StyledHeading = styled.h2`
  color: #141414;
  font-family: Playfair Display;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin-bottom: 24px;
  text-align: center;
  @media only screen and (max-width: 1180px) {
    font-size: 38px;
  }
`;

export const StyledText = styled.p`
  color: #5c8692;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.54;
  letter-spacing: 0.075em;
  margin-bottom: 8px;
  margin-top: 40px;

  span {
    color: #0e8c56;
  }
  @media only screen and (max-width: 1180px) {
    margin-top: 12px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  img {
    flex-grow: 1;
    border-radius: 0;
    max-height: 300px;
  }
`;
