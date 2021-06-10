import React from "react";
import InputButton from "../../InputButton";
import { incrementVal, decrementVal, formatVal } from "./index.utils";

const TimeInput = ({ name, value, max = "59", action }) => {
  const handleClickIncrement = () => action(incrementVal(value, max));
  const handleClickDecrement = () => action(decrementVal(value, max));
  const handleChange = () => action(formatVal(value));

  return (
    <div className="duartionInput__box__inputBox">
      <label className="input__label input__label--sm">{name}</label>
      <input
        className="input__input duartionInput__box__inputBox__input"
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
