import React from "react";
//components
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";

const Home = () => {
  return (
    <section className="section home">
      <div className="home__content">
        <h1 className="home__content__header">COOK BOOK</h1>

        <CustomButton to="/form" text="add product" />
      </div>
      <ProgressBar progressStage={0} />
    </section>
  );
};
export default Home;
