import { useState, useContext } from "react";
import { TooltipContext } from "../../Context/TooltipContext";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import PropTypes from "prop-types";
import Modal from "../Modals/Modal";
import UpdateEntry from "../Modals/UpdateEntry";

const Card = ({ name, url, username, password, type, cardId, vaultId }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const { pasteHandler } = useContext(TooltipContext);

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
          cardId={cardId}
          vaultId={vaultId}
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
              onDelete={() => alert("Voulez vraiment supprimer cette carte ?")}
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
  cardId: PropTypes.number.isRequired,
  vaultId: PropTypes.number.isRequired,
};
