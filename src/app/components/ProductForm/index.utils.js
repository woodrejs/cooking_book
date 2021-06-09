import { SubmissionError } from "redux-form";

export const isValid = (data) => {
  const { name, type, preparation_time } = data;
  const { no_of_slices, diameter, slices_of_bread, spiciness_scale } = data;

  let errors = {};
  let isValid = true;

  if (!name || name.trim() === "") {
    errors.name = "Required";
  }

  if (!type) {
    errors.type = "Required";
  } else if (type !== "pizza" && type !== "soup" && type !== "sandwich") {
    errors.type = "No type";
  }

  if (!preparation_time) {
    errors.preparation_time = "Required";
  } else if (preparation_time.trim() === "00:00:00") {
    errors.preparation_time = "Required";
  } else {
    const pattern = /^(?:(?:([0-9][0-9]):)?([0-5]?\d):)?([0-5]?\d)$/;
    const test = pattern.test(preparation_time);

    if (!test) {
      errors.preparation_time = "Wrong format";
    }
  }

  //conditionally fields validation
  switch (type) {
    case "pizza":
      if (!no_of_slices) {
        errors.no_of_slices = "Required";
      }
      if (!diameter) {
        errors.diameter = "Required";
      }
      break;
    case "soup":
      if (!spiciness_scale) {
        errors.spiciness_scale = "Required";
      } else if (spiciness_scale < 1 || spiciness_scale > 10) {
        errors.spiciness_scale = "Out of scale";
      }
      break;
    case "sandwich":
      if (!slices_of_bread) {
        errors.slices_of_bread = "Required";
      }
      break;
    default:
      break;
  }

  //check if there are some errors in 'errors' object
  if (Object.entries(errors).length !== 0) {
    isValid = false;
    throw new SubmissionError(errors);
  }

  return isValid;
};
export const prepareData = (data) => {
  let preparedData = {};

  if (data) {
    const { name, type, preparation_time } = data;
    const { no_of_slices, diameter, slices_of_bread, spiciness_scale } = data;

    switch (type) {
      case "pizza":
        preparedData = { name, type, preparation_time, no_of_slices, diameter };
        break;
      case "soup":
        preparedData = { name, type, preparation_time, spiciness_scale };
        break;
      case "sandwich":
        preparedData = { name, type, preparation_time, slices_of_bread };
        break;
      default:
        break;
    }
  }

  return preparedData;
};
