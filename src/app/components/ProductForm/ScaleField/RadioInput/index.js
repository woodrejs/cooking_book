import React from "react";
import "./index.scss";

const RadioInput = ({ data: { name, value, label }, currVal, handler }) => {
  return (
    <div key={name} className="radioInput">
      <input
        type="radio"
        name={name}
        value={value}
        checked={currVal === value ? true : false}
        onChange={handler}
      />
      <label className="radioInput__label">{label}</label>
    </div>
  );
};
export default RadioInput;
