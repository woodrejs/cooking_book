import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ to, text, className }) => {
  return (
    <div className={className}>
      <button className="customButton">
        <Link to={to} children={text} className="customButton__link" />
      </button>
    </div>
  );
};
export default CustomButton;
