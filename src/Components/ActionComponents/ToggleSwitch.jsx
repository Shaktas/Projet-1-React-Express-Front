import { useState } from "react";
import PropTypes from "prop-types";

const ToggleSwitch = ({
  properties = {
    width: "w-8",
    height: "h-4",
    bgColorOn: "bg-blue-9",
    bgColorOff: "bg-blue-2",
    toggleWidth: "w-3",
    toggleHeight: "h-3",
    toggleColorOn: "bg-blue-2",
    toggleColorOff: "bg-blue-5",
    translateX: "translate-x-3",
  },
  isToggle,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const setIsToggledHandler = () => {
    setIsToggled(!isToggled);
    isToggle(!isToggled);
  };

  return (
    <div
      className={`
        ${properties.width} 
        ${properties.height} 
        ${isToggled ? properties.bgColorOn : properties.bgColorOff}
        flex items-center rounded-full p-1 cursor-pointer`}
      onClick={setIsToggledHandler}
    >
      <div
        className={` 
        ${properties.toggleWidth} 
        ${properties.toggleHeight}
        ${isToggled ? properties.translateX : ""}
        ${isToggled ? properties.toggleColorOn : properties.toggleColorOff}
        rounded-full border-solid shadow-2xl transform duration-300 ease-in-out`}
      ></div>
    </div>
  );
};

ToggleSwitch.propTypes = {
  properties: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    bgColorOn: PropTypes.string,
    bgColorOff: PropTypes.string,
    toggleWidth: PropTypes.string,
    toggleHeight: PropTypes.string,
    toggleColorOn: PropTypes.string,
    toggleColorOff: PropTypes.string,
    translateX: PropTypes.string,
  }),
  isToggle: PropTypes.func,
};

export default ToggleSwitch;
