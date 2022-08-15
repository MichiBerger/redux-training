export function Button({ name, onClick, disabled }) {
  return (
    <button
      className={disabled ? "button-disabled" : "button"}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
