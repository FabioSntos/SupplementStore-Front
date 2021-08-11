import React from "react";
import ReactDOM from "react-dom";

import { createServer, Model } from "miragejs";

import { Router } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

createServer({
  models: {
    product: Model,
  },
  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: 1,
          title: "VITAMINA C",
          color: "#F18A56",
          image: "https://i.postimg.cc/s28SZc6q/1.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 2,
          title: "VITAMINA D3",
          color: "#DEE45C",
          image: "https://i.postimg.cc/1tqF0qbt/2.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 3,
          title: "ÁCIDO HIALURÔNICO",
          color: "#CD5B99",
          image: "https://i.postimg.cc/hv876qDR/3.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 4,
          title: "CÁLCIO",
          color: "#4174B5",
          image: "https://i.postimg.cc/zvYgxf1k/4.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 5,
          title: "ÔMEGA 3",
          color: "#F7D441",
          image: "https://i.postimg.cc/057mb7pX/5.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 6,
          title: "ZINCO QUELATO",
          color: "#E79DC1",
          image: "https://i.postimg.cc/7YDz7b9H/6.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 7,
          title: "POLIVITAMÍNICO HOMEM",
          color: "#4073B4",
          image: "https://i.postimg.cc/P5VvByjJ/7.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
        {
          id: 8,
          title: "POLIVITAMÍNICO MULHER",
          color: "#ED767A",
          image: "https://i.postimg.cc/jSSJg9BB/8.png",
          createdAt: new Date("2021-05-10 21:0  0:00"),
        },
        {
          id: 9,
          title: "CAFEÍNA",
          color: "#E53E52",
          image: "https://i.postimg.cc/Hs2ytHvQ/9.png",
          createdAt: new Date("2021-05-10 21:00:00"),
        },
      ],
    });
  },

  routes() {
    //rotas
    this.namespace = "api";

    this.get("/products", () => {
      return this.schema.all("product");
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
