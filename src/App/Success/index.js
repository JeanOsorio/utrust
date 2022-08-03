import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Card from "../../common/Components/Card";
import SuccessImg from "../../common/Components/SuccessImg";
import styles from "./Success.module.css";
function Success(props) {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    if (!location.state) {
      navigate("../");
    }
  }, [location]);
  return (
    <Card title="Transaction complete">
      {location && location.state && (
        <>
          <div className={styles.successContainer}>
            <div className={styles.imageContainer}>
              <SuccessImg />
            </div>
            <div>
              <div className={styles.subTitles}>You sent</div>
              <div>{location.state.amount} ETH</div>
              <hr className={styles.hr} />
              <div className={styles.subTitles}>From</div>
              <div className={styles.wallet}>{location.state.from}</div>
              <div className={styles.subTitles}>To</div>
              <div className={styles.wallet}>{location.state.to}</div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

export default Success;
