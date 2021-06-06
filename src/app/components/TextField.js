import React from "react";

const TextField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type="text" />
      {touched && error && <span>{error}</span>}
    </div>
  );
};
export default TextField;
