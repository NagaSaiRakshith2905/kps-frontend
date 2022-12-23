import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/card/Card";
import CardBorder from "../../../components/card/CardBorder";
import Modal from "../../../components/modal/Modal";
import Close from "../../../images/close.svg";
import { analysepathAPI } from "../../../services/NetworkService";
import { networkActions } from "../../../store/network";

const AnalysePath = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [path, setPath] = useState();

  const nodes = useSelector((state) => state.network.nodes);
  const networkId = useSelector((state) => state.network.networkId);
  const networkName = useSelector((state) => state.network.networkName);

  //   const navigate = useNavigate();
  const [src, setSrc] = useState();
  const [srcList, setSrcList] = useState(nodes);

  const [dst, setDst] = useState();
  const [dstList, setDstList] = useState(nodes);

  const srcChangeHandler = (e) => {
    setSrc(e.target.value);
    setDstList(nodes.filter((node) => node.nodeName !== e.target.value));
  };

  const dstChangeHandler = (e) => {
    setDst(e.target.value);
    setSrcList(nodes.filter((node) => node.nodeName !== e.target.value));
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();
    // navigate("/network");
    const object = {
      src,
      dst,
      networkId,
      path,
    };
    await analysepathAPI(object)
      .then((res) => {
        navigate(`/network/${networkId}/${networkName}`);
      })
      .catch((error) => {
        console.log(error);
      });
    props.setAnalysePathIsShown(false);
  };

  return (
    <div className="add-link">
      <Modal onClose={props.onClose}>
        <div className="makecenter">
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
                <h1 className="title">Analyse Path</h1>
                <div className="drop-down-cont flex justify-content-space-between align-items-center">
                  <p>Source :</p>
                  <select
                    className="input"
                    defaultValue={"default"}
                    value={src}
                    onChange={srcChangeHandler}
                  >
                    <option value={"default"} disabled>
                      --src--
                    </option>
                    {srcList.map((node) => (
                      <option value={node.nodeName}> {node.nodeName} </option>
                    ))}
                  </select>
                </div>

                <div className="drop-down-cont flex justify-content-space-between align-items-center">
                  <p>Destination :</p>
                  <select
                    className="input"
                    defaultValue={"default"}
                    value={dst}
                    onChange={dstChangeHandler}
                  >
                    <option value={"default"} disabled>
                      --dst--
                    </option>
                    {dstList.map((node) => (
                      <option value={node.nodeName}> {node.nodeName} </option>
                    ))}
                  </select>
                </div>

                <p style={{ textAlign: "left", marginTop: "0.5rem" }}>
                  User Defined Path
                </p>
                <input
                  className="input"
                  placeholder="eg: node1->node2"
                  type="text"
                  value={path}
                  onChange={(e) => setPath(e.target.value)}
                />

                <button
                  className="button btn-purple"
                  onClick={onSubmitClickHandler}
                >
                  Continue
                </button>
              </Card>
            </CardBorder>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AnalysePath;
