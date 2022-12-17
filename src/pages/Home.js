import React from "react";
import view_network from "../images/view_network.svg";
import add_network from "../images/add_network.svg";
import NavBar from "../components/nav-bar/NavBar";
import Card from "../components/card/Card";
import "./Home.css"
export const Home = () => {
  return (
    <div className="register">
      <NavBar>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-orange">Logout</button>
      </NavBar>
      <div className="_card">
        <div class="card__content">
          <Card>
            <div className="card-item">
              <img src={add_network} className="Create Network" alt="logo" />
              <p>Create new network</p>
            </div>
          </Card>
          <Card>
            <div className="card-item">
              <img src={view_network} className="View All Network" alt="logo" />
              <p>View all networks</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
