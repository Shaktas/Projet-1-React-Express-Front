import PropTypes from "prop-types";
import { CloseIcon } from "../../assets/Svg";

function CloseButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <CloseIcon fill="none" />
      </span>
    </button>
  );
}

export default CloseButton;

CloseButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
