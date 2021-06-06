import React, { useState, useEffect } from "react";
import { change } from "redux-form";

const DurationField = ({ input: { name }, meta, label }) => {
  const { error, touched, dispatch, form } = meta;

  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  //INPUTS: list of inputs to render
  const INPUTS = [
    { id: 0, name: "h", max: "99", value: hours, action: setHours },
    { id: 1, name: "m", max: "59", value: minutes, action: setMinutes },
    { id: 2, name: "s", max: "59", value: seconds, action: setSeconds },
  ];

  const handleChange = (e, action) => {
    let value = e.target.value;
    value = +value < 10 ? `0${value}` : value;
    action(value);
  };

  useEffect(() => {
    //Saves the value to the field
    dispatch(change(form, name, `${hours}:${minutes}:${seconds}`, true));
  }, [hours, minutes, seconds, name, form]);

  return (
    <div>
      <label>{label}</label>

      {INPUTS.map(({ id, name, max, value, action }) => (
        <div key={id}>
          <label>{name}</label>
          <input
            type="number"
            min="0"
            max={max}
            value={value}
            onChange={(e) => handleChange(e, action)}
          />
        </div>
      ))}

      <span>{touched && error && <span>{error}</span>}</span>
    </div>
  );
};

export default DurationField;
