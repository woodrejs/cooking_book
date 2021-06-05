import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//utils
import { useSelector, useDispatch } from "react-redux";
import { setProgress } from "../redux/fetchSlice";
//assets
import tick_icon from "../assets/icons/tick_icon.svg";

const Success = () => {
  const fetchData = useSelector((state) => state.fetch.data);
  const dispatch = useDispatch();
  const DATA = formatData(fetchData);

  useEffect(() => dispatch(setProgress(null)), []);

  return (
    <section>
      <button>
        <Link to="/form">add next dish</Link>
      </button>
      <h1>
        <span>{fetchData.name ?? null}</span> added <span>correctly</span>
      </h1>
      <div>
        {DATA.map(({ name, value }) => (
          <div>
            <span>{name}:</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
      <img src={tick_icon} alt="tick_icon" />
    </section>
  );
};
export default Success;

const formatData = (data) => {
  const dataArr = [];

  if (data) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        if (key !== "id" && key !== "name") {
          dataArr.push({ name: key.replace("_", " "), value: data[key] });
        }
      }
    }
  }
  return dataArr;
};
