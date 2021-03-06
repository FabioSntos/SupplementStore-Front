import styled from "styled-components";

import { motion } from "framer-motion";

export const Container = styled.div`
  overflow-x: hidden;
  height: 500px;
  .teste2 {
    background-color: #fca;
  }
`;

export const Li = styled(motion.li)`
  position: absolute;
  background-color: #000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  .liContent {
    max-width: 1120px;
    margin: 0 auto;
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h3 {
    color: #fff;
    font-family: "Nunito";
    font-size: 30px;
    strong {
      font-weight: 900;
      font-size: 45px;
    }
  }
`;

export const SlideContainer = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  img {
    position: absolute;
    top: 15%;
    right: 41%;
    width: 51%;
  }
  h2 {
    position: absolute;
    color: #111;
    top: 40%;
    right: 41%;
    width: 348px;
    height: 300px;
    font-size: 22px;
    margin: 0 auto;
  }
  button {
    position: absolute;
    bottom: 22%;
    right: 49%;
    background: #ffd500;
    padding: 5px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 16px;
    width: 296px;
    height: 42px;
    box-shadow: 4px 4px #11111114;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ButtonContainer = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  button {
    width: 15px;
    height: 15px;
    border-radius: 20px;
    border: none;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: #323232;
    border-color: #323232;
    cursor: pointer;
    &.active {
      background-color: #ffd500;
    }
  }
`;
