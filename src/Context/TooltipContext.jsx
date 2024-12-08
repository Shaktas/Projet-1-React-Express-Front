import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TooltipContext = createContext({
  popupSuccess: false,
  setPopupSuccess: () => {},
  tooltips: {},
  pasteHandler: () => {},
});

export const TooltipProvider = ({ children }) => {
  const [popupSuccess, setPopupSuccess] = useState(false);

  const pasteHandler = (string) => {
    navigator.clipboard.writeText(string);
    setPopupSuccess(true);
    setTimeout(() => {
      setPopupSuccess(false);
    }, 2000);
  };

  const tooltips = {
    success: {
      message: "Texte copié !",
      condtion: "success",
      isVisible: popupSuccess,
    },
  };

  return (
    <TooltipContext.Provider
      value={{ popupSuccess, setPopupSuccess, pasteHandler, tooltips }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

TooltipProvider.propTypes = {
  children: PropTypes.node,
};
