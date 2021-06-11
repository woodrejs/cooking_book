import React from "react";
import "./index.scss";

const ErrorMessage = ({ touched, error }) => {
  return <>{touched && error && <span className="error">{error}</span>}</>;
};
export default ErrorMessage;
