import { LogInIcon } from "../../assets/Svg";

function LogInButton() {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
    >
      <span className="mr-2 text-blue-12">
        <LogInIcon fill="none" />
      </span>
    </button>
  );
}

export default LogInButton;
