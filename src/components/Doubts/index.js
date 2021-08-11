import React from "react";
import { DoubtCard } from "../DoubtCard";
import { ContainerDoubts, ImageDoubtsContainer, Container } from "./styles";

import DoubtImage from "../../assets/DoubtImage.png";

export const Doubts = () => {
  return (
    <Container>
      <ContainerDoubts>
        <h3>Perguntas frequentes</h3>
        <DoubtCard />
        <DoubtCard />
        <DoubtCard />
        <DoubtCard />
        <DoubtCard />
      </ContainerDoubts>
      <ImageDoubtsContainer>
        <img src={DoubtImage} alt="imagem" />
      </ImageDoubtsContainer>
    </Container>
  );
};
