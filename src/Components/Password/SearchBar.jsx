import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import { SearchIcon } from "../../assets/Svg";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  function onChangeHandler(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="flex w-full py-5 justify-center h-auto">
      <div className="flex justify-center items-center bg-blue-8 text-blue-12 md:w-1/2 rounded-3xl relative">
        <input
          className="bg-blue-8 text-blue-12 w-full rounded-3xl indent-5 pr-12"
          type="text"
          id="search"
          onChange={onChangeHandler}
          value={searchTerm}
        />
        <div className="absolute right-2">
          <SearchIcon fill="none" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
