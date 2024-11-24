import { useState } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import PropTypes from "prop-types";

const Card = ({ name, url, username, password, type }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    console.log("flip");

    setIsFlipped(!isFlipped);
  };

  return (
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
          />
        </div>
        <div className="absolute -top-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <BackCard
            onModify={() => console.log("modify")}
            onDelete={() => console.log("delete")}
            clickFlipHandler={handleFlip}
          />
        </div>
      </div>
    </div>
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
