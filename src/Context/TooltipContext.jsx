import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TooltipContext = createContext({
  popupSuccess: false,
  setPopupSuccess: () => {},
  tooltips: {},
  pasteHandler: () => {},
});

export const TooltipProvider = ({ children }) => {
  const [tooltipSuccess, setTooltipSuccess] = useState(false);

  const pasteHandler = (string) => {
    navigator.clipboard.writeText(string);
    setTooltipSuccess(true);
    setTimeout(() => {
      setTooltipSuccess(false);
    }, 2000);
  };

  const tooltips = {
    success: {
      message: "Texte copié !",
      condtion: "success",
      isVisible: tooltipSuccess,
    },
    deco: {
      message: "Vous avez été déconnecté car vous avez été inactif",
      condtion: "error",
      isVisible: tooltipSuccess,
    },
  };

  return (
    <TooltipContext.Provider
      value={{ tooltipSuccess, setTooltipSuccess, pasteHandler, tooltips }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

TooltipProvider.propTypes = {
  children: PropTypes.node,
};
