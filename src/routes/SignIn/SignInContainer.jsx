import React, { useContext, useEffect } from 'react';
import { FirebaseContext } from "../../lib/utils/FirebaseService";
import SignIn from './SignIn';

function SignInContainer(props) {
  const firebase = useContext(FirebaseContext);

  useEffect(function() {
    console.log("updated?", firebase.user);
  }, firebase.user);

  function handleSignIn() {
    firebase.signIn();
  }

  return (
    <SignIn
      handleSignIn={handleSignIn}
    />
  );
}

export default SignInContainer;
