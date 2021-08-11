import React from "react";
import {
  ContentFooterContainer,
  Footer,
  FooterProducts,
  FooterProductsContainer,
  PrivacyPolicies,
} from "./styles";

import Logo from "../../assets/LOGO.svg";

//assets

import { Slide } from "../../components/Slide/index";
import { Main } from "../../components/main";
import { Header } from "../../components/Header";
import { Department } from "../../components/Department";
import { Doubts } from "../../components/Doubts";

export const Home = () => {
  return (
    <>
      <Header />
      <Slide />
      <Main />
      <Department />
      <Doubts />
      <Footer>
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
      </Footer>
    </>
  );
};
