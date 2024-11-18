import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1;
`;

export const MenuContainer = styled.div`
  height: 100%;
  width: 75vw;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  padding: 40px 36px;
  background-color: rgba(240, 194, 210, 0.85);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    color: #1e705c;

    &:hover,
    &:focus {
      color: #fff;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 30px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
`;
