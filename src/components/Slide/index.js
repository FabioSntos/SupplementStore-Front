import { useCallback, useState } from "react";

import { AnimatePresence } from "framer-motion";

import {
  ButtonContainer,
  Container,
  Li,
  SlideContainer,
  TitleContainer,
} from "./styles";

//assets
import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";
import Slide3 from "../../assets/slide3.png";
import Logo from "../../assets/LOGO.svg";

export const Slide = () => {
  const [slide, setSlide] = useState(1);

  const handleSlide = useCallback((index) => {
    setSlide(index);
  }, []);

  return (
    <Container>
      <SlideContainer>
        <AnimatePresence>
          {slide === 1 && (
            <>
              <Li
                style={{ background: `url(${Slide1})` }}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-120%", opacity: 1 }}
              ></Li>
              <TitleContainer>
                <img src={Logo} alt="logo imune" />

                <h2>
                  Qual é o seu objetivo? Temos o conjunto de vitaminas ideal
                  para você bem aqui!
                </h2>

                <button>Clique aqui e escolha por obejtivo</button>
              </TitleContainer>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {slide === 2 && (
            <>
              <Li
                style={{ background: `url(${Slide2})` }}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-120%", opacity: 1 }}
              ></Li>
              <TitleContainer>
                <h2>
                  IMUNE todo mês! Assinando um de nossos planos, você economiza
                  e recebe seu suplemento em casa.
                </h2>

                <button>ENTRE EM CONTATO</button>
              </TitleContainer>
            </>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {slide === 3 && (
            <>
              <Li
                style={{ background: `url(${Slide3})` }}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-120%", opacity: 1 }}
              />
              <TitleContainer>
                <h2>
                  Melhorar a imunidade, manter a beleza em dia ou melhorar seu
                  desempenho no esporte?
                </h2>

                <button>Clique aqui e escolha por obejtivo</button>
              </TitleContainer>
            </>
          )}
        </AnimatePresence>

        <ButtonContainer>
          <button
            className={`${slide === 1 && "active"}`}
            onClick={() => handleSlide(1)}
          ></button>
          <button
            className={`${slide === 2 && "active"}`}
            onClick={() => handleSlide(2)}
          ></button>
          <button
            className={`${slide === 3 && "active"}`}
            onClick={() => handleSlide(3)}
          ></button>
        </ButtonContainer>
      </SlideContainer>
    </Container>
  );
};
