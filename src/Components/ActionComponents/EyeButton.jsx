import { EyeIcon } from "../../assets/Svg";
import PropType from "prop-types";

function EyeButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <EyeIcon fill="none" />
      </span>
    </button>
  );
}

export default EyeButton;

EyeButton.propTypes = {
  clickHandler: PropType.func.isRequired,
};
