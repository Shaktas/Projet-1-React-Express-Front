import PropTypes from "prop-types";
import EyeButton from "../ActionComponents/EyeButton";
import EyeCloseButton from "../ActionComponents/EyeCloseButton";
import UsePopup from "../Hooks/UsePopup";
import Modal from "../Modal";
import { useState, useEffect } from "react";
import { FolderIcon, GlobeIcon, LayoutIcon } from "../../assets/Svg";
import MoreVerticalButton from "../ActionComponents/MoreVerticalButton";

const FrontCard = ({
  name,
  url,
  username,
  password,
  type,
  clickFlipHandler,
}) => {
  const [isEye, setIsEye] = useState(true);
  const { popupSuccess, modals, pasteHandler } = UsePopup();
  const [logo, setLogo] = useState("");

  useEffect(() => {
    switch (type) {
      case "Application":
        setLogo(<LayoutIcon fill="none" />);
        break;
      case "Website":
        setLogo(<GlobeIcon fill="none" />);
        break;
      case "Other":
        setLogo(<FolderIcon fill="none" />);
        break;

      default:
        setLogo("Error");
        break;
    }
  }, [type]);

  function clickHandler() {
    setIsEye(!isEye);
  }

  return (
    <>
      {popupSuccess ? <Modal properties={modals.success} /> : ""}
      <div className="relative min-w-[30vh] min-h-[53vh] rounded-3xl text-blue-12 bg-white shadow-xl border border-gray-300 p-8 m-4">
        <div className="absolute top-3 left-3">{logo}</div>
        <div className="absolute top-3 right-3">
          <MoreVerticalButton clickHandler={clickFlipHandler} />
        </div>
        <div className="font-bold text-xl my-2">{name}</div>
        <p className="text-blue-9 text-base">
          <strong className="text-blue-12">URL :</strong>{" "}
          <a href={url} target="_blank" className="text-blue-500">
            {url.length < 16 ? url : url.slice(0, 16) + "..."}
          </a>
        </p>
        <p className="text-blue-9 text-base">
          <button
            className="hover:scale-105 ease-in-out duration-100"
            role="button"
            onClick={() => pasteHandler(username)}
          >
            <strong className="text-blue-12">Username :</strong>{" "}
            {username.length < 16 ? username : username.slice(0, 16) + "..."}
          </button>
        </p>
        <div className="text-blue-9 flex justify-between text-base">
          <div>
            <button
              className="hover:scale-105 ease-in-out duration-100"
              role="button"
              onClick={() => pasteHandler(password)}
            >
              <strong className="text-blue-12">Password :</strong>{" "}
              {password.length < 10
                ? !isEye
                  ? password
                  : "•".repeat(6)
                : !isEye
                ? password.slice(0, 5) + "..."
                : "•".repeat(8)}
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

export default FrontCard;

FrontCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  clickFlipHandler: PropTypes.func.isRequired,
};
