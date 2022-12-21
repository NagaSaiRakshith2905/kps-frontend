import React, { useState } from "react";
import Card from "../components/card/Card";
import CardBorder from "../components/card/CardBorder";
import Modal from "../components/modal/Modal";
import Close from "../images/close.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { networkActions } from "../store/network";

export const CreateNetwork = (props) => {
  const dispatch = useDispatch();
  const [networkName, setnetworkName] = useState();
  const navigate = useNavigate();
  const onNetworkClickHandler = (e) => {
    e.preventDefault();
    dispatch(networkActions.setNetworkName(networkName));
    navigate("/network/-1/"+networkName);
  };
  return (
    <div className="create-network">
      <Modal onClose={props.onClose}>
        <div
          className="close-btn flex justify-content-center align-items-center"
          onClick={props.onClose}
        >
          <img src={Close} className="Create back" alt="logo" />
          <h3>close</h3>
        </div>
        <CardBorder>
          <Card>
            <h1 className="title">Create New Network</h1>
            <input
              className="input"
              placeholder="network name"
              type="text"
              value={networkName}
              onChange={(e) => setnetworkName(e.target.value)}
            />
            <button
              className="button btn-purple"
              onClick={onNetworkClickHandler}
            >
              Continue
            </button>
          </Card>
        </CardBorder>
      </Modal>
    </div>
  );
};
