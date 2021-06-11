import React from "react";
import { Link } from "react-router-dom";
import "./customButton.scss";

const CustomButton = ({ to, text, className }) => {
  return (
    <div className={`${className} customButton`}>
      <button className="customButton__button">
        <Link to={to} children={text} className="customButton__button__link" />
      </button>
    </div>
  );
};
export default CustomButton;
