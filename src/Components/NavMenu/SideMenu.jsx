import { useState, useContext, useEffect } from "react";
import { IconLock } from "/src/assets/Svg.jsx";
import { NavLink } from "react-router-dom";
import Filters from "./Filter";
import NewData from "./NewData";
import Modal from "../Modals/Modal";
import NewEntry from "../Modals/NewEntry";
import { BurgerIcon, CloseIcon } from "../../assets/Svg";
import { AuthenticateContext } from "../../Context/AuthenticateContext";
import { VaultContext } from "../../Context/VaultContext";
import { useGetVaultsByUser } from "../../hooks/vault/useVaultData";

function SideMenu() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userId, isAuthenticate } = useContext(AuthenticateContext);
  const { vaults } = useGetVaultsByUser(userId);
  const [vaultId, setVaultId] = useState(null);
  const { setActualVaultId } = useContext(VaultContext);
  const [isSetVault, setIsSetVault] = useState(false);

  function selectHandler(e) {
    setVaultId(e.target.value);
  }

  useEffect(() => {
    console.log(vaultId, "vaultId");
    if (vaultId) {
      setActualVaultId(vaultId);
      setIsSetVault(true);
    } else {
      setIsSetVault(false);
    }
  }, [vaultId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Modal
        isOpen={isOpened}
        onClose={() => setIsOpened(false)}
        title={"Créer une nouvelle entrée"}
      >
        <NewEntry />
      </Modal>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-10 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <CloseIcon fill="none" />
        ) : (
          <BurgerIcon fill="none" />
        )}
      </button>
      <div
        className={`
        fixed lg:relative
        bg-blue-10 h-screen
        w-64 lg:w-1/6
        transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
        rounded-r-3xl flex justify-around items-center flex-col z-40
      `}
      >
        <div className="text-blue-5 flex content-flex justify-center">
          <NavLink to="/">
            <IconLock height="60" width="60" />
          </NavLink>
        </div>
        {isAuthenticate && (
          <div className="flex flex-col justify-between items-center">
            <NewData clickHandler={() => setIsOpened(true)} />
            {vaults && (
              <select
                onChange={selectHandler}
                className="px-6 min-w-9 py-1 mb-4 border border-gray-300 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-9 text-center"
              >
                <option value="" className="text-center">
                  Choisir un coffre
                </option>
                {Object.entries(vaults).map(([key, vault]) => (
                  <option
                    key={`vault + ${key}`}
                    value={`${key}`}
                    className="text-center"
                  >
                    {vault.vaultName}
                  </option>
                ))}
              </select>
            )}
            {isSetVault && <Filters />}
          </div>
        )}
        <div className="flex gap-4 flex-col item-center justify-arround">
          <NavLink className="text-blue-3 mx-3 text-center" to="/checkPwd">
            Vérificateur de mots de passe
          </NavLink>
          <NavLink className="text-blue-3 mx-3 text-center" to="/genPwd">
            Générateur de mots de passe
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
