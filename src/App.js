import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ViewAllNetworks } from "./pages/ViewAllNetworks";
import { Network } from "./pages/Network";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/view-all-networks" element={<ViewAllNetworks />} />
      <Route path="/*" element={<ErrorPage/>} />
      <Route path="/network/" element={<Network />} />
    </Routes>
  );
}

export default App;
