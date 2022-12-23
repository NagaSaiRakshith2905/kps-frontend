import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import { authActions } from "../../store/auth";
import { userLoginApi } from "../../services/UserService";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import CardBorder from "../../components/card/CardBorder";
import NavBar from "../../components/nav-bar/NavBar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [password, setPassword] = useState();

  async function loginHandler(e) {
    e.preventDefault();
    await userLoginApi(value, password).then((resp) => {
      if (resp.status === 200 || resp.status === 201) {
        alert("login successful");
        localStorage.setItem("username", resp.data);
        dispatch(userActions.setUsername(resp.data));
        dispatch(authActions.setloggedin(true));
        navigate("/home");
      }
    });
  }

  const onRegisterClickHandler = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div className="login">
      <NavBar>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-purple" onClick={onRegisterClickHandler}>
          Register
        </button>
      </NavBar>
      <form onSubmit={loginHandler}>
        <CardBorder>
          <Card>
            <h1 className="title">Login</h1>
            <input
              className="input"
              placeholder="userName/email"
              name="userName/email"
              value={value}
              type={"text"}
              onChange={(e) => setValue(e.target.value)}
              required
            />
            <input
              className="input"
              placeholder="password"
              name="password"
              value={password}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link
              style={{
                color: "var(--clr-text-s)",
                textDecoration: "none",
                textAlign: "end",
              }}
              to={"/forgot-password"}
            >
              <p className="forgot-password">Forgot Password</p>
            </Link>
            <button className="button btn-purple" type={"submit"}>
              Login
            </button>
          </Card>
        </CardBorder>
      </form>
    </div>
  );
};

export default Login;
