import { LogOutIcon } from "../../assets/Svg";

function LogOutButton() {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
    >
      <span className="mr-2 text-blue-12">
        <LogOutIcon fill="none" />
      </span>
    </button>
  );
}

export default LogOutButton;
