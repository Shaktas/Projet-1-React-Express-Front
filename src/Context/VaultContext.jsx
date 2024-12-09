import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const VaultContext = createContext({
  vaultName: false,
  setVaultName: () => {},
});

export const VaultProvider = ({ children }) => {
  const [vaultName, setVaultName] = useState("MyVault");

  return (
    <VaultContext.Provider value={{ vaultName, setVaultName }}>
      {children}
    </VaultContext.Provider>
  );
};

VaultProvider.propTypes = {
  children: PropTypes.node,
};
