import PropTypes from "prop-types";
import { MoreVerticalIcon } from "../../assets/Svg";

function MoreVerticalButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <MoreVerticalIcon fill="none" />
      </span>
    </button>
  );
}

export default MoreVerticalButton;

MoreVerticalButton.propTypes = {
  clickHandler: PropTypes.func,
};
