import { useState } from "react";
import ToggleSwitch from "../ActionComponents/ToggleSwitch";

const NewEntry = () => {
  const [isVault, setIsVault] = useState(false);

  function setToggleHandler(bool) {
    setIsVault(bool);
  }

  console.log(isVault);

  const toogleColor = {
    width: "w-9",
    height: "h-6",
    bgColorOn: "bg-blue-9",
    bgColorOff: "bg-green-500",
    toggleWidth: "w-4",
    toggleHeight: "h-4",
    toggleColorOn: "bg-blue-2",
    toggleColorOff: "bg-white",
    translateX: "translate-x-3",
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <p>Coffre Fort ?</p>
        <ToggleSwitch isToggle={setToggleHandler} properties={toogleColor} />
        <p>Nouvelle carte ? </p>
      </div>
      {isVault ? (
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
          />
          <input
            type="url"
            placeholder="URL"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
          />
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
          />
          <select className="px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9">
            <option value="Website">Website</option>
            <option value="Application">Application</option>
            <option value="Other">Other</option>
          </select>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-9"
          />
        </div>
      )}
      <button className="mt-4 w-full bg-blue-9 text-white py-2 rounded-lg hover:bg-blue-10 transition-colors">
        Créer
      </button>
    </>
  );
};

export default NewEntry;
