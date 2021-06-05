import React, { useEffect } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
//components
import DurationField from "../components/DurationField";
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
    console.log(value);

    dispatch(setProgress("inProgress"));

    try {
      const URL = process.env.REACT_APP_DB_URL;
      const data = value;

      const resp = await axios.post(URL, data);
      console.log(resp);
      dispatch(setProgress("success"));
    } catch (error) {
      dispatch(setProgress("failed"));
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

        <div>
          <label>spiciness_scale</label>
          {Array.from({ length: 10 }, (v, k) => k + 1).map((name) => (
            <Field
              label={name}
              name="spiciness_scale"
              component={radioField}
              key={name}
              parse={handleParse}
            />
          ))}
        </div>

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
