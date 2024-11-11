import { CopySvg } from "../../assets/Svg";
import PropTypes from "prop-types";

function CopyButton(PasteHandler) {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={PasteHandler}
    >
      <span className="mr-2 text-blue-12">
        <CopySvg height="15" width="15" />
      </span>
    </button>
  );
}

export default CopyButton;

CopyButton.propTypes = {
  PasteHandler: PropTypes.func,
};
