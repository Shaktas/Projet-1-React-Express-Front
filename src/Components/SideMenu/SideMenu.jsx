function SideMenu() {
  const filtres = ["Toutes les entrées", "Sites Web", "Applications", "Autre"];
  return (
    <div className="bg-indigo-10 h-full rounded-r-3xl fixed w-1/6 flex content-center justify-evenly flex-col">
      {filtres.map((filtre, index) => (
        <button key={index + filtre} className="text-indigo-3">
          {filtre}
        </button>
      ))}
    </div>
  );
}

export default SideMenu;
