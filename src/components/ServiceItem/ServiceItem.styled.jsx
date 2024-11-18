import styled from "styled-components";

export const PicWrapper = styled.div`
  margin: 0 auto;
`;

export const Img = styled.img`
  object-fit: cover;
  margin: 0 auto;
  max-width: 450px;
  @media only screen and (max-width: 1200px) {
    max-width: 380px;
  }
  @media only screen and (max-width: 880px) {
    max-width: 320px;
  }
  @media only screen and (max-width: 720px) {
    max-width: 240px;
  }
  @media only screen and (max-width: 600px) {
    max-width: 180px;
  }
`;

export const Section = styled.section`
  width: 600px;
  z-index: 0;
  @media only screen and (max-width: 1200px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 880px) {
    max-width: 420px;
  }
  @media only screen and (max-width: 720px) {
    max-width: 340px;
  }

  @media only screen and (max-width: 680px) {
    margin-left: -24px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
  @media only screen and (max-width: 400px) {
    max-width: 280px;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media only screen and (max-width: 1000px) {
    gap: 8px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 16px;
    border: 1px solid #0e8c56;
    border-radius: 12px;
    background-color: rgba(14, 140, 86, 0.02);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media only screen and (max-width: 1200px) {
    gap: 8px;
  }
  @media only screen and (max-width: 640px) {
    gap: 4px;
  }
`;

export const StyledName = styled.h3`
  color: #141414;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 680px) {
    font-size: 16px;
  }
`;

export const StyledPrice = styled.p`
  color: #555;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.65;
  letter-spacing: 0.02em;
  @media only screen and (max-width: 680px) {
    font-size: 16px;
  }

  span {
    font-weight: 800;
    color: #0e8c56;
  }
`;

export const StyledDescription = styled.p`
  color: #555;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.65;
  letter-spacing: 0.36px;
  text-align: justify;
  @media only screen and (max-width: 900px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 12px;
  }
`;

export const StyledLink = styled.a`
  margin: 0 auto;
  border: 2px solid #0e8c56;
  border-radius: 24px;
  color: #0e8c56;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  padding: 16px 20px;

  &:hover,
  &:focus {
    background-color: #0e8c56;
    color: #fff;
  }

  @media only screen and (max-width: 1200px) {
    padding: 8px 20px;
    font-size: 20px;
  }
  @media only screen and (max-width: 880px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
