import { useState } from "react";
import { userLoginApi } from "../services/UserService";

const Login = () => {
  const [valuee, setValuee] = useState();
  const [password, setPassword] = useState();
  const [formValidation, setFormValidation] = useState();
  const [authError, setAuthError] = useState();

  async function login() {
    let error = {};
    if (!valuee) {
      error["usernameError"] = "username can't be empty";
    }
    if (!password) {
      error["passwordError"] = "password can't be empty";
    }
    setFormValidation(error);
    const length = Object.keys(error).length;
    if (length === 0) {
      await userLoginApi(valuee, password)
        .then((resp) => {
          if (resp.status === 200 || resp.status === 201) {
            alert("login successful");
            localStorage.setItem("User-Data", JSON.stringify(resp.data));
          }
        })
        .catch((error) => setAuthError(error.response.data));
    }
  }
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        placeholder="username"
        value={valuee}
        type={"text"}
        onChange={(e) => setValuee(e.target.value)}
      />
      <input
        placeholder="password"
        value={password}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button btn-purple" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
