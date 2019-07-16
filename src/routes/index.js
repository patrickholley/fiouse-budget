import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Budget from './Budget';
import SignIn from './SignIn';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Budget />} />
        <Route exact path="/signin" render={() => <SignIn />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
