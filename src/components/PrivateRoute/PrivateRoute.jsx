import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import { AppContext } from '../../App';

function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useContext(AppContext);

  return (
    <Route
      {...rest}
      render={props => (
        !!state.auth.user
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
      )}
    />
  );
}

export default PrivateRoute;
