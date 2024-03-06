import styled from "styled-components";
export const Container = styled.div`
  padding: 40px 120px;
`;

export const StyledHeading = styled.h2`
  color: #5c8692;
  font-size: 15px;
  line-height: 1.54;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
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
`;

export const StyledDescription = styled.p`
  color: #5c8692;
  text-align: center;
  font-size: 15px;
  line-height: 1.54;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

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
`;

export const Logo = styled.img`
  height: 240px;
  margin: 0 auto;
`;
