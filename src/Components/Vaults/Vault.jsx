import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { countStrengthPassword } from "../../libs/function";
import PwdLevels from "../Users/PwdLevels";
import { KeyIcon } from "../../assets/Svg";
import { useEffect } from "react";
import EditButton from "../ActionComponents/EditButton";
import { useUpdateVault } from "../../hooks/vault/useVaultData";

const Vault = ({ cards, passwordCount, userCount, clickHandler }) => {
  const [isModify, setIsModify] = useState(true);
  const [update, setUpdate] = useState(false);
  const [vaultTitle, setVaultTitle] = useState("");
  const [pwdStrength, setPwdStrength] = useState(0);
  const [cardsData] = useState(Object.values(Object.values(cards)[1]));
  const vaultUpdate = useUpdateVault();
  console.log(cards);

  function updateVaultHandler() {
    console.log("update vault");

    try {
      vaultUpdate.mutate({ title: vaultTitle, id: cards.vaultId });
    } catch (error) {
      console.error("Update failed:", error);
    }

    setIsModify(!isModify);
  }

  function isModifyHandler(e) {
    if (e.key === "Enter") {
      updateVaultHandler();
    }
  }

  useEffect(() => {
    setVaultTitle(cards.vaultTitle);
    const passwords = cardsData.map((card) => card.cardPassword);
    setPwdStrength(countStrengthPassword(passwords));
  }, [cards.vaultTitle, cardsData]);

  return (
    <div className="bg-blue-3 rounded-lg p-4 shadow-lg">
      <div className="relative flex justify-center items-center">
        {isModify ? (
          <>
            <h3 className="flex text-xl font-bold mb-3 text-blue-10">
              {vaultTitle}{" "}
              <span className="ml-3">
                <KeyIcon fill="none" />
              </span>
            </h3>
            <span className="absolute -top-1 right-0 text-blue-12 rounded-full p-1">
              <EditButton clickHandler={() => setIsModify(!isModify)} />
            </span>
          </>
        ) : (
          <>
            <h3 className="flex justify-center content-center text-xl font-bold mb-3 text-blue-10">
              <input
                type="text"
                id="vaultTitle"
                value={vaultTitle}
                onChange={(e) => setVaultTitle(e.target.value)}
                onKeyDown={isModifyHandler}
                className=" w-full text-center p-2 border border-blue-5 rounded-lg focus:outline-none focus:border-blue-9 bg-blue-2"
              />
            </h3>
            <span className="absolute top-2 right-0 text-blue-12 rounded-full p-1">
              <EditButton clickHandler={updateVaultHandler} />
            </span>
          </>
        )}
      </div>

      <button
        className="flex justify-between items-center w-full hover:font-medium"
        onClick={clickHandler}
      >
        <span className="text-blue-12">Users:</span>
        <span className="font-medium text-blue-12">{userCount}</span>
      </button>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-blue-12">Cards:</span>
          <span className="font-medium text-blue-12">{passwordCount}</span>
        </div>
      </div>
      <PwdLevels pwd={pwdStrength} />
    </div>
  );
};

export default Vault;

Vault.propTypes = {
  cards: PropTypes.object.isRequired,
  passwordCount: PropTypes.number,
  userCount: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
