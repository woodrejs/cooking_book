import React, { useState } from "react";
//components
import ProductForm from "../components/ProductForm";
import ProgressBar from "../components/ProgressBar";

const DishForm = () => {
  const [progressStage, setProgressStage] = useState(1);
  const handleProgressBar = () => setProgressStage(2);

  return (
    <section className="section form">
      <article>
        <h2 className="form__content__header">add product</h2>
        <ProductForm handleProgressBar={handleProgressBar} />
      </article>

      <ProgressBar progressStage={progressStage} />
    </section>
  );
};

export default DishForm;
