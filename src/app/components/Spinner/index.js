import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import "./index.scss";

const Spinner = () => {
  const inProgress = useSelector(({ post }) => post.inProgress);

  return (
    <>
      {inProgress && (
        <div className="spinner">
          <div className="spinner__background"></div>
          <div className="spinner__box">
            <Loader
              type="Puff"
              color="#f0f0f0"
              height={100}
              width={100}
              timeout={10000}
            />
            <span className="spinner__box__title">Loading</span>
          </div>
        </div>
      )}
    </>
  );
};
export default Spinner;
