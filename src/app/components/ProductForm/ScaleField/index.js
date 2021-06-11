import React, { useState, useEffect } from "react";
import { change } from "redux-form";
import RadioInput from "./RadioInput";
import INPUTS from "./index.data";
import ErrorMessage from "../ErrorMessage";
import CustomLabel from "../CustomLabel";
import "./index.scss";

const ScaleField = ({
  input: { name },
  meta: { error, touched, dispatch, form },
  label,
}) => {
  const [currVal, setCurrValue] = useState(null);

  const handleChange = (e) => setCurrValue(+e.target.value);

  const renderRadioInputs = () =>
    INPUTS.map((input) => (
      <RadioInput key={input.id} data={input} currVal={currVal} handler={handleChange} />
    ));

  useEffect(() => {
    //Saves the value to the field
    currVal && dispatch(change(form, name, currVal, true));
  }, [currVal, form, name]);

  return (
    <div className="scaleField ">
      <CustomLabel name={label} />
      <div className="scaleField__box" children={renderRadioInputs()} />
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};
export default ScaleField;
