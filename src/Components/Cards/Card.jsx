import { useState } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import PropTypes from "prop-types";
import Modal from "../Modals/Modal";
import UpdateEntry from "../Modals/UpdateEntry";
import UsePopup from "../../Hooks/UseTooltip";
import Tooltip from "../Tooltip";

const Card = ({ name, url, username, password, type }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const { popupSuccess, tooltips, pasteHandler } = UsePopup();

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function setModifyHandler() {
    setIsOpened(true);
  }

  function setCloseHandler() {
    setIsOpened(false);
  }

  return (
    <>
      {popupSuccess ? (
        <div className="absolute -top-8 left-10 z-50">
          <Tooltip properties={tooltips.success} />
        </div>
      ) : (
        ""
      )}
      <Modal
        isOpen={isOpened}
        onClose={setCloseHandler}
        title="Modifier la carte"
      >
        <UpdateEntry
          name={name}
          url={url}
          username={username}
          password={password}
          type={type}
        />
      </Modal>

      <div className="relative [perspective:1000px]">
        <div
          className={`relative w-full transition-transform duration-500 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="w-full [backface-visibility:hidden]">
            <FrontCard
              name={name}
              url={url}
              username={username}
              password={password}
              type={type}
              clickFlipHandler={handleFlip}
              pasteHandler={pasteHandler}
            />
          </div>
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <BackCard
              onModify={setModifyHandler}
              onDelete={() => console.log("delete")}
              clickFlipHandler={handleFlip}
            />
          </div>
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
  type: PropTypes.string.isRequired,
};
