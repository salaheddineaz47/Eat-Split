export default function FormInput({
  children,
  value,
  onChange,
  onRead = false,
}) {
  return (
    <>
      <label>{children}</label>
      <input type="text" value={value} onChange={onChange} readOnly={onRead} />
    </>
  );
}
