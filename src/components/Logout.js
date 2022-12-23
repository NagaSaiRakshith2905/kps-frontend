import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { userActions } from "../store/user";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClickHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    dispatch(authActions.setloggedin(false));
    dispatch(userActions.setUsername(""));
    navigate("/");
  };
  return (
    <button className="button btn-orange" onClick={onLogoutClickHandler}>
      Logout
    </button>
  );
};

export default Logout;
