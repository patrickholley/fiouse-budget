import React, { useContext, useEffect, useState } from 'react';
import SignIn from './SignIn';
import { get } from '../../lib/utils/utilityFunctions';
import { AppContext } from '../../App';
import { SIGN_IN_REQUEST, FIREBASE_AUTH_INITIALIZE } from '../../lib/constants/actions';

function SignInContainer(props) {
  const {
    dispatch,
    firebase,
    reducerState
  } = useContext(AppContext);

  const [hasInitializedAuthState, setHasInitializedAuthState] = useState(firebase.hasInitializedAuthState);

  useEffect(function() {
    if (!!firebase.auth.currentUser) props.history.push(get(props, "location.state.from", "/"));
  }, [hasInitializedAuthState]);

  function handleSignIn() {
    dispatch({ type: SIGN_IN_REQUEST });
  }

  return (
    <>
      {hasInitializedAuthState && !!firebase.auth.currentUser
        ? <SignIn
            handleSignIn={handleSignIn}
          />
        : <div>Loading . . .</div>
      }
    </>
  );
}

export default SignInContainer;
