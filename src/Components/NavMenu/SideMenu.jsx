import { useState } from "react";
import { IconLock } from "/src/assets/Svg.jsx";
import { NavLink } from "react-router-dom";
import Filters from "./Filter";
import NewData from "./NewData";
import Modal from "../Modals/Modal";
import NewEntry from "../Modals/NewEntry";

function SideMenu() {
  const [isOpened, setIsOpened] = useState(false);

  function clickNewHandler() {
    setIsOpened(true);
  }
  function setCloseHandler() {
    setIsOpened(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpened}
        onClose={setCloseHandler}
        title={"Créer une nouvelle entrée"}
        children={<NewEntry />}
      />
      <div className="bg-blue-10 rounded-r-3xl w-1/6 h-screen flex justify-around items-center flex-col">
        <div className="text-blue-5 flex content-flex justify-center">
          <NavLink to="/">
            <IconLock height="60" width="60" />
          </NavLink>
        </div>
        <div className="flex flex-col justify-between items-center">
          <NewData clickHandler={clickNewHandler} />
          <Filters />
        </div>
        <div className="flex flex-col item-center justify-arround">
          <NavLink className="pb-4 text-blue-3" to="/checkPwd">
            Vérificateur de mots de passe
          </NavLink>
          <NavLink className="pb-4 text-blue-3" to="/genPwd">
            Générateur de mots de passe
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
