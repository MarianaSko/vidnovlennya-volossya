import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const OutletContainer = styled.div`
  flex: 1;
`;

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

  @media only screen and (max-width: 1000px) {
    padding: 0 28px;
  }
  @media only screen and (max-width: 720px) {
    padding: 0 20px;
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
  @media only screen and (max-width: 720px) {
    gap: 40px;
  }
`;

export const RightContainer = styled.a`
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

    @media only screen and (max-width: 820px) {
      font-size: 14px;
    }
  }

  p {
    color: #ebf3f5;
    @media only screen and (max-width: 820px) {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 1080px) {
    padding: 16px 28px;
  }
  @media only screen and (max-width: 720px) {
    padding: 16px 20px;
  }
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media only screen and (max-width: 720px) {
    gap: 16px;
  }
`;

export const AddressWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media only screen and (max-width: 720px) {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: end;
  }
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
