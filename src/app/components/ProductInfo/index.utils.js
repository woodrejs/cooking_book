export const formatData = (data) => {
  const dataArr = [];

  if (data) {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        if (key !== "id") {
          dataArr.push({ name: key.replaceAll("_", " "), value: data[key] });
        }
      }
    }
  }
  return dataArr;
};
