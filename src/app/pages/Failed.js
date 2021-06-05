import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//utils
import { useSelector, useDispatch } from "react-redux";
import { setProgress } from "../redux/fetchSlice";
//assets
import cross_icon from "../assets/icons/cross_icon.svg";

const Failed = () => {
  //const fetchProgress = useSelector((state) => state.fetch.progress);
  const dispatch = useDispatch();

  useEffect(() => dispatch(setProgress(null)), []);

  return (
    <section>
      <button>
        <Link to="/form">try again</Link>
      </button>
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
