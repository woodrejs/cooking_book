import React, { useState } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";
import DATA from "./index.data";
import ProductForm from "../../components/ProductForm";
import ProgressBar from "../../components/ProgressBar";

const Panel = ({ type }) => {
  return (
    <section className="section form">
      <article>
        <h2 className="form__content__header" children={DATA.title} />
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
