import React from "react";
import Card from "../components/card/Card";
import CardBorder from "../components/card/CardBorder";
import Modal from "../components/modal/Modal";
import Close from "../images/close.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNodeActions } from "../store/network";
import "./AddNode.css";

function AddNode(props) {
  const dispatch = useDispatch();
  const [nodeName, setNodeName] = useState();
  const [nodeIpAddress, setNodeIpAddress] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const onNetworkClickHandler = (e) => {
    e.preventDefault();
    //dispatch(createNodeActions.setNetworkName);
    navigate("/network");
  };

  return (
    <div className="add-node">
      <Modal onClose={props.onClose}>
        <div
          className="close-btn flex justify-content-center align-items-center"
          onClick={props.onClose}
        >
          <img src={Close} className="Create back" alt="logo" />
          <h3>close</h3>
        </div>

        <div className="_card">
          <CardBorder>
            <Card>
              <h1 className="title">Add New Node</h1>
              <input
                className="input"
                placeholder="lable/name"
                type="text"
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
              />

              <input
                className="input"
                placeholder="ip address"
                type="text"
                value={nodeIpAddress}
                onChange={(e) => setNodeIpAddress(e.target.value)}
              />

              <input
                className="input"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="drop-down-cont flex justify-content-space-between align-items-center">
                <p>Node Type :</p>
                <select className="input">
                  <option value="add/drop">ADD/DROP</option>
                  <option value="passthrough">PASSTHROUGH</option>
                  <option value="ila">ILA</option>
                </select>
              </div>
              <button
                className="button btn-purple"
                onClick={onNetworkClickHandler}
              >
                Continue
              </button>
            </Card>
          </CardBorder>
        </div>
      </Modal>
    </div>
  );
}
export default AddNode;
