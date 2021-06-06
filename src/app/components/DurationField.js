import React, { useState, useEffect } from "react";
import { change } from "redux-form";
//assets
import arrowIcon from "../assets/icons/arrow_icon.svg";

const DurationField = ({
  input: { name },
  meta: { error, touched, dispatch, form },
  label,
}) => {
  //state
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  //INPUTS: list of inputs to render
  const INPUTS = [
    { id: 0, name: "h", max: "99", value: hours, action: setHours },
    { id: 1, name: "m", max: "59", value: minutes, action: setMinutes },
    { id: 2, name: "s", max: "59", value: seconds, action: setSeconds },
  ];

  //handlers
  const handleChange = (e, action) => {
    let value = e.target.value;
    value = +value < 10 ? `0${value}` : value;
    action(value);
  };
  const handleClickIncrement = (value, action, max) => {
    let result = +value;
    result = +value >= max ? 0 : result + 1;
    result = result < 10 ? `0${result}` : result;
    action(result);
  };
  const handleClickDecrement = (value, action, max) => {
    let result = +value;
    result = +value >= 1 ? result - 1 : max;
    result = result < 10 ? `0${result}` : result;
    action(result);
  };

  useEffect(() => {
    //Saves the value to the field
    dispatch(change(form, name, `${hours}:${minutes}:${seconds}`, true));
  }, [hours, minutes, seconds, name, form]);

  return (
    <div className="input duartionInput">
      <label className="input__label">{label}</label>
      <div className="input_box duartionInput__box">
        {INPUTS.map(({ id, name, max, value, action }) => (
          <div key={id} className="duartionInput__box__inputBox">
            <label className="input__label input__label--sm">{name}</label>
            <input
              className="input__input duartionInput__box__inputBox__input"
              type="number"
              min="0"
              max={max}
              value={value}
              onChange={(e) => handleChange(e, action)}
            />
            <img
              className="input__arrow input__arrow--decr"
              src={arrowIcon}
              alt="decrementArrow_icon"
              onClick={() => handleClickDecrement(value, action, max)}
            />
            <img
              className="input__arrow input__arrow--incr"
              src={arrowIcon}
              alt="incrementArrow_icon"
              onClick={() => handleClickIncrement(value, action, max)}
            />
          </div>
        ))}
      </div>
      <span>{touched && error && <span className="error">{error}</span>}</span>
    </div>
  );
};

export default DurationField;
