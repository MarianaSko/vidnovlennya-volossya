import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: rgba(14, 140, 86, 0.05);
  padding: 16px;
  border: 1px solid #0e8c56;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  a {
    color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover,
    &:focus {
      color: #0e8c56;
    }
  }

  p {
    color: #555;
    font-size: 19px;

    @media only screen and (max-width: 950px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 620px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 460px) {
      font-size: 16px;
    }
  }
`;

export const ItemTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #141414;
  font-size: 20px;
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
