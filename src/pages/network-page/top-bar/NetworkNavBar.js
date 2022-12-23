import React from "react";
import Logout from "../../../components/Logout";
import NavBar from "../../../components/nav-bar/NavBar";
import back from "../../../images/back.svg";

const NetworkNavBar = (props) => {
  return (
    <NavBar>
      <div
        className="close-btn flex justify-content-center align-items-center"
        onClick={props.onBack}
      >
        <img src={back} className="Create back" alt="logo" />
        <h3>back</h3>
      </div>
      <h1 className="title">{props.networkName}</h1>
      <Logout />
    </NavBar>
  );
};

export default NetworkNavBar;
