import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: { username: "" },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
      console.log(action.payload);
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
