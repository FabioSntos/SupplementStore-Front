import React from "react";
import {
  Container,
  ContentFooterContainer,
  FooterProducts,
  FooterProductsContainer,
  PrivacyPolicies,
} from "./styles";

import Logo from "../../assets/LOGO.svg";

export const Footer = () => {
  return (
    <Container>
      <ContentFooterContainer>
        <PrivacyPolicies>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <span>©2021</span>
          <span>Política de privacidade</span>
        </PrivacyPolicies>
        <FooterProductsContainer>
          <FooterProducts>
            <strong>Produtos</strong>
            <span>Ácido hialurônico</span>
            <span>Cafeína</span>
            <span>Cálcio</span>
            <span>Ômega 3</span>
            <span>Polivitamínico homem</span>
          </FooterProducts>
          <FooterProducts>
            <strong>Produtos</strong>
            <span>Ácido hialurônico</span>
            <span>Cafeína</span>
            <span>Cálcio</span>
            <span>Ômega 3</span>
            <span>Polivitamínico homem</span>
          </FooterProducts>
          <FooterProducts>
            <strong>Produtos</strong>
            <span>Ácido hialurônico</span>
            <span>Cafeína</span>
            <span>Cálcio</span>
            <span>Ômega 3</span>
            <span>Polivitamínico homem</span>
          </FooterProducts>
        </FooterProductsContainer>
      </ContentFooterContainer>
    </Container>
  );
};
