import React from "react";
import NavBar from "../components/nav-bar/NavBar";
import back from "../images/back.svg";
import "./ViewAllNetworks.css";
import { useNavigate } from "react-router-dom";

const DUMMYDATA = [
  {
    id: 1,
    networkName: "Network1",
  },
  {
    id: 2,
    networkName: "Network2",
  },
  {
    id: 3,
    networkName: "Network3",
  },
  {
    id: 4,
    networkName: "Network4",
  },
  {
    id: 5,
    networkName: "Network5",
  },
];

export const ViewAllNetworks = () => {
  const navigate = useNavigate();
  const onLogoutClickHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const onBackClickHandler = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  // const networkList = DUMMYDATA.map(network =>
  //     {network.id}
  //     {network.networkName}
  //   )
  return (
    <div className="view-all-networks">
      <NavBar>
        <div className="flex justify-content-center align-items-center" onClick={onBackClickHandler}>
          <img src={back} className="Create back" alt="logo"/>
          <h3>back</h3>
        </div>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-orange" onClick={onLogoutClickHandler}>
          Logout
        </button>
      </NavBar>
      <div className="main-container">
        <div className="content">
          <h2 className="heading">List of all Networks:</h2>
          <ul className="network-list">
            {DUMMYDATA.map((network) => {
              return (
                  <li className="list-item">
                      <p>{network.id}</p> 
                      <h2>{network.networkName}</h2>
                      <button className="button btn-purple">select</button>
                  </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
