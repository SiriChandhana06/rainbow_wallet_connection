import React, { createContext, useContext, useState } from 'react';

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accountInfo, setAccountInfo] = useState({ displayName: '', displayBalance: '' });

  return (
    <AccountContext.Provider value={{ accountInfo, setAccountInfo }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => useContext(AccountContext);
