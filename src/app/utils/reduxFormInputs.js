export const textField = ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="text" />
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
    <input {...input} type="number" step={float ? "0.1" : "1"} />
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
export const radioField = ({ input, label, meta: { error, touched } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type="radio" value={label} />
    {touched && error && <span>{error}</span>}
  </div>
);
export const durationFields = (fields) =>
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
