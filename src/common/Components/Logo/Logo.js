import utrustLogo from "./utrust.svg";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <img src={utrustLogo} alt="utrust" />
    </div>
  );
}

export default Logo;
