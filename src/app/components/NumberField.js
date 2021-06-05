import React from "react";

const NumberField = ({ input, float = false, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type="number" step={float ? "0.1" : "1"} min="0" />
      {touched && error && <span>{error}</span>}
    </div>
  );
};
export default NumberField;
