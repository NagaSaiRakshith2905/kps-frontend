import { createSlice } from "@reduxjs/toolkit";
const networkSlice = createSlice({
  name: "network",
  initialState: { isNetworkCreated: false, networkId: "", networkName: "",nodes:[],links:[] },
  reducers: {
    setIsNetworkCreated(state) {
      state.isNetworkCreated = !state.isNetworkCreated;
    },
    setNetworkId(state, action) {
      state.networkId = action.payload;
    },
    setNetworkName(state, action) {
      state.networkName = action.payload;
      state.networkId=-1;
      console.log(action.payload);
    },
    setNodes(state, action) {
      const node = action.payload;
      state.nodes=[...state.nodes,node]
    },
    setLinks(state, action) {
      const link = action.payload;
      state.links=[...state.links,link]
    },
  },
});

export const networkActions = networkSlice.actions;

export default networkSlice;
