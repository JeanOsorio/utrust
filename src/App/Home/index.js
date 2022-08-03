import { useNavigate } from "react-router-dom";
import Card from "../../common/Components/Card";
import Button from "../../common/Components/Button";

function Home(props) {
  let navigate = useNavigate();
  const handleClick = () => {
    console.log("clicked!");
    navigate("../send");
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
      />
    </div>
  );
}

export default Home;
