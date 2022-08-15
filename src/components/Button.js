export function Button({ name, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {name}
    </button>
  );
}
