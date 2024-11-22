import { SearchIcon } from "../../assets/Svg";

function SearchButton() {
  return (
    <button
      className="flex justify-center items-center"
      type="button"
      role="button"
      onClick={() => console.log("Search")}
    >
      <span className="mr-2 text-blue-12">
        <SearchIcon fill="none" />
      </span>
    </button>
  );
}

export default SearchButton;
