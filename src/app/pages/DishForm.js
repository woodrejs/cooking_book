import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import {
  textField,
  numberField,
  selectField,
  radioField,
  durationFields,
} from "../utils/reduxFormInputs";
//uuid???

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
