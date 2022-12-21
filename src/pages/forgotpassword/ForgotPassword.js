import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import CardBorder from "../../components/card/CardBorder";
import NavBar from "../../components/nav-bar/NavBar";
import { userUpdatePasswordApi } from "../../services/UserService";
import { authActions } from "../../store/auth";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [password, setPassword] = useState();

  async function updatePasswordHandler(e) {
    e.preventDefault();
    await userUpdatePasswordApi(value, password).then((resp) => {
      if (resp.status === 200 || resp.status === 201) {
        navigate("/");
        alert("password changed successfull");
        dispatch(authActions.setloggedin());
      }
    });
  }

  const onLoginClickHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="forgot-password">
      <NavBar>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-purple" onClick={onLoginClickHandler}>
          Login
        </button>
      </NavBar>
      <CardBorder>
        <Card className>
          <h1 className="title">Reset Password</h1>
          <input
            className="input"
            placeholder="userName/email"
            name="userName/email"
            value={value}
            type={"text"}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            className="input"
            placeholder="password"
            name="password"
            value={password}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button btn-purple" onClick={updatePasswordHandler}>
            Continue
          </button>
        </Card>
      </CardBorder>
    </div>
  );
};
