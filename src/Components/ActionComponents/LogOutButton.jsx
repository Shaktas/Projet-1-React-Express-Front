import { LogOutIcon } from "../../assets/Svg";
import PropTypes from "prop-types";

function LogOutButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <LogOutIcon fill="none" />
      </span>
    </button>
  );
}

export default LogOutButton;

LogOutButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
