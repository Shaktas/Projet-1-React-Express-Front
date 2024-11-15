function SearchBar() {
  return (
    <div className="flex py-5 justify-center w-full h-auto flex-none">
      <input
        className="bg-blue-8 text-blue-12 md:w-1/2 rounded-3xl indent-5"
        type="text"
        id="search"
      />
    </div>
  );
}

export default SearchBar;
