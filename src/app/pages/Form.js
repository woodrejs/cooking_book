import React, { useEffect, useState } from "react";
import { Field, reduxForm, Form, SubmissionError } from "redux-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
//components
import DurationField from "../components/DurationField";
import ScaleField from "../components/ScaleField";
import TypeField from "../components/TypeField";
import NumberField from "../components/NumberField";
import TextField from "../components/TextField";
import CustomButton from "../components/CustomButton";
import ProgressBar from "../components/ProgressBar";
//utils
import { useSelector, useDispatch } from "react-redux";
import { setProgress, setData } from "../redux/fetchSlice";

let DishForm = ({ handleSubmit }) => {
  const [dishType, setDishType] = useState(null);
  const [progressStage, setProgressStage] = useState(1);
  const fetchProgress = useSelector((state) => state.fetch.progress);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleParseNumber = (value) => +value;
  const handleParseSelect = (value) => {
    setDishType(value);
    setProgressStage(2);
    return value;
  };
  const handleSubmitForm = async (value) => {
    const isValid = validation(value);

    if (isValid) {
      dispatch(setProgress("inProgress"));
      try {
        //'formatData': format data object depending what dish type is set
        const data = formatData(value);
        const URL = process.env.REACT_APP_DB_URL;
        const resp = await axios.post(URL, data);

        dispatch(setData(resp.data));
        dispatch(setProgress("success"));
      } catch (error) {
        dispatch(setProgress("failed"));
      }
    }
  };

  useEffect(() => {
    switch (fetchProgress) {
      case "success":
        history.push("/success");
        break;
      case "failed":
        history.push("/failed");
        break;
      default:
        break;
    }
  }, [fetchProgress, history]);

  return (
    <section className="section form">
      {/* <CustomButton to="/" text="back" /> */}

      <Form onSubmit={handleSubmit(handleSubmitForm)} className="form__content">
        {/* core fields */}
        <h2 className="form__content__header">add product</h2>
        <Field
          label="name"
          name="name"
          component={TextField}
          className="form__content__field--name"
        />
        <Field name="type" label="type" component={TypeField} parse={handleParseSelect} />
        <Field
          label="preparation time"
          name="preparation_time"
          component={DurationField}
        />

        {/* conditionally fields */}
        {(() => {
          switch (dishType) {
            case "soup":
              return (
                <Field
                  label="spiciness scale"
                  name="spiciness_scale"
                  component={ScaleField}
                />
              );

            case "sandwich":
              return (
                <Field
                  label="slices of bread"
                  name="slices_of_bread"
                  component={NumberField}
                  parse={handleParseNumber}
                />
              );
            case "pizza":
              return (
                <>
                  <Field
                    label="number of slices"
                    name="no_of_slices"
                    component={NumberField}
                    parse={handleParseNumber}
                  />
                  <Field
                    label="diameter"
                    name="diameter"
                    component={NumberField}
                    float
                    parse={handleParseNumber}
                  />
                </>
              );
            default:
              break;
          }
        })()}
        <div className="form__content__buttonBox">
          <button className="form__content__buttonBox__button" type="submit">
            Submit
          </button>
        </div>
      </Form>

      <ProgressBar progressStage={progressStage} />
    </section>
  );
};

DishForm = reduxForm({
  form: "dish",
})(DishForm);

export default DishForm;

//functions
const validation = (data) => {
  const { name, type, preparation_time } = data;
  const { no_of_slices, diameter, slices_of_bread, spiciness_scale } = data;

  let errors = {};
  let isValid = true;

  if (!name || name.trim() === "") {
    errors.name = "Required";
  }

  if (!type) {
    errors.type = "Required";
  } else if (type !== "pizza" && type !== "soup" && type !== "sandwich") {
    errors.type = "No type";
  }

  if (!preparation_time) {
    errors.preparation_time = "Required";
  } else if (preparation_time.trim() === "00:00:00") {
    errors.preparation_time = "Required";
  } else {
    const pattern = /^(?:(?:([0-9][0-9]):)?([0-5]?\d):)?([0-5]?\d)$/;
    const test = pattern.test(preparation_time);

    if (!test) {
      errors.preparation_time = "Wrong format";
    }
  }

  switch (type) {
    case "pizza":
      if (!no_of_slices) {
        errors.no_of_slices = "Required";
      }
      if (!diameter) {
        errors.diameter = "Required";
      }
      break;
    case "soup":
      if (!spiciness_scale) {
        errors.spiciness_scale = "Required";
      } else if (spiciness_scale < 1 || spiciness_scale > 10) {
        errors.spiciness_scale = "Out of scale";
      }
      break;
    case "sandwich":
      if (!slices_of_bread) {
        errors.slices_of_bread = "Required";
      }
      break;
    default:
      break;
  }

  //check if there are some errors in 'errors' object
  if (Object.entries(errors).length !== 0) {
    isValid = false;
    throw new SubmissionError(errors);
  }

  return isValid;
};
const formatData = (data) => {
  const { name, type, preparation_time } = data;
  const { no_of_slices, diameter, slices_of_bread, spiciness_scale } = data;
  let formatedData = {};

  switch (type) {
    case "pizza":
      formatedData = { name, type, preparation_time, no_of_slices, diameter };
      break;
    case "soup":
      formatedData = { name, type, preparation_time, spiciness_scale };
      break;
    case "sandwich":
      formatedData = { name, type, preparation_time, slices_of_bread };
      break;
    default:
      break;
  }

  return formatedData;
};
