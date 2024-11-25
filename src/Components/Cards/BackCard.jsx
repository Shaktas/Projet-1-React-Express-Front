import PropTypes from "prop-types";
import MoreVerticalButton from "../ActionComponents/MoreVerticalButton";

const BackCard = ({ onModify, onDelete, clickFlipHandler }) => {
  return (
    <div className="relative min-w-[10vw] min-h-[10vh] flex flex-col justify-center items-center rounded-3xl shadow-xl border bg-white border-gray-300 p-12 mx-4">
      <div className="absolute top-2 right-2">
        <MoreVerticalButton clickHandler={clickFlipHandler} />
      </div>

      <button
        onClick={onModify}
        className="w-full py-2 px-4 mb-2 bg-blue-9 text-white rounded hover:bg-blue-11"
      >
        Modifier
      </button>
      <button
        onClick={onDelete}
        className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Supprimer
      </button>
    </div>
  );
};

BackCard.propTypes = {
  onModify: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  clickFlipHandler: PropTypes.func.isRequired,
};

export default BackCard;
