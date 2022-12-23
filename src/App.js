import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ViewAllNetworks from "./pages/home/ViewAllNetworks";
import ErrorPage from "./pages/ErrorPage";
import Network from "./pages/network-page/Network";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import "reactflow/dist/style.css";
import { useDispatch } from "react-redux";
import { userActions } from "./store/user";
import { authActions } from "./store/auth";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const username = localStorage.getItem("username");
  useEffect(() => {
    if (username) {
      dispatch(authActions.setloggedin(true));
      dispatch(userActions.setUsername(username));
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/view-all-networks" element={<ViewAllNetworks />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route path="/network/:id/:networkName" element={<Network />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
