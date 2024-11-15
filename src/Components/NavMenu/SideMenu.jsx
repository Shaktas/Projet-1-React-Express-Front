import { IconLock } from "/src/assets/Svg.jsx";
import { NavLink } from "react-router-dom";

function SideMenu() {
  const filtres = ["Toutes les entrées", "Sites Web", "Applications", "Autre"];
  return (
    <div className="bg-blue-10 rounded-r-3xl w-1/6 h-screen flex content-center flex-col">
      <div className="text-blue-5 flex content-flex justify-center my-3">
        <NavLink to="/">
          <IconLock height="60" width="60" />
        </NavLink>
      </div>
      <div className="flex flex-col justify-around h-2/5 my-10">
        {filtres.map((filtre, index) => (
          <div
            className="flex content-center justify-center text-blue-3"
            key={index + filtre}
          >
            <p className="cursor-pointer">{filtre}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col item-center justify-arround h-2/5 my-44">
        <NavLink to="/checkPwd">Vérificateur de mots de passe</NavLink>
        <NavLink to="/genPwd">Générateur de mots de passe</NavLink>
      </div>
    </div>
  );
}

export default SideMenu;
