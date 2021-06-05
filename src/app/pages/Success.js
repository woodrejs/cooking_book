import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//utils
import { useSelector, useDispatch } from "react-redux";
import { setProgress } from "../redux/fetchSlice";
//assets
import tick_icon from "../assets/icons/tick_icon.svg";

const Success = () => {
  // const fetchProgress = useSelector((state) => state.fetch.progress);
  const fetchData = useSelector((state) => state.fetch.data);
  const dispatch = useDispatch();

  useEffect(() => dispatch(setProgress(null)), []);
  //tmp
  console.log(fetchData);

  return (
    <section>
      <button>
        <Link to="/form">add next dish</Link>
      </button>
      <h1>
        <span>{fetchData.name ?? null}</span> added <span>correctly</span>
      </h1>
      <img src={tick_icon} alt="tick_icon" />
    </section>
  );
};
export default Success;
/*
 
  
  */
