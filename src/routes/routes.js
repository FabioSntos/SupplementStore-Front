import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Product } from "../views/Product";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};
