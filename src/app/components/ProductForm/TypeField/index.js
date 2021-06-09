import React from "react";
import ErrorMessage from "../ErrorMessage";

const TypeField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="input typeInput">
      <label className="input__label">{label}</label>
      <div className="input__box">
        <select {...input} className="input__input typeInput__input">
          <option />
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </select>
      </div>
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};
export default TypeField;
