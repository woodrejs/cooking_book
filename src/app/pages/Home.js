import React from "react";
//components
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";

const Home = () => {
  return (
    <section>
      <div>
        <h1>Home</h1>
        <CustomButton to="/form" text="add product" />
      </div>
      <ProgressBar progressStage={0} />
    </section>
  );
};
export default Home;
