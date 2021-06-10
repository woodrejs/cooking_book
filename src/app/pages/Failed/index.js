import React from "react";
import CustomButton from "../../components/CustomButton";
import ProgressBar from "../../components/ProgressBar";
import cross_icon from "../../assets/icons/cross_icon.svg";
import DATA from "./index.data";

const Failed = () => {
  return (
    <section className="section failed">
      <CustomButton className="failed__backButton" to="/panel" text="try again" />

      <article className="failed__content">
        <h1 className="failed__content__header" children={DATA.title} />
        <p className="failed__content__text" children={DATA.text} />
        <img className="failed__content__icon" src={cross_icon} alt="cross_icon" />
      </article>

      <ProgressBar progressStage={3} />
    </section>
  );
};
export default Failed;
