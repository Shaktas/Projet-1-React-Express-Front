import PropTypes from "prop-types";
import { EyeCloseIcon } from "../../assets/Svg";

function EyeCloseButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <EyeCloseIcon fill="none" />
      </span>
    </button>
  );
}

export default EyeCloseButton;

EyeCloseButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
