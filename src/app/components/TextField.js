import React from "react";

const TextField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="input textInput">
      <label className="input__label">{label}</label>
      <div className="input__box">
        <input {...input} type="text" className="input__input" />
      </div>
      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};
export default TextField;
