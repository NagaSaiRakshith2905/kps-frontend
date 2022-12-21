import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import registerSlice from "./register";
import networkSlice from "./network";
const store = configureStore({
  reducer: { auth: authSlice.reducer , register:registerSlice.reducer,network:networkSlice.reducer},
});

export default store;
