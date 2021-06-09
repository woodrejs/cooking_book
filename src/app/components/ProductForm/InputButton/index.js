import React from "react";
import icon from "./arrow_icon.svg";

const InputButton = ({ handler, decr = false }) => {
  return (
    <img
      className={`input__arrow input__arrow--${decr ? "decr" : "incr"}`}
      alt="input_arrow_icon"
      src={icon}
      onClick={handler}
    />
  );
};
export default InputButton;
