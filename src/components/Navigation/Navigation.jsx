import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation(props) {
  return (
    <div className="navigation">
      {props.children}
      <Link to="/">Budget</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Navigation;
