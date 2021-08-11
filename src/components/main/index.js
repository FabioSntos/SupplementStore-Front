import { Container } from "./styles";
import slide1 from "../../assets/slide1.png";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export const Main = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data.products));
  }, []);

  return (
    <Container>
      <h1>CONHEÇA NOSSOS PRODUTOS</h1>
      <div className="productContainer">
        {products &&
          products.map((product) => {
            return (
              <div
                className="product"
                key={product.id}
                style={{ backgroundColor: product.color }}
              >
                <img src={product.image} alt="test" />
                <div className="productName">
                  <h3>{product.title}</h3>
                  <Link to={`/product/${product.id}`}>SAIBA MAIS</Link>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};
