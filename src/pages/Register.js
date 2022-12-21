import React, { useEffect } from "react";
import { useState } from "react";
import { registerUserApi } from "../services/UserService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import registerActions from "../store/register";
import NavBar from "../components/nav-bar/NavBar";
import Card from "../components/card/Card";
import CardBorder from "../components/card/CardBorder";

const Register = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userData);
    }
  }, [userData]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email address!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must have more than 6 characters";
    }
    return errors;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function registerHandler(e) {
    e.preventDefault();
    setFormErrors(validate(userData));
    setIsSubmit(true);
    await registerUserApi(userData).then((resp) => {
      if (resp.status === 200 || resp.status === 201) {
        // localStorage.setItem("User-Data", JSON.stringify(resp.data));
        navigate("/home");
        alert("registration successful");
        dispatch(registerActions.setloggedin());
      }
    });
  }

  const onLoginClickHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="register">
      <NavBar>
        <h1 className="title">K-Path Simulation.</h1>
        <button className="button btn-purple" onClick={onLoginClickHandler}>
          Login
        </button>
      </NavBar>
      <div class="form-card flex justify-content-center align-items-center">
        <form onSubmit={registerHandler}>
          <CardBorder>
            <Card>
              <h1 className="title">Register</h1>
              <input
                className="input"
                placeholder="userName"
                type={"text"}
                name="userName"
                value={userData.userName}
                onChange={handleChange}
              />
              <p>{formErrors.userName}</p>
              <input
                className="input"
                placeholder="email"
                type={"text"}
                value={userData.email}
                name="email"
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
              <input
                className="input"
                placeholder="password"
                type={"password"}
                value={userData.password}
                name="password"
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>
              <button className="button btn-purple">Register</button>
            </Card>
          </CardBorder>
        </form>
      </div>
    </div>
  );
};

export default Register;
