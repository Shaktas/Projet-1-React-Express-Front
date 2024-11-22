import { UserIcon } from "../../assets/Svg";

function UserButton() {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
    >
      <span className="mr-2 text-blue-12">
        <UserIcon fill="none" />
      </span>
    </button>
  );
}

export default UserButton;
