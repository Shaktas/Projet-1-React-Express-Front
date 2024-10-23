import { IconLock } from "/src/assets/LockSvg.jsx";
import { Routes, Route, NavLink } from "react-router-dom";

import NewData from "./NewData";
import CheckElement from "../Password/CheckElement";
import GenElement from "../Password/GenElement";

function SideMenu() {
  const filtres = ["Toutes les entrées", "Sites Web", "Applications", "Autre"];
  return (
    <div className="bg-blue-10 h-full rounded-r-3xl fixed w-1/6 flex content-center flex-col">
      <div className="text-blue-5 flex content-flex justify-center my-3">
        <IconLock height="60" width="60" />
      </div>
      <div className="flex flex-col content-center justify-around h-2/5 my-44">
        <NewData />
        {filtres.map((filtre, index) => (
          <div
            className="flex content-center justify-center text-blue-3"
            key={index + filtre}
          >
            <p className="cursor-pointer">{filtre}</p>
          </div>
        ))}
        <div>
          <NavLink to="/CheckPassword">Vérificateur de mots de passe</NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
