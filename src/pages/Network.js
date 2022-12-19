import React from "react";
import NavBar from "../components/nav-bar/NavBar";
import back from "../images/back.svg";
import { useNavigate } from "react-router-dom";
import "./Network.css";

export const Network = () => {
  const navigate = useNavigate();
  const onLogoutClickHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const onBackClickHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="network">
      <NavBar>
        <div className="flex justify-content-center align-items-center" onClick={onBackClickHandler}>
          <img src={back} className="Create back" alt="logo" />
          <h3>back</h3>
        </div>
        <h1 className="title">network-name</h1>
        <button className="button btn-orange" onClick={onLogoutClickHandler}>
          Logout
        </button>
      </NavBar>
      <div className="add-network-container">
        <div className="content">
          <div className="node-link">
            <p>add |</p>
            <button className="button btn-blue">node</button>
            <button className="button btn-blue">Link</button>
          </div>
          <div className="buttons">
            <button className="button btn-purple">Create Network</button>
            <button className="disabled button btn-purple">
              Analyse Paths
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
