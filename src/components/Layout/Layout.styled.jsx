import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e705c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  a {
    padding: 16px 0;
    text-transform: uppercase;
    color: #ebf3f5;
    font-weight: 700;

    &:hover,
    &:focus {
      color: #f0c2d2;
    }
  }
  @media only screen and (max-width: 950px) {
    padding: 0 80px;
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 50px;
  flex-shrink: 0;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 20px;
    height: 28px;
    stroke: #f0c2d2;
  }
`;

export const StyledFooter = styled.div`
  background-color: #1e705c;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 16px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #ebf3f5;

    &:hover,
    &:focus {
      color: #f0c2d2;
    }

    svg {
      cursor: pointer;
    }
  }

  p {
    color: #ebf3f5;
  }
  @media only screen and (max-width: 950px) {
    padding: 16px 80px;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
