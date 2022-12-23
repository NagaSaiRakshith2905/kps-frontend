import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import back from "../../images/back.svg";
import "./ViewAllNetworks.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { networkActions } from "../../store/network";
import { getAllNetworkAPI } from "../../services/NetworkService";
import Logout from "../../components/Logout";
import ErrorPage from "../ErrorPage";

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

const ViewAllNetworks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const [networksList, setNetworksList] = useState([]);

  const onBackClickHandler = (e) => {
    e.preventDefault();
    dispatch(networkActions.clearNetwork());
    navigate("/home");
  };
  useEffect(() => {
    getAllNetwork();
  }, []);
  const getAllNetwork = async () => {
    await getAllNetworkAPI(username)
      .then((result) => {
        console.log(result.data);
        setNetworksList((prev) => {
          return [...prev, ...result.data];
        });
      })
      .catch((error) => console.log(error));
  };
  const onSelectClickHandler = (e, network) => {
    e.preventDefault();
    navigate(`/network/${network.id}/${network.networkName}`);
  };
  return (
    <>
      {!username ? (
        <ErrorPage />
      ) : (
        <div className="view-all-networks">
          <NavBar>
            <div
              className="close-btn flex justify-content-center align-items-center"
              onClick={onBackClickHandler}
            >
              <img src={back} className="Create back" alt="logo" />
              <h3>back</h3>
            </div>
            <h1 className="title">K-Path Simulation.</h1>
            <Logout />
          </NavBar>
          <div className="main-container">
            <div className="content">
              <h2 className="heading">List of all Networks:</h2>
              <ul className="network-list">
                {networksList.map((network) => {
                  return (
                    <li className="list-item">
                      <p>{network.id}</p>
                      <h2>{network.networkName}</h2>
                      <button
                        className="button btn-purple"
                        onClick={(e) => onSelectClickHandler(e, network)}
                      >
                        select
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewAllNetworks;
