import styled from "styled-components";

export const Header = styled.header``;


export const Footer = styled.footer`
  width: 100%;
  background-color: #323232;
  min-height: 380px;
  height: auto;
  display: flex;
  align-items: center;
  color: #ffd500;
  @media screen and (max-width: 1000px) {
    margin: 0 auto;
    text-align: center;
  }
`;

export const ContentFooterContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    padding: 50px 0;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
  }
`;

export const PrivacyPolicies = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  div img {
    height: 30px;
  }
`;

export const FooterProductsContainer = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    justify-content: space-around;
  }
`;

export const FooterProducts = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    padding: 15px 0;
  }
`;
