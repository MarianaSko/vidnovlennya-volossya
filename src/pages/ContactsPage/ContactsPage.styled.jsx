import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 60px 40px 120px;
  gap: 40px;

  @media only screen and (max-width: 1000px) {
    padding: 20px 28px;
    gap: 20px;
  }
  @media only screen and (max-width: 440px) {
    padding: 20px 16px;
  }
`;

export const ContactsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
  }
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #0e8c56;
`;

export const ChannelWrapper = styled.div`
  margin-top: auto;
`;
