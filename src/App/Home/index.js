import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../common/Components/Card";
import Button from "../../common/Components/Button";
import EtherscanService from "../../services/etherscan";
import styles from "./Home.module.css";
function Home(props) {
  let navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (accounts.length === 0) {
      getInitialAccounts();
    }
  }, [accounts]);

  const getInitialAccounts = async () => {
    const accountList = await EtherscanService.getAccounts();
    const accountWithEtherBalance = accountList.map((account) => ({
      account: account.account,
      balance: (account.balance / 1e18).toFixed(5),
    }));
    setAccounts(
      accountWithEtherBalance.sort((a, b) => a.balance > b.balance).reverse(),
    );
  };

  const handleClick = () => {
    navigate("../send");
  };

  const renderWallets = () => {
    if (accounts.length === 0) {
      return;
    }

    return accounts.map((account) => (
      <div className={styles.walletItem}>
        <span className={styles.walletAddress}>{account.account}</span>
        <span className={styles.walletBalance}>
          {account.balance} <span className={styles.walletAddress}>ETH</span>
        </span>
      </div>
    ));
  };
  const cardFooter = () => {
    return (
      <>
        <span>Please copy the address from which you wish to send money.</span>
        <Button label="Next" onClick={handleClick} />
      </>
    );
  };

  return (
    <div>
      <Card
        title="My Ethereum address"
        fullWidth={true}
        footer={cardFooter()}
      >
        <div className={styles.walletContainer}>
          {renderWallets()}
        </div>
      </Card>
    </div>
  );
}

export default Home;
