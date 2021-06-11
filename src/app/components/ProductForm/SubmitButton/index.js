import React from "react";
import "./index.scss";

const SubmitButton = () => {
  return (
    <div className="submitButton">
      <button className="submitButton__button" type="submit">
        <span className="submitButton__button__text">Submit</span>
      </button>
    </div>
  );
};

export default SubmitButton;
