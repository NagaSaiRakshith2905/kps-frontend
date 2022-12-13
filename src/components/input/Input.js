import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <input className="input" type="text" placeholder={props.placeholder} />
  );
};

export default Input;
