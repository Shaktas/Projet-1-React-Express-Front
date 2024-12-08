import { useState } from "react";
import { IconLock } from "/src/assets/Svg.jsx";
import { NavLink } from "react-router-dom";
import Filters from "./Filter";
import NewData from "./NewData";
import Modal from "../Modals/Modal";
import NewEntry from "../Modals/NewEntry";
import { BurgerIcon, CloseIcon } from "../../assets/Svg";

function SideMenu() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex flex-col justify-between items-center">
          <NewData clickHandler={() => setIsOpened(true)} />
          <Filters />
        </div>
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
