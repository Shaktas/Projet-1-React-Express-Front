import PropTypes from "prop-types";
import { MoreIcon } from "../../assets/Svg";

function MoreButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <MoreIcon fill="none" />
      </span>
    </button>
  );
}

export default MoreButton;

MoreButton.propTypes = {
  clickHandler: PropTypes.func,
};
