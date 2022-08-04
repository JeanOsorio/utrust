import styles from "./Button.module.css";
function Button(
  { label, onClick, disabled = false, type = "button", testId = "button" },
) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      data-testid={testId}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
