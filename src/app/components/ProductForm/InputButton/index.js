import React from "react";
import icon from "./arrow_icon.svg";
import "./index.scss";

const InputButton = ({ handler, decr = false }) => {
  return (
    <img
      className={`inputButton inputButton--${decr ? "decr" : "incr"}`}
      alt="input_arrow_icon"
      src={icon}
      onClick={handler}
    />
  );
};
export default InputButton;
