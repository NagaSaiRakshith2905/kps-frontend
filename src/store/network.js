import { createSlice } from "@reduxjs/toolkit";
const networkSlice = createSlice({
  name: "network",
  initialState: {
    isNetworkCreated: false,
    networkId: "",
    networkName: "",
    nodes: [],
    links: [],
    circuits: [],
  },
  reducers: {
    setIsNetworkCreated(state) {
      state.isNetworkCreated = !state.isNetworkCreated;
    },
    setNetworkId(state, action) {
      state.networkId = action.payload;
    },
    setNetworkName(state, action) {
      state.networkName = action.payload;
      state.networkId = -1;
    },
    setNodes(state, action) {
      const node = action.payload;
      state.nodes = [...state.nodes, node];
    },
    setNodeXY(state, action) {
      const pos = action.payload;
      const node = state.nodes.find((n) => n.nodeName === pos.label);
      node.x = pos.x;
      node.y = pos.y;
    },
    setLinks(state, action) {
      const link = action.payload;
      state.links = [...state.links, link];
    },
    setNetwork(state, action) {
      const network = action.payload;
      state.networkId = network.id;
      state.networkName = network.networkName;
      state.nodes = [...network.nodes];
      state.links = [...network.links];
      state.circuits = [...network.circuits];
    },
    setCircuit(state, action) {
      state.circuits = [...action.payload];
    },
    clearNetwork(state) {
      state.networkId = "";
      state.networkName = "";
      state.nodes = [];
      state.links = [];
    },
  },
});

export const networkActions = networkSlice.actions;

export default networkSlice;
