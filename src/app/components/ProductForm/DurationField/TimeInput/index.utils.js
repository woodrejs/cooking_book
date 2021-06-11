export const formatVal = (val) => (+val < 10 ? `0${val}` : +val);
export const decrementVal = (val, max) => formatVal(+val >= 1 ? +val - 1 : max);
export const incrementVal = (val, max) => formatVal(+val >= max ? 0 : +val + 1);
