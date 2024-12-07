import PropTypes from "prop-types";
import { BurgerIcon } from "../../assets/Svg";

function BurgerButton({ clickHandler }) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={clickHandler}
    >
      <span className="mr-2 text-blue-12">
        <BurgerIcon fill="none" />
      </span>
    </button>
  );
}

export default BurgerButton;

BurgerButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
