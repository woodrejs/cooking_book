import React, { useState, useEffect } from "react";
import { change } from "redux-form";

const ScaleField = ({ input, meta }) => {
  const [value, setValue] = useState(5);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(+value);
  };

  useEffect(() => {
    //Saves the value to the field & dispatch
    meta.dispatch(change(meta.form, input.name, value, true));
  }, [value]);

  return (
    <div>
      <label>spiciness_scale</label>
      {Array.from({ length: 10 }, (v, k) => k + 1).map((name) => (
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
    </div>
  );
};
export default ScaleField;
