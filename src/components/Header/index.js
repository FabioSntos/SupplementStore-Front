import { useState } from "react";
import { ButtonMobile, Container } from "./styles";
import Logo from "../../assets/LOGO.svg";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <Container>
      <img src={Logo} alt="logo imune" />
      <ButtonMobile
        aria-label="Menu"
        className={`${mobileMenu && "mobileButtonActive"}`}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></ButtonMobile>
    </Container>
  );
};
