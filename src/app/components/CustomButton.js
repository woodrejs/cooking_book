import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ to, text }) => {
  return (
    <button className="customButton">
      <Link to={to} children={text} className="customButton__link" />
    </button>
  );
};
export default CustomButton;
