import React from "react";
import ErrorMessage from "../ErrorMessage";
import CustomLabel from "../CustomLabel";
import "./index.scss";

const TextField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="input textField">
      <CustomLabel name={label} />
      <div className="textField__box">
        <input {...input} type="text" className="textField__box__input" />
      </div>
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};
export default TextField;
