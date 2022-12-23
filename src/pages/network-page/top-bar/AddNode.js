import React from "react";
import Card from "../../../components/card/Card";
import CardBorder from "../../../components/card/CardBorder";
import Modal from "../../../components/modal/Modal";
import Close from "../../../images/close.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { networkActions } from "../../../store/network";
import { NodeConverter } from "../../../helper/NodeConverter";
import "./AddNode.css";
const NODE_TYPE = ["add-drop", "ola", "pass-through"];

function AddNode(props) {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.network.nodes);
  const [nodeName, setNodeName] = useState("n1");
  const [nodeIpAddress, setNodeIpAddress] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [nodeType, setNodeType] = useState(NODE_TYPE[0]);

  const addNodeHandler = (e) => {
    e.preventDefault();
    const temp = [...nodes.filter((node) => node.nodeName === nodeName)];
    if (temp.length > 0) {
      alert("Node with " + nodeName + " already exists!");
    } else {
      const noOfEdges = nodeType === NODE_TYPE[0] ? 16 : 2;
      const edges = [];
      for (let i = 0; i < noOfEdges; i++) {
        edges.push({
          edgeName: String.fromCharCode(65 + i),
          isAvailable: true,
        });
      }
      const node = {
        nodeName: nodeName,
        ipAddress: nodeIpAddress,
        password: password,
        nodeType: nodeType,
        x: 100,
        y: 100,
        edges: edges,
      };

      dispatch(networkActions.setNodes(node));
    }
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
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
                onSubmit={addNodeHandler}
              >
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
                  <select
                    className="input"
                    defaultValue={nodeType}
                    onChange={(e) => {
                      setNodeType(e.target.value);
                    }}
                  >
                    {NODE_TYPE.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="button btn-purple" type="submit">
                  Continue
                </button>
              </form>
            </Card>
          </CardBorder>
        </div>
      </Modal>
    </div>
  );
}
export default AddNode;
