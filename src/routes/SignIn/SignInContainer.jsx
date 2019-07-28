import React, { useContext, useLayoutEffect } from 'react';
import SignIn from './SignIn';
import { get } from '../../lib/utils/utilityFunctions';
import { AppContext } from '../../App';
import { SIGN_IN_REQUEST } from '../../lib/constants/actions';

function SignInContainer(props) {
  const {
    dispatch,
    state
  } = useContext(AppContext);

  const { user } = state.auth;

  useLayoutEffect(function() {
    if (!!user) props.history.push(get(props, "location.state.from", "/"));
  }, [user]);

  function handleSignIn() {
    dispatch({ type: SIGN_IN_REQUEST });
  }

  return (
    <SignIn
      handleSignIn={handleSignIn}
    />
  );
}

export default SignInContainer;
