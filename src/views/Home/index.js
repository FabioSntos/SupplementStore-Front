import React, { useState } from "react";
import { ButtonMobile, Header } from "./styles";

//assets
import Logo from "../../assets/LOGO.svg";
import { Slide } from "../../components/Slide/index";

export const Home = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <Header>
        <img src={Logo} alt="logo imune" />
        <ButtonMobile
          aria-label="Menu"
          className={`${mobileMenu && "mobileButtonActive"}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></ButtonMobile>
      </Header>
      <Slide />
    </>
  );
};
