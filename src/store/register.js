import { createSlice } from "@reduxjs/toolkit";
const registerSlice = createSlice({
  name: "register",
  initialState: { isRegistered: false },
  reducers: {
    setRegistered(state) {
      state.isRegistered = !state.isRegistered;
    },
  },
});

export const registerActions=registerSlice.actions;

export default registerSlice;