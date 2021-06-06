import React, { useEffect } from "react";
//components
import CustomButton from "../components/CustomButton";
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
      <CustomButton to="/form" text="add next dish" />

      <article>
        <h1>
          <span>{fetchData.name ?? null}</span>
          <span>added correctly</span>
        </h1>

        <div>
          {DATA.map(({ name, value }) => (
            <div>
              <span children={name} />
              <span children={value} />
            </div>
          ))}
        </div>
      </article>

      <img src={tick_icon} alt="tick_icon" />
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
        if (key !== "id" && key !== "name") {
          dataArr.push({ name: key.replaceAll("_", " "), value: data[key] });
        }
      }
    }
  }
  return dataArr;
};
