import { useState } from "react";
import { AskQuestion, CardQuestion, Container } from "./styles";

import AccordionButton from "../../assets/AccordionButton.svg";

export const DoubtCard = () => {
  const [active, setActive] = useState();
  return (
    <Container>
      <CardQuestion
        onClick={() => setActive(!active)}
        className={`${active ? "active" : ""}`}
      >
        <AskQuestion>
          <span>O QUE SÃO VITAMINAS E MINERAIS E POR QUE SÃO IMPORTANTES?</span>
          <img src={AccordionButton} alt="accordionButton" />
        </AskQuestion>
        <div className={`${active ? "active" : "AnswerOff"}`}>
          <p>
            Sem as vitaminas, nosso corpo perderia boa parte das funções vitais.
            Contamos com aproximadamente 25 vitaminas e minerais que compõem o
            principal rol de micronutrientes que necessitamos. Mesmo em
            quantidades pequenas, participam de inúmeras reações no metabolismo
            e também nos processos de emagrecimento e ganho de massa magra. Além
            disso, desempenham funções vitais, como contração muscular, formação
            dos ossos e dentes através do cálcio, manutenção do sangue feita
            pela vitamina K, além de participarem no fortalecimento do sistema
            imunológico como a vitamina C, Zinco e Selênio.
          </p>
        </div>
      </CardQuestion>
    </Container>
  );
};
