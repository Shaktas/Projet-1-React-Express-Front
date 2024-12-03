import PropTypes from "prop-types";
import { EditIcon } from "../../assets/Svg";

function EditButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <EditIcon fill="none" />
      </span>
    </button>
  );
}

export default EditButton;

EditButton.propTypes = {
  clickHandler: PropTypes.func,
};
