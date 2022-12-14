import "./App.css";
import Card from "./components/card/Card";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Input from "./components/input/Input";
import NavBar from "./components/nav-bar/NavBar";
import Title from "./components/Title";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ViewAllNetworks } from "./pages/ViewAllNetworks";
import { Network } from "./pages/Network";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/view-all-networks" element={<ViewAllNetworks />} />
      <Route path="/network/:nid" element={<Network />} />
    </Routes>
  );
}

export default App;
