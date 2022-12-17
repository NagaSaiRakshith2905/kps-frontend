import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { isloggedin: false },
  reducers: {
    setloggedin(state) {
      state.isloggedin = !state.isloggedin;
    },
  },
});

export const authActions=authSlice.actions;

export default authSlice;
