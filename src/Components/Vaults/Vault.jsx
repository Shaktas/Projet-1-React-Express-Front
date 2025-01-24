import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { countStrengthPassword } from "../../libs/function";
import PwdLevels from "../Users/PwdLevels";
import { KeyIcon } from "../../assets/Svg";
import { useEffect } from "react";
import EditButton from "../ActionComponents/EditButton";
import { useDeleteVault, useUpdateVault } from "../../hooks/vault/useVaultData";
import MoreVerticalButton from "../ActionComponents/MoreVerticalButton";
// import { AuthenticateContext } from "../../Context/AuthenticateContext";

const Vault = ({ cards, passwordCount, userCount, vaultId, clickHandler }) => {
  // const { userId } = useContext(AuthenticateContext);
  const [isModify, setIsModify] = useState(true);
  // const [isAutorized, setIsAutorized] = useState(
  //   if (condition) {

  // });
  const [vaultTitle, setVaultTitle] = useState("");
  const [pwdStrength, setPwdStrength] = useState(0);
  const [cardsData] = useState(Object.values(Object.values(cards)[1]));
  const [isOpen, setIsOpen] = useState(false);
  const vaultUpdate = useUpdateVault();
  const vaultDelete = useDeleteVault();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function updateVaultHandler() {
    try {
      vaultUpdate.mutate({ title: vaultTitle, id: cards.vaultId });
    } catch (error) {
      console.error("Update failed:", error);
    }

    setIsModify(!isModify);
  }

  function deleteHandler() {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer ce Coffre-fort ?\nCette action supprimera tout les cartes liées au coffre-fort et est irréversible."
    );
    if (confirmation) {
      vaultDelete.mutate({ vaultId });
      setIsOpen(false);
    }
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
        <div className="absolute top-0 left-0">
          <MoreVerticalButton clickHandler={() => setIsOpen(!isOpen)} />
        </div>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-0 left-0 bg-white p-3 rounded-lg shadow-lg"
          >
            <button
              onClick={deleteHandler}
              className="w-full py-1 px-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        )}
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

      <div className="flex justify-between items-center w-full"></div>

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
  vaultId: PropTypes.number.isRequired,
};
