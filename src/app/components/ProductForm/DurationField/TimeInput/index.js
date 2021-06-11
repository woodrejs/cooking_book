import React from "react";
import InputButton from "../../InputButton";
import { incrementVal, decrementVal, formatVal } from "./index.utils";
import CustomLabel from "../../CustomLabel";
import "./index.scss";

const TimeInput = ({ name, value, max = "59", action }) => {
  const handleClickIncrement = () => action(incrementVal(value, max));
  const handleClickDecrement = () => action(decrementVal(value, max));
  const handleChange = () => action(formatVal(value));

  //?? min
  return (
    <div className="timeInput">
      <CustomLabel name={name} sm />
      <input
        className="input__input timeInput__input"
        type="number"
        min="0"
        max={max}
        value={value}
        onChange={handleChange}
      />
      <InputButton handler={handleClickDecrement} decr />
      <InputButton handler={handleClickIncrement} />
    </div>
  );
};
export default TimeInput;
