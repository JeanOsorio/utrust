import styles from "./Button.module.css";
function Button({ label, onClick }) {
  const handleClick = (event) => {
    onClick(event);
  };
  return (
    <button className={styles.button} onClick={handleClick}>{label}</button>
  );
}

export default Button;
