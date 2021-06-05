import React from "react";

const TypeField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...input}>
        <option />
        <option value="pizza">pizza</option>
        <option value="soup">soup</option>
        <option value="sandwich">sandwich</option>
      </select>
      <span>{touched && error && <span>{error}</span>}</span>
    </div>
  );
};
export default TypeField;
