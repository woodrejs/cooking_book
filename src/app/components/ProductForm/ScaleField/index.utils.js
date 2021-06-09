import { v4 as uuid } from "uuid";

export const createRadioArray = (name, length) =>
  Array.from({ length }, (v, k) => ({
    id: uuid(),
    name,
    value: k + 1,
    label: String(k + 1),
  }));
