export const incrementVal = (val, float = false) => {
  const result = float ? (+val + 0.1).toFixed(1) : Math.round(+val + 1);
  return +result;
};
export const decrementVal = (val, float = false) => {
  const result = float ? (+val - 0.1).toFixed(1) : Math.round(+val - 1);
  return val > 0 ? +result : 0;
};
