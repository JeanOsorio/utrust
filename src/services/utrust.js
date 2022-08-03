import CommunicationService from "./communication";
const ETrust = () => {
  const sendEth = (data) => {
    return CommunicationService.http({
      url: "https://jsonplaceholder.typicode.com", // using jsonplaceholder api to simulate a POST requuest
      path: "post",
      method: "POST",
      data,
      header: {
        "Content-Type": "application/json",
      },
    }).then((response) => response).catch();
  };
  return { sendEth };
};

export default ETrust();
