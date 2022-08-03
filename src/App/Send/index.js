import { useNavigate } from "react-router-dom";
import Card from "../../common/Components/Card";
import Button from "../../common/Components/Button";

function Send(props) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("../send");
  };

  return (
    <>
      <Card title="Please fill the form to send Ethereum" />
    </>
  );
}

export default Send;
