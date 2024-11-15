import { EyeIcon } from "../../assets/Svg";

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
