import Button from "../Button";
import styles from "./Card.module.css";
function Card(
  { fullWidth = false, title, footer = null },
) {
  return (
    <div
      className={`${styles.card} ${fullWidth && styles.fullwidth}`}
    >
      <div className={styles.cardHeader}>{title}</div>
      <div className={styles.cardContent}>contenido de la card</div>
      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
