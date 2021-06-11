import React from "react";
import "./index.scss";

const CustomLabel = ({ name, sm }) => {
  return <label className={`customLabel ${sm && "customLabel--sm"}`}>{name}</label>;
};
export default CustomLabel;
