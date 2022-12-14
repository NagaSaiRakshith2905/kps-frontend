import React from "react";
import { useState } from "react";
import { registerUserApi } from "../services/UserService";

const Register = () => {
  const emailregex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [formValidation, setFormValidation] = useState({});
  const [authError, setAuthError] = useState("");
  async function register() {
    let error = {};
    if (!userData.userName) {
      error["usernameError"] = "username can't be empty";
    }
    if (!userData.email) {
      error["emailError"] = "email can't be empty";
    }
    if (!userData.password) {
      error["passwordError"] = "password can't be empty";
    }
    setFormValidation(error);
    const length = Object.keys(error).length;
    if (length === 0) {
      console.log(userData);

      await registerUserApi(userData)
        .then((resp) => {
          if (resp.status === 200 || resp.status === 201) {
            localStorage.setItem("User-Data", JSON.stringify(resp.data));
          }
          if (resp.status === 404) {
            console.log("something is fishy");
          }
        })
        .catch((error) => {
          console.log(error);
          setAuthError(error.response.data);
        });
    }
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        placeholder="username"
        value={userData.userName}
        onChange={(e) => {
          setUserData({ ...userData, userName: e.target.value });
        }}
      />
      <input
        placeholder="email"
        value={userData.email}
        onChange={(e) => {
          setUserData({ ...userData, email: e.target.value });
        }}
      />
      <input
        placeholder="password"
        value={userData.password}
        onChange={(e) => {
          setUserData({ ...userData, password: e.target.value });
        }}
      />
      <button className="button btn-purple" onClick={register}>
        Register
      </button>
    </div>
  );
};

export default Register;
