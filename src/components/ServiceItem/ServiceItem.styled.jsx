import styled from "styled-components";

export const PicWrapper = styled.div`
  margin: 0 auto;
`;

export const Img = styled.img`
  height: 600px;
  object-fit: cover;
  margin: 0 auto;
  max-width: 450px;
`;

export const Section = styled.section`
  /* margin-top: 100px; */
  max-width: 600px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const StyledName = styled.h3`
  color: #141414;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const StyledPrice = styled.p`
  color: #555;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.65;
  letter-spacing: 0.02em;

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
`;

export const StyledLink = styled.a`
  margin: 0 auto;
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
`;
