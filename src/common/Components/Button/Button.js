import styles from "./Button.module.css";
function Button({ label }) {
  return <button className={styles.button}>{label}</button>;
}

export default Button;
