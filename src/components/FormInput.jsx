export function FormInput({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div className="field-group">
      <label className="field-label" htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}
