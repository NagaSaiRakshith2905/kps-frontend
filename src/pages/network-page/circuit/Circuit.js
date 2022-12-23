import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  addEdge,
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { NodeConverter } from "../../../helper/NodeConverter";
import { networkActions } from "../../../store/network";
import { useDispatch } from "react-redux";
import LinkConverter from "../../../helper/LinkConverter";

const Circuit = () => {
  const dispatch = useDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeList = useSelector((state) => state.network.nodes);
  const linksList = useSelector((state) => state.network.links);

  useEffect(() => {
    nodeList.forEach((node) => {
      const newNode = NodeConverter(node.x, node.y, node.nodeName);
      setNodes((prev) => {
        return [...prev, newNode];
      });
    });
    linksList.forEach((link) => {
      const newLink = LinkConverter(link.label, link.fromNode, link.toNode);
      setEdges((prev) => {
        return [...prev, newLink];
      });
    });
  }, [nodeList, linksList, setNodes, setEdges]);

  useEffect(() => {
    const timer = setTimeout(() => {
      nodes.forEach((node) => {
        const position = {
          label: node.data.label,
          x: Math.floor(node.position.x),
          y: Math.floor(node.position.y),
        };
        dispatch(networkActions.setNodeXY(position));
      });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [nodes]);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        console.log(eds);
        addEdge(params, eds);
      });
    },
    [setEdges]
  );
  const addNewNodeHandler = (newNode) => {
    setNodes((prev) => {
      return [...prev, newNode];
    });
  };
  const addNewLinkHandler = (newLink) => {
    setEdges((prev) => {
      return [...prev, newLink];
    });
  };

  return (
    <div className="circuit">
      <div className="body">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Circuit;
