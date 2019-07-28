import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Budget from './Budget';
import Settings from "./Settings";
import SignIn from './SignIn';
import PrivateRoute from '../components/PrivateRoute';
import Navigation from "../components/Navigation";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Navigation>
          <Switch>
            <PrivateRoute exact path="/" component={Budget} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <Redirect to="/" />
          </Switch>
        </Navigation>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
