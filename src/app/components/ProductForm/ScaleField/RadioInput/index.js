import React from "react";

const RadioInput = ({ data: { name, value, label }, currVal, handler }) => {
  return (
    <div key={name} className="scaleInput__box__inputBox">
      <input
        type="radio"
        name={name}
        value={value}
        checked={currVal === value ? true : false}
        onChange={handler}
      />
      <label className="scaleInput__box__inputBox__label">{label}</label>
    </div>
  );
};
export default RadioInput;
