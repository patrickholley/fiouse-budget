import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import { FirebaseContext } from '../../lib/utils/FirebaseService';

function PrivateRoute({ component: Component, ...rest }) {
  const firebase = useContext(FirebaseContext);

  return (
    <Route
      {...rest}
      render={props => (
        !!firebase.auth.currentUser
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
