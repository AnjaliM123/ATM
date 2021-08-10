import React from "react";

import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Account from "./components/Account";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Summary from "./components/Summary";
import NotFound from "./components/NotFound";

export const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Summary} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
