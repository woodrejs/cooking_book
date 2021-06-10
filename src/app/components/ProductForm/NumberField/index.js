import React, { useState, useEffect } from "react";
import { change } from "redux-form";
import InputButton from "../InputButton";
import ErrorMessage from "../ErrorMessage";
import { incrementVal, decrementVal } from "./index.utils";

const NumberField = ({
  input,
  input: { name },
  float = false,
  label,
  meta: { error, touched, dispatch, form },
}) => {
  const [inputValue, setInputValue] = useState(0);

  const handleClickIncrement = () => setInputValue(incrementVal(inputValue, float));
  const handleClickDecrement = () => setInputValue(decrementVal(inputValue, float));
  const handleChange = (e) => setInputValue(+e.target.value);

  useEffect(() => {
    //Saves the value to the field
    dispatch(change(form, name, inputValue, true));
  }, [inputValue]);

  return (
    <div className="input numberInput">
      <label className="input__label">{label}</label>
      <div className="input__box numberInput__box">
        <input
          className="input__input numberInput__box__input"
          {...input}
          type="number"
          min="0"
          onChange={handleChange}
          value={inputValue}
        />
        <InputButton handler={handleClickDecrement} decr />
        <InputButton handler={handleClickIncrement} />
      </div>
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};
export default NumberField;
