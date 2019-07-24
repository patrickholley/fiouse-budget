import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from "../../lib/utils/FirebaseService";
import SignIn from './SignIn';
import { get } from '../../lib/utils/utilityFunctions';

function SignInContainer(props) {
  const firebase = useContext(FirebaseContext);

  const [hasInitializedAuthState, setHasInitializedAuthState] = useState(firebase.hasInitializedAuthState);

  window.addEventListener("authStateChange", () => {
    setHasInitializedAuthState(true);
  });

  useEffect(function() {
    if (!!firebase.auth.currentUser) props.history.push(get(props, "location.state.from", "/"));
  }, [hasInitializedAuthState]);

  function handleSignIn() {
    firebase.signIn();
  }

  return (
    <>
      {hasInitializedAuthState
        ? <SignIn
            handleSignIn={handleSignIn}
          />
        : <div>Loading . . .</div>
      }
    </>
  );
}

export default SignInContainer;
