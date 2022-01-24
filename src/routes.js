import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/home";
import { AccountProfile } from "./components/account/account-profile";

function Routes() {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/account-profile">
        <AccountProfile />
      </Route>
    </Switch>
  );
}

export default Routes;
