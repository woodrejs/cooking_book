export const textField = ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="text" placeholder="sss" />
    {touched && error && <span>{error}</span>}
  </div>
);
export const numberField = ({
  input,
  float = false,
  label,
  meta: { error, touched },
}) => (
  <div>
    <label>{label}</label>
    <input {...input} type="number" step={float ? "0.1" : "1"} min="0" />
    {touched && error && <span>{error}</span>}
  </div>
);
export const selectField = ({ input, label, children, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <select {...input}>{children}</select>
    {touched && error && <span>{error}</span>}
  </div>
);
