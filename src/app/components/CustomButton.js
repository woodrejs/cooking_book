import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ to, text }) => {
  return (
    <button>
      <Link to={to} children={text} />
    </button>
  );
};
export default CustomButton;
