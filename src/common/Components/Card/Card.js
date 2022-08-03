import styles from "./Card.module.css";
function Card(
  { fullWidth = false, title, footer = null, children },
) {
  return (
    <div
      className={`${styles.card} ${fullWidth && styles.fullwidth}`}
    >
      <div className={styles.cardHeader}>{title}</div>
      <div className={styles.cardContent}>{children}</div>
      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
