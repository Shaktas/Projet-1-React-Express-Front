import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SearchContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContext.Provider
      value={{ searchTerm, isSearching, setIsSearching, setSearchTerm }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};
