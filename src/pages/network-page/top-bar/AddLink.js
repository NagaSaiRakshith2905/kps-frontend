import React from "react";
import Card from "../../../components/card/Card";
import CardBorder from "../../../components/card/CardBorder";
import Modal from "../../../components/modal/Modal";
import Close from "../../../images/close.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNode.css";
import { useDispatch, useSelector } from "react-redux";
import { networkActions } from "../../../store/network";

function AddLink(props) {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.network.nodes);
  const links = useSelector((state) => state.network.links);

  const [linkLength, setLinkLength] = useState();
  const [noOfSpaces, setNoOfSpaces] = useState();
  const [fromNode, setFromNode] = useState();
  const [fromNodeList, setFromNodeList] = useState(nodes);

  const [toNode, setToNode] = useState();
  const [toNodeList, setToNodeList] = useState(nodes);

  const onNetworkClickHandler = (e) => {
    e.preventDefault();
    const temp = [
      ...links.filter(
        (link) => link.fromNode === fromNode && link.toNode === toNode
      ),
    ];
    if (temp.length > 0) {
      alert("Link for these nodes already exists!");
    } else {
      const newLink = {
        label: `${fromNode + "->" + toNode}`,
        fromNode: fromNode,
        toNode: toNode,
        length: linkLength,
        noOfSpaces: noOfSpaces,
      };
      dispatch(networkActions.setLinks(newLink));
    }
  };

  const fromNodeChangeHandler = (e) => {
    setFromNode(e.target.value);
    setToNodeList(nodes.filter((node) => node.nodeName !== e.target.value));
  };

  const toNodeChangeHandler = (e) => {
    setToNode(e.target.value);
    setFromNodeList(nodes.filter((node) => node.nodeName !== e.target.value));
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

              <div className="drop-down-cont flex justify-content-space-between align-items-center">
                <p>From :</p>
                <select
                  className="input"
                  defaultValue={"default"}
                  value={fromNode}
                  onChange={fromNodeChangeHandler}
                >
                  <option value={"default"} disabled>
                    --from--
                  </option>
                  {fromNodeList.map((node) => (
                    <option value={node.nodeName}> {node.nodeName} </option>
                  ))}
                </select>
              </div>

              <div className="drop-down-cont flex justify-content-space-between align-items-center">
                <p>To :</p>
                <select
                  className="input"
                  defaultValue={"default"}
                  value={toNode}
                  onChange={toNodeChangeHandler}
                >
                  <option value={"default"} disabled>
                    --to--
                  </option>
                  {toNodeList.map((node) => (
                    <option value={node.nodeName}> {node.nodeName} </option>
                  ))}
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
