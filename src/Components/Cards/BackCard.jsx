import PropTypes from "prop-types";
import MoreVerticalButton from "../ActionComponents/MoreVerticalButton";

const BackCard = ({ onModify, onDelete, clickFlipHandler }) => {
  return (
    <div className="relative min-w-[30vh] min-h-[53vh] rounded-3xl shadow-xl border bg-white border-gray-300 p-8">
      <div className="absolute top-3 right-3">
        <MoreVerticalButton clickHandler={clickFlipHandler} />
      </div>
      <div className="">
        <button
          onClick={onModify}
          className="w-full py-2 px-4 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
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
    </div>
  );
};

BackCard.propTypes = {
  onModify: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  clickFlipHandler: PropTypes.func.isRequired,
};

export default BackCard;
