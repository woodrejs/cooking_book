import React, { useEffect } from "react";
import { Field, reduxForm, Form, SubmissionError } from "redux-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
//components
import DurationField from "../components/DurationField";
import ScaleField from "../components/ScaleField";
//utils
import { useSelector, useDispatch } from "react-redux";
import { setProgress } from "../redux/fetchSlice";
import {
  textField,
  numberField,
  selectField,
  radioField,
} from "../utils/reduxFormInputs";
//uuid???

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

  if (!spiciness_scale) {
    errors.spiciness_scale = "Required";
  } else if (spiciness_scale < 1 || spiciness_scale > 10) {
    errors.spiciness_scale = "Out of scale";
  }

  if (!no_of_slices) {
    errors.no_of_slices = "Required";
  }

  if (!diameter) {
    errors.diameter = "Required";
  }

  if (!slices_of_bread) {
    errors.slices_of_bread = "Required";
  }

  //check if there are some errors in 'errors' object
  if (Object.entries(errors).length !== 0) {
    isValid = false;
    throw new SubmissionError(errors);
  }

  return isValid;
};

let DishForm = ({ handleSubmit }) => {
  const fetchProgress = useSelector((state) => state.fetch.progress);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleParse = (value) => +value;

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
  }, [fetchProgress]);

  const submit = async (value) => {
    const isValid = validation(value);

    if (isValid) {
      // dispatch(setProgress("inProgress"));
      // try {
      //   const URL = process.env.REACT_APP_DB_URL;
      //   const data = value;
      //   const resp = await axios.post(URL, data);
      //   console.log(resp);
      //   dispatch(setProgress("success"));
      // } catch (error) {
      //   dispatch(setProgress("failed"));
      // }
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(submit)}>
        <Field label="name" name="name" component={textField} />

        <Field
          label="preparation_time"
          name="preparation_time"
          component={DurationField}
        />

        <Field label="type" name="type" component={selectField}>
          <option />
          <option value="pizza">pizza</option>
          <option value="soup">soup</option>
          <option value="sandwich">sandwich</option>
        </Field>

        <Field
          label="no_of_slices"
          name="no_of_slices"
          component={numberField}
          parse={handleParse}
        />
        <Field
          label="diameter"
          name="diameter"
          component={numberField}
          float
          parse={handleParse}
        />
        <Field
          label="slices_of_bread"
          name="slices_of_bread"
          component={numberField}
          parse={handleParse}
        />

        <Field label="spiciness_scale" name="spiciness_scale" component={ScaleField} />

        <button type="submit">Submit</button>
      </Form>
      <button>
        <Link to="/">Start</Link>
      </button>
    </section>
  );
};

DishForm = reduxForm({
  form: "dish",
})(DishForm);

export default DishForm;
