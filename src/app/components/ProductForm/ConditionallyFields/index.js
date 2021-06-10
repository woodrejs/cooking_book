import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector } from "redux-form";
import ScaleField from "../ScaleField";
import NumberField from "../NumberField";

const ConditionallyFields = ({ type }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "soup":
            return (
              <Field
                label="spiciness scale"
                name="spiciness_scale"
                component={ScaleField}
              />
            );
          case "sandwich":
            return (
              <Field
                label="slices of bread"
                name="slices_of_bread"
                component={NumberField}
              />
            );
          case "pizza":
            return (
              <>
                <Field label="diameter" name="diameter" component={NumberField} float />
                <Field
                  label="number of slices"
                  name="no_of_slices"
                  component={NumberField}
                />
              </>
            );

          default:
            break;
        }
      })()}
    </>
  );
};

const selector = formValueSelector("products");

export default connect((state) => ({
  type: selector(state, "type"),
}))(ConditionallyFields);
