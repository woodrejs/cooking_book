import React from "react";

const ProgressBar = ({ progressStage }) => {
  return (
    <div className="progressBar">
      <div className="progressBar__box">
        {progressStage > 0 && <div className="progressBar__box__stage"></div>}
        {progressStage > 1 && <div className="progressBar__box__stage"></div>}
        {progressStage > 2 && <div className="progressBar__box__stage"></div>}
      </div>
    </div>
  );
};
export default ProgressBar;
