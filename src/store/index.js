import { createContext, useContext, useState } from "react";

const UserWalletsContext = createContext();
export const useUserWalletsContext = () => useContext(UserWalletsContext);
export const UserWalletsProvider = (props) => {
  const [userWallets, setUserWallets] = useState([]);
  const value = [userWallets, setUserWallets];
  return <UserWalletsContext.Provider value={value} {...props} />;
};
