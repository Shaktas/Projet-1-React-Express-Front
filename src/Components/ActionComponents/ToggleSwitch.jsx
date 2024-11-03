import { useState } from "react";

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`w-8 h-4flex items-center bg-blue-6 rounded-full p-1 cursor-pointer ${
        isToggled ? "bg-blue-9" : "bg-blue-6"
      }`}
      onClick={toggleHandler}
    >
      <div
        className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ease-in-out ${
          isToggled ? "translate-x-3" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
