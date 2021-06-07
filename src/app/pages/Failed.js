import React, { useEffect } from "react";
//components
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
//utils
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/fetchSlice";
//assets
import cross_icon from "../assets/icons/cross_icon.svg";

const Failed = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setProgress(null)), []);

  return (
    <section className="section failed">
      <div className="failed__backButton">
        <CustomButton to="/form" text="try again" />
      </div>

      <div className="failed__content">
        <h1 className="failed__content__header">error</h1>
        <p className="failed__content__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id esse nisi
          reprehenderit debitis tempore ullam magnam et repudiandae officiis.
        </p>
        <img className="failed__content__icon" src={cross_icon} alt="cross_icon" />
      </div>
      <ProgressBar progressStage={3} />
    </section>
  );
};
export default Failed;
