import React, { useContext } from "react";
import Settings from "./Settings";
import { SIGN_OUT_REQUEST } from "../../lib/constants/actions";
import { AppContext } from "../../App";

function SettingsContainer(props) {
  const { dispatch, state } = useContext(AppContext);

  function handleRedirect(path) {
    props.history.push(path);
  }

  function handleSignOut() {
    dispatch({ type: SIGN_OUT_REQUEST });
  }

  return (
    <Settings handleRedirect={handleRedirect} handleSignOut={handleSignOut} />
  );
}

export default SettingsContainer;
