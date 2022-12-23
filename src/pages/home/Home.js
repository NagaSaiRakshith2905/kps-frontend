import React, { useState } from "react";
import view_network from "../../images/view_network.svg";
import add_network from "../../images/add_network.svg";
import NavBar from "../../components/nav-bar/NavBar";
import Card from "../../components/card/Card";
import CardBorder from "../../components/card/CardBorder";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { CreateNetwork } from "./CreateNetwork";
import Logout from "../../components/Logout";
import ErrorPage from "../ErrorPage";
const Home = () => {
  const [createNetworkIsShown, setCreateNetworkIsShown] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const showCreateNetwork = (e) => {
    e.preventDefault();
    setCreateNetworkIsShown(true);
  };
  const hideCreateNetwork = (e) => {
    e.preventDefault();
    setCreateNetworkIsShown(false);
  };
  const onViewAllNetworkClickHandler = (e) => {
    e.preventDefault();
    navigate("/view-all-networks");
  };
  return (
    <>
      {!username ? (
        <ErrorPage />
      ) : (
        <div className="register">
          {createNetworkIsShown && (
            <CreateNetwork onClose={hideCreateNetwork} />
          )}
          <NavBar>
            <h1 className="title">K-Path Simulation.</h1>
            <Logout />
          </NavBar>
          <div className="_card">
            <CardBorder>
              <div class="card__content">
                <Card>
                  <div className="card-item" onClick={showCreateNetwork}>
                    <img
                      src={add_network}
                      className="Create Network"
                      alt="logo"
                    />
                    <p>Create new network</p>
                  </div>
                </Card>
                <Card>
                  <div
                    className="card-item"
                    onClick={onViewAllNetworkClickHandler}
                  >
                    <img
                      src={view_network}
                      className="View All Network"
                      alt="logo"
                    />
                    <p>View all networks</p>
                  </div>
                </Card>
              </div>
            </CardBorder>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
