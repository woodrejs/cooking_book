import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//utils
import { useSelector, useDispatch } from "react-redux";
import { setProgress } from "../redux/fetchSlice";
//assets
import tick_icon from "../assets/icons/tick_icon.svg";

const Success = () => {
  const fetchProgress = useSelector((state) => state.fetch.progress);
  const dispatch = useDispatch();

  useEffect(() => dispatch(setProgress(null)), []);

  return (
    <section>
      <button>
        <Link to="/form">add next dish</Link>
      </button>
      <h1>
        added <span>correctly</span>
      </h1>
      <img src={tick_icon} alt="tick_icon" />
    </section>
  );
};
export default Success;
