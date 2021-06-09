import React, { useState, useEffect } from "react";
import { change } from "redux-form";
import InputButton from "../InputButton";
import ErrorMessage from "../ErrorMessage";

const NumberField = ({
  input,
  input: { name },
  float = false,
  label,
  meta: { error, touched, dispatch, form },
}) => {
  const [inputValue, setInputValue] = useState(0);

  const handleClickIncrement = () => {
    const result = float ? (+inputValue + 0.1).toFixed(1) : +inputValue + 1;
    setInputValue(result);
  };
  const handleClickDecrement = () => {
    const result = float ? (+inputValue - 0.1).toFixed(1) : +inputValue - 1;
    inputValue > 0 && setInputValue(result);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    //Saves the value to the field
    dispatch(change(form, name, +inputValue, true));
  }, [inputValue]);

  return (
    <div className="input numberInput">
      <label className="input__label">{label}</label>
      <div className="input__box numberInput__box">
        <input
          className="input__input numberInput__box__input"
          {...input}
          type="number"
          step={float ? "0.1" : "1"}
          min="0"
          onChange={(e) => handleChange(e)}
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
