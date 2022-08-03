import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../common/Components/Card";
import Button from "../../common/Components/Button";
import Input from "../../common/Components/Input";
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

  const handleClick = () => {
    navigate("../send");
  };

  const handleChange = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [event.target.id]: event.target.value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.valid) {
      return;
    }
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
              pattern="[0-9]*\.?[0-9]*"
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
