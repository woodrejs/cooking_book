import React, { useState, useEffect } from "react";
import { change } from "redux-form";

const DurationField = ({ input, meta, label }) => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const INPUTS = [
    { id: 0, name: "h", max: "any", value: hours, action: setHours },
    { id: 1, name: "m", max: "59", value: minutes, action: setMinutes },
    { id: 2, name: "s", max: "59", value: seconds, action: setSeconds },
  ];

  const handleChange = (e, action) => {
    let value = e.target.value;
    value = +value < 10 ? `0${value}` : value;
    action(value);
  };

  useEffect(() => {
    //set merged value in input
    meta.dispatch(change(meta.form, input.name, `${hours}:${minutes}:${seconds}`, true));
  }, [hours, minutes, seconds]);

  return (
    <div>
      <label>{label}</label>
      <input {...input} type="text" hidden />

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
    </div>
  );
};

export default DurationField;