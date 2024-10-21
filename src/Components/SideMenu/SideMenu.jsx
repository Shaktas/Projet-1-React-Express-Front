import NewData from "./NewData";
import LockSVG from "/src/assets/LockSvg.svg";

function SideMenu() {
  const filtres = ["Toutes les entrées", "Sites Web", "Applications", "Autre"];
  return (
    <div className="bg-blue-10 h-full rounded-r-3xl fixed w-1/6 flex content-center flex-col">
      <img className="text-blue-8" src={LockSVG} alt="" />
      <NewData />
      <div className="flex flex-col content-center justify-around h-2/5">
        {filtres.map((filtre, index) => (
          <button key={index + filtre} className="text-blue-3">
            {filtre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
