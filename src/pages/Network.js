import React from "react";
import NavBar from "../components/nav-bar/NavBar";
import back from "../images/back.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Network.css";
import AddNode from "./AddNode";
import AddLink from "./AddLink";

export const Network = () => {
  const navigate = useNavigate();
  const [createNodeIsShown, setCreateNodeIsShown] = useState(false);
  const [createLinkIsShown, setCreateLinkIsShown] = useState(false);
  const onLogoutClickHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const onBackClickHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  const showNode = (e) => {
    e.preventDefault();
    setCreateNodeIsShown(true);
  };
  const hideNode = (e) => {
    e.preventDefault();
    setCreateNodeIsShown(false);
  };
  const showLink = (e) => {
    e.preventDefault();
    setCreateLinkIsShown(true);
  };
  const hideLink = (e) => {
    e.preventDefault();
    setCreateLinkIsShown(false);
  };

  return (
    <div className="network">
      {createNodeIsShown && <AddNode onClose={hideNode} />}
      {createLinkIsShown && <AddLink onClose={hideLink} />}
      <NavBar>
        <div
          className="flex justify-content-center align-items-center"
          onClick={onBackClickHandler}
        >
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
            <button className="button btn-blue" onClick={showNode}>
              node
            </button>
            <button className="button btn-blue" onClick={showLink}>
              Link
            </button>
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
