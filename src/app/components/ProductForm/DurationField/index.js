import React, { useState, useEffect } from "react";
import { change } from "redux-form";
import TimeInput from "./TimeInput";
import ErrorMessage from "../ErrorMessage";

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
    <div className="input duartionInput">
      <label className="input__label">{label}</label>
      <div className="input_box duartionInput__box">
        <TimeInput name="h" value={hours} action={setHours} max="99" />
        <TimeInput name="m" value={minutes} action={setMinutes} />
        <TimeInput name="s" value={seconds} action={setSeconds} />
      </div>
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};

export default DurationField;
