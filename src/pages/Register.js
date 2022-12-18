import React from "react";
import { useState } from "react";
import { registerUserApi } from "../services/UserService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import registerActions from "../store/register";
import NavBar from "../components/nav-bar/NavBar";
import Card from "../components/card/Card";
import useInput from "../store/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  value.includes("@") & value.includes(".") & (value.trim() !== "");

const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: password,
    isValid: passWordIsValid,
    hasError: passWordHasError,
    valueChangeHandler: passWordChangeHandler,
    inputBlurHandler: passWordBlurHandler,
    reset: resetPassWord,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (usernameIsValid && emailIsValid && passWordIsValid) {
    formIsValid = true;
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function register() {
    await registerUserApi(userData).then((resp) => {
      if (resp.status === 200 || resp.status === 201) {
        // localStorage.setItem("User-Data", JSON.stringify(resp.data));
        alert("registration successful");
        dispatch(registerActions.setloggedin());
        navigate("/home");
      }
    });
  }
  const onLoginHandler=(e)=>{
    e.preventDefault();
    navigate("/")
  }
  return (
    <div className="register">
      <NavBar>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-purple" onClick={onLoginHandler}>Login</button>
      </NavBar>
      <div class="form-card flex justify-content-center align-items-center">
        <Card>
          <h1 className="title">Register</h1>
          <input
            className="input"
            placeholder="username"
            value={userData.userName}
            onChange={(e) => {
              setUserData({ ...userData, userName: e.target.value });
            }}
          />
          <input
            className="input"
            placeholder="email"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
          <input
            className="input"
            placeholder="password"
            value={userData.password}
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <button className="button btn-purple" onClick={register}>
            Register
          </button>
        </Card>
      </div>
    </div>
  );
};
export default Register;
