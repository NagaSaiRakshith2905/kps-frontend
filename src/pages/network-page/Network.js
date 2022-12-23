import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./Network.css";
import AddNode from "./top-bar/AddNode";
import AddLink from "./top-bar/AddLink";
import { useDispatch, useSelector } from "react-redux";
import NetworkNavBar from "./top-bar/NetworkNavBar";
import ToolBar from "./top-bar/ToolBar";
import { networkActions } from "../../store/network";
import Circuit from "./circuit/Circuit";
import ListOfAnalysePath from "./list-of-analysed-paths/ListOfAnalysePath";
import ErrorPage from "../ErrorPage";
import { getByIdAPI } from "../../services/NetworkService";
import AnalysePath from "./top-bar/AnalysePath";
import AnalysedPath from "./list-of-analysed-paths/AnalysedPath";

const Network = () => {
  const { id, networkName } = useParams();

  const username = localStorage.getItem("username");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createNodeIsShown, setCreateNodeIsShown] = useState(false);
  const [createLinkIsShown, setCreateLinkIsShown] = useState(false);
  const [analysePathIsShown, setAnalysePathIsShown] = useState(false);

  const nodes = useSelector((state) => state.network.nodes);
  const links = useSelector((state) => state.network.links);

  useEffect(() => {
    dispatch(networkActions.setNetworkId(id));
    dispatch(networkActions.setNetworkName(networkName));
    if (id > -1) {
      getNetworkByIdHandler();
      dispatch(networkActions.setIsNetworkCreated(true));
    }
  }, []);

  const getNetworkByIdHandler = async () => {
    await getByIdAPI(id)
      .then((res) => {
        console.log(res.data);
        dispatch(networkActions.setNetwork(res.data));
      })
      .catch((error) => console.log(error));
  };

  const onBackClickHandler = (e) => {
    e.preventDefault();
    dispatch(networkActions.clearNetwork());
    navigate("/home");
  };
  const showNode = (e) => {
    e.preventDefault();
    setCreateNodeIsShown(true);
  };
  const hideNode = (e) => {
    e.preventDefault();
    setCreateNodeIsShown(false);
  };
  const showLink = (e) => {
    e.preventDefault();
    setCreateLinkIsShown(true);
  };
  const hideLink = (e) => {
    e.preventDefault();
    setCreateLinkIsShown(false);
  };
  const showAnalysePath = (e) => {
    e.preventDefault();
    setAnalysePathIsShown(true);
  };
  const hideAnalysePath = (e) => {
    e.preventDefault();
    setAnalysePathIsShown(false);
  };

  return (
    <>
      {!username ? (
        <ErrorPage />
      ) : (
        <div className="network">
          {createNodeIsShown && (
            <AddNode onClose={hideNode} closeNode={setCreateNodeIsShown} />
          )}
          {createLinkIsShown && nodes.length >= 2 && (
            <AddLink
              onClose={hideLink}
              setCreateLinkIsShown={setCreateLinkIsShown}
            />
          )}
          {analysePathIsShown && (
            <AnalysePath
              onClose={hideAnalysePath}
              setAnalysePathIsShown={setAnalysePathIsShown}
            />
          )}
          <NetworkNavBar
            onBack={onBackClickHandler}
            networkName={networkName}
          />
          <ToolBar
            nodes={nodes}
            links={links}
            showNode={showNode}
            showLink={showLink}
            showAnalysePath={showAnalysePath}
          />
          <Circuit />
          <ListOfAnalysePath />
        </div>
      )}
    </>
  );
};

export default Network;
