import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Budget from './Budget';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/budget" render={() => <Budget />} />
        <Redirect to="/budget" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
