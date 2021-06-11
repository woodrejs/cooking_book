import React, { useState, useEffect } from "react";
import { change } from "redux-form";
import TimeInput from "./TimeInput";
import ErrorMessage from "../ErrorMessage";
import CustomLabel from "../CustomLabel";
import "./index.scss";

const DurationField = ({
  input: { name },
  meta: { error, touched, dispatch, form },
  label,
}) => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    //Saves the value to the field
    dispatch(change(form, name, `${hours}:${minutes}:${seconds}`, true));
  }, [hours, minutes, seconds, name, form]);

  return (
    <div className="duartionField">
      <CustomLabel name={label} />
      <div className="duartionField__box">
        <TimeInput name="h" value={hours} action={setHours} max="99" />
        <TimeInput name="m" value={minutes} action={setMinutes} />
        <TimeInput name="s" value={seconds} action={setSeconds} />
      </div>
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};

export default DurationField;
