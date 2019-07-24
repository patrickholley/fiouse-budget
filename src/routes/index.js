import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Budget from './Budget';
import SignIn from './SignIn';
import PrivateRoute from '../components/PrivateRoute';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Budget} />
        <Route exact path="/signin" component={SignIn} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
