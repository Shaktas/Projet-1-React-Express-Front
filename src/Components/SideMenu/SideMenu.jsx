import { IconLock } from "/src/assets/LockSvg.jsx";
import { Routes, Route, NavLink } from "react-router-dom";

import NewData from "./NewData";
import CheckElement from "../Password/CheckElement";
import GenElement from "../Password/GenElement";

function SideMenu() {
  const filtres = ["Toutes les entrées", "Sites Web", "Applications", "Autre"];
  return (
    <div className="bg-blue-10 h-full rounded-r-3xl fixed w-1/6 flex content-center flex-col">
      <IconLock color="red" />
      <div className="flex flex-col content-center justify-around h-2/5">
        <NewData />
        {filtres.map((filtre, index) => (
          <div key={index + filtre} className="text-blue-3">
            <p>{filtre}</p>
          </div>
        ))}
        <div>
          <NavLink to="/CheckPassword">Vérificateur de mots de passe</NavLink>
          <NavLink to="/GenPassword">Générateur de mots de passe</NavLink>
        </div>

        <Routes>
          <Route path="/checkPassword" element={<CheckElement />}></Route>
          <Route path="/genPassword" element={<GenElement />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default SideMenu;
