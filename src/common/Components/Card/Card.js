import styles from "./Card.module.css";
function Card({ fullWidth = false, title }) {
  return (
    <div
      className={`${styles.CardWrapper} ${fullWidth && styles.FullWidth}`}
    >
      <div className={styles.CardTitle}>{title}</div>
    </div>
  );
}

export default Card;
