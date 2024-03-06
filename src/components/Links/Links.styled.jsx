import styled from "styled-components";

export const LinksWrapper = styled.div`
  transform: rotate(-90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: fixed;
  left: -12%;
  top: 54%;
  a {
    color: #0e8c56;
    font-weight: 700;
    font-size: 20px;
    &:hover,
    &:focus {
      color: #1e705c;
    }
  }
  @media only screen and (max-width: 1000px) {
    position: absolute;
    left: -15%;
  }
  @media only screen and (max-width: 795px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 60px;
  background-color: #1e705c;
  transform: rotate(-90deg);
  margin-right: 40px;
  @media only screen and (max-width: 1180px) {
    margin-right: 0;
  }
`;
