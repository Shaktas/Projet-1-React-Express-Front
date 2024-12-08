import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext";
import { SearchIcon } from "../../assets/Svg";
import { useNavigate } from "react-router-dom";
import { TooltipContext } from "../../Context/TooltipContext";
import Tooltip from "../Tooltip";

function SearchBar() {
  const { searchTerm, setSearchTerm, setIsSearching } =
    useContext(SearchContext);
  const { tooltips } = useContext(TooltipContext);
  const navigate = useNavigate();

  function onChangeHandler(e) {
    setSearchTerm(e.target.value);
    if (e.target.value.length >= 3) {
      setIsSearching(true);
      navigate("/myVault");
    } else {
      setIsSearching(false);
    }
  }

  return (
    <div className="relative flex w-full py-5 justify-center h-auto">
      <div className="absolute top-4 left-10 z-50">
        <Tooltip properties={tooltips.success} />
      </div>
      <div className="flex justify-center items-center bg-blue-8 text-blue-12 md:w-1/2 rounded-3xl relative">
        <input
          className="bg-blue-8 text-blue-12 w-full rounded-3xl pl-5 py-1 pr-10"
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
