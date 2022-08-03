import styles from "./Button.module.css";
function Button({ label, onClick, disabled = false, type = "button" }) {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.buttonDisabled : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
