export default function Input({
  label,
  onSelect,
  identifier,
  value,
  ...props
}) {
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input
        {...props}
        onChange={(event) => {
          onSelect(identifier, event.target.value);
        }}
        value={value}
        required
      />
    </div>
  );
}
