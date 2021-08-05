import { useCallback, useState } from "react";

import { AnimatePresence } from "framer-motion";

import { ButtonContainer, Container, Li, SlideContainer } from "./styles";

//assets
import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";
import Slide3 from "../../assets/slide3.png";

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
            <Li
              style={{ backgroundImage: `url(${Slide1})` }}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-120%", opacity: 1 }}
            ></Li>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {slide === 2 && (
            <Li
              style={{ backgroundImage: `url(${Slide2})` }}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-120%", opacity: 1 }}
            ></Li>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {slide === 3 && (
            <Li
              style={{ backgroundImage: `url(${Slide3})` }}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-120%", opacity: 1 }}
            />
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
