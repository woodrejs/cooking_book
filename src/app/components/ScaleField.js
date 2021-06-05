import React from "react";
import { change } from "redux-form";

const ScaleField = ({ input, meta, label }) => {
  const { error, touched, dispatch } = meta;

  const handleChange = (e) => {
    //Saves the value to the field & dispatch
    const value = e.target.value;
    dispatch(change(meta.form, input.name, +value, true));
  };

  return (
    <div>
      <label>{label}</label>
      {Array.from({ length: 10 }, (v, k) => k + 1).map((name) => (
        <div key={name}>
          <label>{name}</label>
          <input
            name="spiciness_scale"
            type="radio"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
      ))}
      <span>{touched && error && <span>{error}</span>}</span>
    </div>
  );
};
export default ScaleField;
