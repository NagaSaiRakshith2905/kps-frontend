import { createSlice } from "@reduxjs/toolkit";
const createNetworkSlice = createSlice({
  name: "create network",
  initialState: { isNetworkCreated: false, networkId: "", networkName: "",nodes:[],links:[] },
  reducers: {
    setloggedin(state) {
      state.isNetworkCreated = !state.isNetworkCreated;
    },
    setNetworkId(state, action) {
      state.networkId = action.payload;
      console.log(action.payload);
    },
    setNetworkName(state, action) {
      state.networkName = action.payload;
      console.log(action.payload);
    },
  },
});

export const createNetworkActions = createNetworkSlice.actions;

export default createNetworkSlice;
