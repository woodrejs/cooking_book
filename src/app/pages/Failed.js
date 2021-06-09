import React from "react";
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
import cross_icon from "../assets/icons/cross_icon.svg";

const Failed = () => {
  return (
    <section className="section failed">
      <CustomButton className="failed__backButton" to="/form" text="try again" />

      <article className="failed__content">
        <h1 className="failed__content__header">error</h1>
        <p className="failed__content__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id esse nisi
          reprehenderit debitis tempore ullam magnam et repudiandae officiis.
        </p>
        <img className="failed__content__icon" src={cross_icon} alt="cross_icon" />
      </article>

      <ProgressBar progressStage={3} />
    </section>
  );
};
export default Failed;
