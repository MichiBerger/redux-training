export function Input({ htmlFor, labelText, value, onChange }) {
  return (
    <div className="input-container">
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        id={htmlFor}
        type="number"
        value={value}
        onChange={onChange}
        placeholder={labelText}
      />
    </div>
  );
}
