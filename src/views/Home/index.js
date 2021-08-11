import React from "react";

//assets

import { Slide } from "../../components/Slide/index";
import { Main } from "../../components/main";
import { Header } from "../../components/Header";
import { Department } from "../../components/Department";
import { Doubts } from "../../components/Doubts";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Slide />
      <Main />
      <Department />
      <Doubts />
      <Footer />
    </>
  );
};
