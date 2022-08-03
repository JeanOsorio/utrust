import Card from "../../common/Components/Card";
function Send(props) {
  return (
    <div>
      <Card
        title="My Ethereum address"
        fullWidth={true}
        footer={true}
        footerText="Please copy the address from which you wish to send money."
      />
    </div>
  );
}

export default Send;
