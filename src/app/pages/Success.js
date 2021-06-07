import React, { useEffect } from "react";
//components
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
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
    <section className="section success">
      <article className="success__content">
        <h1 className="success__content__header">added correctly</h1>

        <div className="success__content__respBox">
          {DATA.map(({ name, value }) => (
            <div className="success__content__respBox__resp">
              <p className="success__content__respBox__resp__name" children={name} />
              <p className="success__content__respBox__resp__value" children={value} />
            </div>
          ))}
        </div>

        <img className="success__content__icon" src={tick_icon} alt="tick_icon" />
      </article>
      <div className="success__backButton">
        <CustomButton to="/form" text="add next dish" />
      </div>
      <ProgressBar progressStage={3} />
    </section>
  );
};
export default Success;

//functions
const formatData = (data) => {
  const dataArr = [];

  if (data) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        if (key !== "id") {
          dataArr.push({ name: key.replaceAll("_", " "), value: data[key] });
        }
      }
    }
  }
  return dataArr;
};
