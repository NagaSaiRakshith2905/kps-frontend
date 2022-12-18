import React from "react";
import NavBar from "../components/nav-bar/NavBar";
import back from "../images/back.svg";
import './ViewAllNetworks.css';
import { useNavigate } from "react-router-dom";

// const DUMMYDATA = [
//   {
//     id: 001,
//     networkName: "Network1"
//   },
//   {
//     id: 002,
//     networkName: "Network2"
//   },
//   {
//     id: 003,
//     networkName: "Network3"
//   },
//   {
//     id: 004,
//     networkName: "Network4"
//   },
//   {
//     id: 005,
//     networkName: "Network5"
//   },
// ]
export const ViewAllNetworks = () => {
  const navigate = useNavigate();
  const onLogoutClickHandler=(e)=>{

    e.preventDefault();

    navigate("/");

  }
  return (
    <div className="view-all-networks">
      <NavBar>
        <div className="flex justify-content-center align-items-center">
          <img src={back} className="Create back" alt="logo" />
          <h3>back</h3>
        </div>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-orange" onClick={onLogoutClickHandler}>Logout</button>
      </NavBar>
      <div className="main-container">
        <div className="content">
          <h2>List of all Networks:</h2>
          {/* {
            DUMMYDATA.map(network => {
              return 
            })
          } */}
        </div>
      </div>
    </div>
  );
};
