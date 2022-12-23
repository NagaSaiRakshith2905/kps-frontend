import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { isloggedin: false },
  reducers: {
    setloggedin(state, action) {
      state.isloggedin = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
