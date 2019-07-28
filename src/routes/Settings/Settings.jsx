import React from 'react';
import "./Settings.scss";

function Settings(props) {
  return (
    <div className="settings">
      <button onClick={props.handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Settings;
