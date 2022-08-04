import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../common/Components/Card";
import Button from "../../common/Components/Button";
import EtherscanService from "../../services/etherscan";
import { useUserWalletsContext } from "../../context";
import styles from "./Home.module.css";

function Home(props) {
  const [userWallets, setUserWallets] = useUserWalletsContext();
  let navigate = useNavigate();

  const getInitialAccounts = useCallback(async () => {
    const accountList = await EtherscanService.getAccounts();
    const accountWithEtherBalance = accountList.map((account) => ({
      account: account.account,
      balance: account.balance === "0"
        ? 0
        : (account.balance / 1e18).toFixed(5),
    }));
    setUserWallets(
      accountWithEtherBalance.sort((a, b) => a.balance > b.balance).reverse(),
    );
  }, [setUserWallets]);

  useEffect(() => {
    if (userWallets.length === 0) {
      getInitialAccounts();
    }
  }, [userWallets, getInitialAccounts]);

  const handleClick = () => {
    navigate("../send");
  };

  const renderWallets = () => {
    if (userWallets.length === 0) {
      return;
    }

    return userWallets.map((account) => (
      <div
        key={account.account}
        className={styles.walletItem}
        data-testid="wallet-list-item"
      >
        <span className={styles.walletAddress} data-testid="wallet">
          {account.account}
        </span>
        <span className={styles.walletBalance} data-testis="wallet-balance">
          {account.balance} <span className={styles.walletAddress}>ETH</span>
        </span>
      </div>
    ));
  };
  const cardFooter = () => {
    return (
      <>
        <span>Please copy the address from which you wish to send money.</span>
        <Button label="Next" onClick={handleClick} testId="button-next" />
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
        <div className={styles.walletContainer} data-testid="wallet-list">
          {renderWallets()}
        </div>
      </Card>
    </div>
  );
}

export default Home;
