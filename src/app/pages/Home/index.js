import React from "react";
import DATA from "./index.data";
import CustomButton from "../../components/CustomButton";
import ProgressBar from "../../components/ProgressBar";
import "./index.scss";

//?? progrressbar
const Home = () => {
  return (
    <section className="section home">
      <div className="home__content">
        <h1 className="home__content__header" children={DATA.title} />
        <CustomButton to="/panel" text="add product" />
      </div>

      <ProgressBar progressStage={0} />
    </section>
  );
};
export default Home;
