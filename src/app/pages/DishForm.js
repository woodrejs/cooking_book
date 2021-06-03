import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
//uuid???

const textField = ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="text" />
    {touched && error && <span>{error}</span>}
  </div>
);
const numberField = ({ input, float = false, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="number" step={float ? "0.1" : "1"} />
    {touched && error && <span>{error}</span>}
  </div>
);
const selectField = ({ input, label, children, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <select {...input}>{children}</select>
    {touched && error && <span>{error}</span>}
  </div>
);
const radioField = ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="radio" value={label} />
    {touched && error && <span>{error}</span>}
  </div>
);
const durationFields = (fields) =>
  fields.names.map((name) => {
    const { input, touched, error } = fields[name];

    return (
      <div key={name}>
        <label>{name}</label>
        <input {...input} type="number" />
        {touched && error && <span>{error}</span>}
      </div>
    );
  });

let DishForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field label="name" name="name" component={textField} />
      <Fields names={["h", "m", "s"]} component={durationFields} />

      <Field label="type" name="type" component={selectField}>
        <option />
        <option value="pizza">pizza</option>
        <option value="soup">soup</option>
        <option value="sandwich">sandwich</option>
      </Field>

      <Field label="no_of_slices" name="no_of_slices" component={numberField} />
      <Field label="diameter" name="diameter" component={numberField} float />
      <Field label="slices_of_bread" name="slices_of_bread" component={numberField} />

      <div>
        <label>spiciness_scale</label>
        {Array.from({ length: 10 }, (v, k) => k + 1).map((name) => (
          <Field label={name} name="spiciness_scale" component={radioField} key={name} />
        ))}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

DishForm = reduxForm({
  form: "dish",
})(DishForm);

export default DishForm;
