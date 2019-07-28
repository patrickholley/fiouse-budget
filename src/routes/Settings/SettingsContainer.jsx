import React, { useContext } from 'react';
import Settings from './Settings';
import { SIGN_OUT_REQUEST } from '../../lib/constants/actions';
import { AppContext } from "../../App";

function SettingsContainer() {
  const {
    dispatch,
    state
  } = useContext(AppContext);

  function handleSignOut() {
    dispatch({ type: SIGN_OUT_REQUEST });
  }

  return (
    <Settings handleSignOut={handleSignOut} />
  );
}

export default SettingsContainer;
