import style from './input.module.css';

export default function Input({ type, name, placeholder, onChange, value }) {
  function handleChange(event) {
    const { value } = event.target;
    onChange(value);
  }

  return (
    <input
    className={style.input}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}
