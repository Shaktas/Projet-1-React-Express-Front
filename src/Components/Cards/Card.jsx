import PropTypes from "prop-types";
import EyeButton from "../ActionComponents/EyeButton";
import EyeCloseButton from "../ActionComponents/EyeCloseButton";
import { useState } from "react";
import UsePopup from "../Hooks/UsePopup";
import Modal from "../Modal";

const Card = ({ name, url, username, password }) => {
  const [isEye, setIsEye] = useState(true);
  const { popupSuccess, modals, pasteHandler } = UsePopup();

  function clickHandler() {
    setIsEye(!isEye);
  }

  return (
    <>
      {popupSuccess ? <Modal properties={modals.success} /> : ""}
      <div className="min-w- rounded-3xl overflow-hidden text-blue-12 bg-blue-4 border border-blue-12 p-8 m-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-blue-9 text-base">
          <strong className="text-blue-12">URL :</strong>{" "}
          <a href={url} target="_blank" className="text-blue-500">
            {url.length < 16 ? url : url.slice(0, 16) + "..."}
          </a>
        </p>
        <p className="text-blue-9 text-base">
          <button role="button" onClick={() => pasteHandler(username)}>
            <strong className="text-blue-12">Username :</strong>{" "}
            {username.length < 16 ? username : username.slice(0, 16) + "..."}
          </button>
        </p>
        <div className="text-blue-9 flex justify-between text-base">
          <div>
            <button role="button" onClick={() => pasteHandler(password)}>
              <strong className="text-blue-12">Password :</strong>{" "}
              {password.length < 16
                ? !isEye
                  ? password
                  : "•".repeat(6)
                : !isEye
                ? password.slice(0, 16) + "..."
                : "•".repeat(6)}
            </button>
          </div>
          {isEye ? (
            <EyeButton clickHandler={clickHandler} />
          ) : (
            <EyeCloseButton clickHandler={clickHandler} />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
