import { useState } from "react";
import PropTypes from "prop-types";

const ToggleSwitch = ({
  properties = {
    width: "w-8",
    height: "h-4",
    bgColorOn: "bg-blue-9",
    bgColorOff: "bg-blue-6",
    toggleWidth: "w-3",
    toggleHeight: "h-3",
    toggleColor: "bg-white",
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
      className={`${properties.width} ${properties.height} ${
        properties.bgColorOff
      })
      } flex items-center rounded-full p-1 cursor-pointer ${
        isToggled ? properties.bgColorOn : properties.bgColorOff
      }`}
      onClick={setIsToggledHandler}
    >
      <div
        className={`${properties.toggleColor} 
        ${properties.toggleWidth} 
        ${properties.toggleHeight}
        } rounded-full shadow-md transform duration-300 ease-in-out ${
          isToggled ? properties.translateX : ""
        }`}
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
    toggleColor: PropTypes.string,
    translateX: PropTypes.string,
  }),
  isToggle: PropTypes.func,
};

export default ToggleSwitch;
