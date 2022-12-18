import React from "react";
import view_network from "../images/view_network.svg";
import add_network from "../images/add_network.svg";
import NavBar from "../components/nav-bar/NavBar";
import Card from "../components/card/Card";
import CardBorder from "../components/card/CardBorder";
import "./Home.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const onLogoutClickHandler=(e)=>{
    e.preventDefault();
    navigate("/");
  }
  const onCreateNetworkClickHandler=(e)=>{
    e.preventDefault();
    navigate("/network");
  }
  const onViewAllNetworkClickHandler=(e)=>{
    e.preventDefault();
    navigate("/view-all-networks");
  }
  return (
    <div className="register">
      <NavBar>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-orange" onClick={onLogoutClickHandler}>Logout</button>
      </NavBar>
      <div className="_card">
        <CardBorder>
          <div class="card__content">
            <Card>
              <div className="card-item">
                <img src={add_network} className="Create Network" alt="logo" onClick={onCreateNetworkClickHandler}/>
                <p>Create new network</p>
              </div>
            </Card>
            <Card>
              <div className="card-item">
                <img src={view_network} className="View All Network" alt="logo" onClick={onViewAllNetworkClickHandler}/>
                <p>View all networks</p>
              </div>
            </Card>
          </div>
        </CardBorder>
      </div>
    </div>
  );
};
