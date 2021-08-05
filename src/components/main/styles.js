import styled from "styled-components";

export const Container = styled.main`
  margin: 100px auto;
  width: 80%;

  .productContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }

  .product {
    max-width: 300px;
    width: 100%;
    border-radius: 40px;
    height: 400px;
    background-color: #fb1;
    border: 4px solid #fff;

    img {
      width: 100%;
      height: 50%;
      border-radius: 40px 40px 0 0;
      border-bottom: 8px solid #fff;
    }

    .productName {
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;

      a {
        margin-top: 30px;
        width: 70%;
        height: 50px;
        background-color: #323232;

        box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;
        color: #f5f5f5;
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
  @media screen and (max-width: 805px) {
    text-align: center;
    .productContainer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 30px;
    }
  }
`;
