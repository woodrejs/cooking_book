import React from "react";

const ProgressBar = ({ progressStage }) => {
  return (
    <div>
      <div>
        {progressStage > 0 && <div>1</div>}
        {progressStage > 1 && <div>2</div>}
        {progressStage > 2 && <div>3</div>}
      </div>
    </div>
  );
};
export default ProgressBar;
