import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../common/Components/Card";
import Button from "../../common/Components/Button";
import Input from "../../common/Components/Input";
import UTrustService from "../../services/utrust";
import { useUserWalletsContext } from "../../context";
import styles from "./Send.module.css";

const initFormState = {
  values: {
    from: null,
    to: null,
    amount: 0,
  },
  valid: false,
};

function Send(props) {
  const [userWallets, setUserWallets] = useUserWalletsContext();
  const [formState, setFormState] = useState(initFormState);
  let navigate = useNavigate();

  useEffect(() => {
    const { from, to, amount } = formState.values;
    if (from && to && amount > 0) {
      setFormState((prevState) => ({
        ...prevState,
        valid: true,
      }));
    }
  }, [formState.values, formState.valid]);

  const handleChange = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [event.target.id]: event.target.id === "amount"
          ? parseFloat(event.target.value)
          : event.target.value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.valid) {
      return;
    }

    const copyUserWallets = [...userWallets];
    // in real life, this is supposed to do the POST request and update the balance of each wallet
    if (userWallets.map((uw) => uw.account).includes(formState.values.from)) {
      const userFromWallet = copyUserWallets.find((uw) =>
        uw.account === formState.values.from
      );

      userFromWallet.balance = parseFloat(userFromWallet.balance) -
        formState.values.amount;
      setUserWallets(copyUserWallets);
    }

    if (userWallets.map((uw) => uw.account).includes(formState.values.to)) {
      const userToWallet = copyUserWallets.find((uw) =>
        uw.account === formState.values.to
      );

      userToWallet.balance = parseFloat(userToWallet.balance) +
        formState.values.amount;
      setUserWallets(copyUserWallets);
      navigate("../send/success");
      return;
    }

    UTrustService.sendEth(formState.values).then((response) =>
      navigate("../send/success")
    );
  };

  return (
    <>
      <Card title="Please fill the form to send Ethereum">
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <Input
              id="from"
              type="text"
              label="From"
              placeholder=" Your address"
              onChange={handleChange}
            />

            <Input
              id="to"
              type="text"
              label="To"
              placeholder=" Destination address"
              onChange={handleChange}
            />
            <Input
              id="amount"
              type="number"
              label="Amount"
              placeholder=" Ethereum amoount"
              onChange={handleChange}
              step="any"
            />
            <div className={styles.buttonContainer}>
              <Button type="submit" label="Send" disabled={!formState.valid} />
            </div>
          </form>
        </div>
      </Card>
    </>
  );
}

export default Send;
