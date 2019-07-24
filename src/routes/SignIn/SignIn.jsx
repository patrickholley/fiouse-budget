import React from 'react';
import "./SignIn.scss";

function SignIn(props) {
  return (
    <div className="sign-in">
      <button
        onClick={props.handleSignIn}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
