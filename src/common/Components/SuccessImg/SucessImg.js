import successImg from "./successImg.svg";
import styles from "./SuccessImg.module.css";

function SuccessImg() {
  return (
    <div className={styles.successImgContainer}>
      <img src={successImg} alt="Transaction Complete" />
    </div>
  );
}

export default SuccessImg;
