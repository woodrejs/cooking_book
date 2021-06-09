import React from "react";

const ErrorMessage = ({ touched, error }) => {
  return <>{touched && error && <span className="error">{error}</span>}</>;
};
export default ErrorMessage;
