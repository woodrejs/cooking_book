import React from "react";
import { Field } from "redux-form";
import ScaleField from "../ScaleField";
import NumberField from "../NumberField";

const ConditionallyFields = ({ type }) => {
  const handleParse = (value) => +value;

  return (
    <>
      {type === "soup" && (
        <Field label="spiciness scale" name="spiciness_scale" component={ScaleField} />
      )}
      {type === "sandwich" && (
        <Field
          label="slices of bread"
          name="slices_of_bread"
          component={NumberField}
          parse={handleParse}
        />
      )}
      {type === "pizza" && (
        <>
          <Field
            label="number of slices"
            name="no_of_slices"
            component={NumberField}
            parse={handleParse}
          />
          <Field
            label="diameter"
            name="diameter"
            component={NumberField}
            float
            parse={handleParse}
          />
        </>
      )}
    </>
  );
};
export default ConditionallyFields;
