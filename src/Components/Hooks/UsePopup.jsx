import { useState } from "react";

function UsePopup() {
  const [popupSuccess, setPopupSuccess] = useState(false);

  const pasteHandler = (string) => {
    navigator.clipboard.writeText(string);
    setPopupSuccess(true);
    setTimeout(() => {
      setPopupSuccess(false);
    }, 3000);
  };

  const modals = {
    success: {
      message: "Texte copié !",
      condtion: "success",
      isVisible: popupSuccess,
    },
  };

  return { popupSuccess, modals, pasteHandler };
}

export default UsePopup;
