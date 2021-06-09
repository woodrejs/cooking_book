import React from "react";
import ErrorMessage from "../ErrorMessage";

const TextField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="input textInput">
      <label className="input__label">{label}</label>
      <div className="input__box">
        <input {...input} type="text" className="input__input" />
      </div>
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};
export default TextField;
