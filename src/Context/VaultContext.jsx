import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useCardsQueries,
  useGetVaultsByUser,
} from "../hooks/vault/useVaultData";
import { useContext } from "react";
import { AuthenticateContext } from "./AuthenticateContext";

export const VaultContext = createContext({
  cardsFromVault: [],
  actualVaultId: null,
  setActualVaultId: () => {},
});

export const VaultProvider = ({ children }) => {
  const { userId } = useContext(AuthenticateContext);
  const { vaults } = useGetVaultsByUser(userId);
  const { data: cardsQueries } = useCardsQueries(vaults);
  const [cardsFromVault, setCardsFromVault] = useState([]);

  useEffect(() => {
    if (!vaults || !cardsQueries || !cardsQueries.every((card) => card)) {
      return;
    }
    const updatedCards = cardsQueries.map((card) => {
      const vault = vaults[card.vaultId];
      return vault ? { ...card, vaultTitle: vault.vaultName } : card;
    });

    setCardsFromVault(updatedCards);
  }, [vaults, cardsQueries]);

  const [actualVaultId, setActualVaultId] = useState(null);

  return (
    <VaultContext.Provider
      value={{ cardsFromVault, actualVaultId, setActualVaultId }}
    >
      {children}
    </VaultContext.Provider>
  );
};

VaultProvider.propTypes = {
  children: PropTypes.node,
};
