import React from "react";
import "./NavBar.css";
const NavBar = (props) => {
  return (
    <div className="nav-bar flex justify-content-center align-items-center">
      <div className="content flex justify-content-space-between align-items-center">
        {props.children}
      </div>
    </div>
  );
};

export default NavBar;
