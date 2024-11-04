import { useState } from "react";
import PropTypes from "prop-types";

const ToggleSwitch = ({ properties }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  ToggleSwitch.propTypes = {
    properties: PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
      bgColorOn: PropTypes.string,
      bgColorOff: PropTypes.string,
      toggleWidth: PropTypes.string,
      toggleHeight: PropTypes.string,
      toggleColor: PropTypes.string,
      translateX: PropTypes.string,
    }),
  };

  const {
    width = "w-8",
    height = "h-4",
    bgColorOn = "bg-blue-9",
    bgColorOff = "bg-blue-6",
    toggleWidth = "w-3",
    toggleHeight = "h-3",
    toggleColor = "bg-white",
    translateX = "translate-x-3",
  } = properties;

  return (
    <div
      className={`${
        (width, height, bgColorOff)
      } flex items-center rounded-full p-1 cursor-pointer ${
        isToggled ? bgColorOn : bgColorOff
      }`}
      onClick={toggleHandler}
    >
      <div
        className={` ${
          (toggleColor, toggleWidth, toggleHeight)
        } rounded-full shadow-md transform duration-300 ease-in-out ${
          isToggled ? translateX : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
