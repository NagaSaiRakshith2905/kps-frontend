import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { networkActions } from "../../../store/network";
import { addNetworkAPI } from "../../../services/NetworkService";
import { useNavigate } from "react-router-dom";

const ToolBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const network = useSelector((state) => state.network);
  const username = useSelector((state) => state.user.username);

  const isNetworkCreated = useSelector(
    (state) => state.network.isNetworkCreated
  );

  const createNetworkHandler = async (e) => {
    e.preventDefault();

    const newNetwork = {
      networkName: network.networkName,
      username: username,
      nodes: network.nodes,
      links: network.links,
    };
    console.log(newNetwork);
    await addNetworkAPI(newNetwork)
      .then((res) => {
        console.log(res.data);
        dispatch(networkActions.setIsNetworkCreated(true));
        dispatch(networkActions.setNetworkId(res.data.id));
        dispatch(networkActions.setNetworkName(res.data.networkName));
        navigate(`/network/${res.data.id}/${res.data.networkName}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-network-container">
      <div className="content">
        <div className="node-link">
          <p>add |</p>
          <button className="button btn-blue" onClick={props.showNode}>
            node
          </button>
          <button
            className={`${
              props.nodes.length < 2 && "disabled"
            } button btn-blue`}
            onClick={props.showLink}
          >
            Link
          </button>
        </div>
        <div className="buttons">
          <button
            className={`${
              (props.nodes.length < 2 || props.links.length < 1) && "disabled"
            } button btn-purple`}
            onClick={createNetworkHandler}
          >
            Create Network
          </button>
          <button
            className={`${!isNetworkCreated && "disabled"} button btn-purple`}
            onClick={props.showAnalysePath}
          >
            Analyse Paths
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
