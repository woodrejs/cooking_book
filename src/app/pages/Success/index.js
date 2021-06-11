import React from "react";
import CustomButton from "../../components/CustomButton";
import ProgressBar from "../../components/ProgressBar";
import ProductInfo from "../../components/ProductInfo";
import { useSelector } from "react-redux";
import tick_icon from "../../assets/icons/tick_icon.svg";
import DATA from "./index.data";
import "./index.scss";

const Success = () => {
  const response = useSelector(({ post }) => post.response);

  return (
    <section className="section success">
      <CustomButton className="success__backButton" to="/panel" text="add next dish" />

      <article className="success__content">
        <h1 className="success__content__header" children={DATA.title} />
        <ProductInfo data={response} />
        <img className="success__content__icon" src={tick_icon} alt="tick_icon" />
      </article>

      <ProgressBar progressStage={3} />
    </section>
  );
};
export default Success;
