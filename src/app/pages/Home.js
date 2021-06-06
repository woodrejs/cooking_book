import React from "react";
//components
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <section>
      <div>
        <h1>Home</h1>
        <CustomButton to="/form" text="add product" />
      </div>
    </section>
  );
};
export default Home;
