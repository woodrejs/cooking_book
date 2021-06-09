import React, { useState, useEffect } from "react";
import { change } from "redux-form";
import RadioInput from "./RadioInput";
import INPUTS from "./index.data";
import ErrorMessage from "../ErrorMessage";

const ScaleField = ({
  input: { name },
  meta: { error, touched, dispatch, form },
  label,
}) => {
  const [currVal, setCurrValue] = useState(null);

  const handleChange = (e) => setCurrValue(+e.target.value);

  useEffect(() => {
    //Saves the value to the field
    currVal && dispatch(change(form, name, currVal, true));
  }, [currVal, form, name]);

  console.log(currVal);

  return (
    <div className="input scaleInput">
      <label className="input__label">{label}</label>
      <div className="input__box scaleInput__box">
        {INPUTS.map((input) => (
          <RadioInput
            key={input.id}
            data={input}
            currVal={currVal}
            handler={handleChange}
          />
        ))}
      </div>
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};
export default ScaleField;
