import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Field, reduxForm, Form } from "redux-form";
import TypeField from "./TypeField";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";
import DurationField from "./DurationField";
import { isValid, prepareData } from "./index.utils";
import { setResponse } from "../../redux/postSlice";
import ConditionallyFields from "./ConditionallyFields";

let ProductForm = ({ handleSubmit }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmitForm = async (value) => {
    if (isValid(value)) {
      try {
        //'prepareData': prepare data object depending what dish type is set
        const data = prepareData(value);
        const URL = process.env.REACT_APP_DB_URL;
        const resp = await axios.post(URL, data);

        dispatch(setResponse(resp.data));
        history.push("/success");
      } catch (error) {
        history.push("/failed");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)} className="form__content">
      <Field name="name" label="name" component={TextField} />
      <Field name="type" label="type" component={TypeField} />
      <Field name="preparation_time" label="preparation" component={DurationField} />
      <ConditionallyFields />
      <SubmitButton />
    </Form>
  );
};

ProductForm = reduxForm({
  form: "products",
})(ProductForm);

export default ProductForm;
