import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { userLoginApi } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";
import CardBorder from "../components/card/CardBorder";
import NavBar from "../components/nav-bar/NavBar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valuee, setValuee] = useState();
  const [password, setPassword] = useState();
  const [authError, setAuthError] = useState();
  

  async function loginHandler() {
    await userLoginApi(valuee, password)
      .then((resp) => {
        if (resp.status === 200 || resp.status === 201) {
          alert("login successful");
          dispatch(authActions.setloggedin());
          navigate("/home");
        }
      })
  }

  const onRegisterClickHandler=(e)=>{

    e.preventDefault();

    navigate("/register")

  }

  return (
    <div className="login">
      <NavBar>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-purple" onClick={onRegisterClickHandler}>Register</button>
      </NavBar>
      <CardBorder>
        <Card>
          <h1 className="title">Login</h1>
          <input
            className="input"
            placeholder="username"
            value={valuee}
            type={"text"}
            onChange={(e) => setValuee(e.target.value)}
          />
          <input
            className="input"
            placeholder="password"
            value={password}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button btn-purple" onClick={loginHandler}>
            Login
          </button>
        </Card>
      </CardBorder>
    </div>
  );
};

export default Login;
