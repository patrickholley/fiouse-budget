import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Budget from './Budget';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Budget />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
