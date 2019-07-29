import React from "react";
import "./Settings.scss";

function Settings(props) {
  const { handleRedirect, handleSignOut } = props;

  return (
    <div className="settings">
      <button
        onClick={function() {
          handleRedirect("/create");
        }}
      >
        Create New Budget
      </button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Settings;
