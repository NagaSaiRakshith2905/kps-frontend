import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import userReducer from "./user";
import networkSlice from "./network";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userReducer.reducer,
    network: networkSlice.reducer,
  },
});

export default store;
