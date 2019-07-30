import React, { useContext, useEffect } from "react";
import Settings from "./Settings";
import {
  SIGN_OUT_REQUEST,
  GET_BUDGETS_REQUEST
} from "../../lib/constants/actions";
import { AppContext } from "../../App";

function SettingsContainer(props) {
  const { dispatch, state } = useContext(AppContext);

  // testing getBudgets
  useEffect(function() {
    dispatch({ type: GET_BUDGETS_REQUEST });
  }, []);

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
