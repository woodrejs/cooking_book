import React, { useEffect } from "react";
//components
import CustomButton from "../components/CustomButton";
//utils
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/fetchSlice";
//assets
import cross_icon from "../assets/icons/cross_icon.svg";

const Failed = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(setProgress(null)), []);

  return (
    <section>
      <CustomButton to="/form" text="try again" />

      <h1>error</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id esse nisi
        reprehenderit debitis tempore ullam magnam et repudiandae officiis.
      </p>
      <img src={cross_icon} alt="cross_icon" />
    </section>
  );
};
export default Failed;
