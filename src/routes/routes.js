import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../views/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
