import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TooltipContext = createContext({
  pasteHandler: () => {},
  selectTooltip: {},
});

export const TooltipProvider = ({ children }) => {
  const [selectTooltip, setSelectTooltip] = useState({});
  const tooltips = {
    success: {
      message: "Texte copié !",
      condition: "success",
      isVisible: true,
    },
    deco: {
      message: "Vous avez été déconnecté car vous avez été inactif",
      condition: "error",
      isVisible: true,
    },
    errorAuth: {
      message: "Erreur lors de l'authentification",
      condition: "error",
      isVisible: true,
    },
  };

  const pasteHandler = (string, choice) => {
    console.log("pasteHandler", string, choice);

    navigator.clipboard.writeText(string);
    setSelectTooltip(tooltips[choice]);
    setTimeout(() => {
      setSelectTooltip({
        ...tooltips[choice],
        isVisible: false,
      });
    }, 2000);
  };

  return (
    <TooltipContext.Provider value={{ pasteHandler, selectTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};

TooltipProvider.propTypes = {
  children: PropTypes.node,
};
