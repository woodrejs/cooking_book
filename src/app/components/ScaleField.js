import React, { useState, useEffect } from "react";
import { change } from "redux-form";
//uuid??

const ScaleField = ({ input, meta }) => {
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
    <div>
      <label>spiciness_scale</label>

      {INPUTS.map((name) => (
        <div key={name}>
          <label>{name}</label>
          <input
            name="spiciness_scale"
            type="radio"
            value={name}
            checked={value === name ? true : false}
            onChange={(e) => handleChange(e)}
          />
        </div>
      ))}
      <span>{touched && error && <span>{error}</span>}</span>
    </div>
  );
};
export default ScaleField;
