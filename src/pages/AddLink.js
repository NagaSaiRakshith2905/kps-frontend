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

function AddLink(props) {
  const dispatch = useDispatch();
  const [linkName, setLinkName] = useState();
  const [linkLength, setLinkLength] = useState();
  const [noOfSpaces, setNoOfSpaces] = useState();
  const navigate = useNavigate();
  const onNetworkClickHandler = (e) => {
    e.preventDefault();
    //dispatch(createNodeActions.setNetworkName);
    navigate("/network");
  };

  return (
    <div className="add-link">
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
              <h1 className="title">Add New Link</h1>
              <input
                className="input"
                placeholder="lable/name"
                type="text"
                value={linkName}
                onChange={(e) => setLinkName(e.target.value)}
              />

              <div className="drop-down-cont flex justify-content-space-between align-items-center">
                <p>From :</p>
                <select className="input">
                  <option value="node1">node1</option>
                  <option value="node2">node2</option>
                  <option value="node3">node3</option>
                </select>
              </div>

              <div className="drop-down-cont flex justify-content-space-between align-items-center">
                <p>To :</p>
                <select className="input">
                  <option value="node1">node1</option>
                  <option value="node2">node2</option>
                  <option value="node3">node3</option>
                </select>
              </div>

              <input
                className="input"
                placeholder="Length"
                type="text"
                value={linkLength}
                onChange={(e) => setLinkLength(e.target.value)}
              />

              <input
                className="input"
                placeholder="No Of Spaces"
                type="text"
                value={noOfSpaces}
                onChange={(e) => setNoOfSpaces(e.target.value)}
              />

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
export default AddLink;
