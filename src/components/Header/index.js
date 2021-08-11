import { useState } from "react";
import { ButtonMobile, Container, Navbar } from "./styles";
import Logo from "../../assets/LOGO.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [ulNavActive, setUlNavActive] = useState(false);
  return (
    <Container>
      <img src={Logo} alt="logo imune" />
      <ButtonMobile
        aria-label="Menu"
        className={`${mobileMenu && "mobileButtonActive"}`}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></ButtonMobile>
      {/* <Navbar
        className={`${mobileMenu ? "navMobile" : "nav"} ${
          mobileMenu && "navMobileActive"
        }`}
      >
        <ul>
          <li>
            <Link to="#">Objetivos</Link>
          </li>
          <li
            className={`${ulNavActive ? "ulNavActive" : ""}`}
            onClick={() => setUlNavActive(true)}
          >
            Produtos
            {ulNavActive && (
              <li>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
                <Link to="#">teste</Link>
              </li>
            )}
          </li>
        </ul>
        <button>
          <span>ENTRE EM CONTATO</span>
        </button>
      </Navbar> */}
    </Container>
  );
};
