import React, { useState } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import DATA from "./index.data";
import ProductForm from "../../components/ProductForm";
import ProgressBar from "../../components/ProgressBar";
import "./index.scss";

const Panel = ({ type }) => {
  return (
    <section className="section panel">
      <article className="panel__content">
        <h2 className="panel__content__header" children={DATA.title} />
        <ProductForm />
      </article>

      <ProgressBar progressStage={type ? 2 : 1} />
    </section>
  );
};

const selector = formValueSelector("products");

export default connect((state) => ({
  type: selector(state, "type"),
}))(Panel);
