import React from "react";
import InputButton from "../../InputButton";

const TimeInput = ({ name, value, max = "59", action }) => {
  const handleChange = (e) => {
    let value = e.target.value;
    value = +value < 10 ? `0${value}` : value;
    action(value);
  };
  const handleClickIncrement = () => {
    let result = +value;
    result = +value >= max ? 0 : result + 1;
    result = result < 10 ? `0${result}` : result;
    action(result);
  };
  const handleClickDecrement = () => {
    let result = +value;
    result = +value >= 1 ? result - 1 : max;
    result = result < 10 ? `0${result}` : result;
    action(result);
  };

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
