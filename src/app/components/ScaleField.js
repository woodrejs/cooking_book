import React, { useState, useEffect } from "react";
import { change } from "redux-form";
//uuid??

const ScaleField = ({ input, meta, label }) => {
  const [value, setValue] = useState(null);
  const { error, touched, dispatch, form } = meta;
  const { name } = input;
  const INPUTS = Array.from({ length: 10 }, (v, k) => k + 1);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(+value);
  };

  useEffect(() => {
    //Saves the value to the field
    value && dispatch(change(form, name, value, true));
  }, [value, form, name]);

  return (
    <div className="input scaleInput">
      <label className="input__label">{label}</label>
      <div className="input__box scaleInput__box">
        {INPUTS.map((name) => (
          <div key={name} className="scaleInput__box__inputBox">
            <input
              name="spiciness_scale"
              type="radio"
              value={name}
              checked={value === name ? true : false}
              onChange={(e) => handleChange(e)}
            />
            <label className="scaleInput__box__inputBox__label">{name}</label>
          </div>
        ))}
      </div>
      <span>{touched && error && <span className="error">{error}</span>}</span>
    </div>
  );
};
export default ScaleField;
