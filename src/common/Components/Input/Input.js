import styles from "./Input.module.css";

function Input(
  { type = "text", value, placeholder, label, id, onChange, pattern },
) {
  return (
    <div>
      <label className={styles.inputLabel} htmlFor={id}>{label}</label>
      <br />
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
      />
    </div>
  );
}

export default Input;
