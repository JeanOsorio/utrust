import CommunicationService from "./communication.js";

const EtherscanService = () => {
  /*
   * Using etherscan latest transaction to get populate user accounts
   */
  const getAccountBalance = (addresses) => {
    return CommunicationService.http({
      url: "https://api.etherscan.io/",
      path: "api",
      params: {
        module: "account",
        action: "balancemulti",
        address: addresses,
        tag: "latest",
        apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
      },
      header: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.result).catch();
  };
  const getAccounts = () => {
    return CommunicationService.http({
      url: "https://api.etherscan.io/",
      path: "api",
      params: {
        module: "account",
        action: "txlistinternal",
        startblock: 0,
        endblock: 2702578,
        page: 22,
        offset: 10,
        sort: "asc",
        apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
      },
      header: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      let addresses = [];
      response.result.forEach((tx) => {
        addresses.push(tx.to);
      });
      return getAccountBalance([...new Set(addresses)].join(","));
    }).catch();
  };

  return {
    getAccounts,
  };
};

export default EtherscanService();
