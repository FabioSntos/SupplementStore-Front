import { Container } from "./styles";
import slide1 from "../../assets/slide1.png";

import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <Container>
      <h1>CONHEÇA NOSSOS PRODUTOS</h1>
      <div className="productContainer">
        <div className="product">
          <img src={slide1} alt="test" />
          <div className="productName">
            <h3>VITAMINA C</h3>
            <Link to="/product">SAIBA MAIS</Link>
          </div>
        </div>
        <div className="product">
          <img src={slide1} alt="test" />
          <div className="productName">
            <h3>VITAMINA C</h3>
            <Link to="/product">SAIBA MAIS</Link>
          </div>
        </div>
        <div className="product">
          <img src={slide1} alt="test" />
          <div className="productName">
            <h3>VITAMINA C</h3>
            <Link to="/product">SAIBA MAIS</Link>
          </div>
        </div>
        <div className="product">
          <img src={slide1} alt="test" />
          <div className="productName">
            <h3>VITAMINA C</h3>
            <Link to="/product">SAIBA MAIS</Link>
          </div>
        </div>
        <div className="product">
          <img src={slide1} alt="test" />
          <div className="productName">
            <h3>VITAMINA C</h3>
            <Link to="/product">SAIBA MAIS</Link>
          </div>
        </div>
        <div className="product">
          <img src={slide1} alt="test" />
          <div className="productName">
            <h3>VITAMINA C</h3>
            <Link to="/product">SAIBA MAIS</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
