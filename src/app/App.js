import React from "react";
import DishForm from "./pages/DishForm";
import axios from "axios";

const changePreparationTimeFormat = (arr) => {
  const tmpArr = arr.map((val) => (+val < 10 ? `0${val}` : val));
  return tmpArr.join(":");
};

const App = () => {
  const handleSubmit = async (val) => {
    const url = "https://frosty-wood-6558.getsandbox.com:443/dishes";
    const data = {
      name: val.name,
      type: val.type,
      preparation_time: changePreparationTimeFormat([val.h, val.m, val.s]),
      diameter: +val.diameter,
      no_of_slices: +val.no_of_slices,
      slices_of_bread: +val.slices_of_bread,
      spiciness_scale: +val.spiciness_scale,
    };

    try {
      const resp = await axios.post(url, data);
      //validation
      console.log(resp.data);
    } catch (error) {
      //add custom error
      throw new Error("Request error", 400, error);
    }
  };
  return (
    <main>
      <DishForm onSubmit={handleSubmit} />
    </main>
  );
};

export default App;
