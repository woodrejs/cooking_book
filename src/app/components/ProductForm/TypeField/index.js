import React from "react";
import ErrorMessage from "../ErrorMessage";
import CustomLabel from "../CustomLabel";
import "./index.scss";

const TypeField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="typeField">
      <CustomLabel name={label} />
      <div className="typeField__box">
        <select {...input} className="typeField__box__input">
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
