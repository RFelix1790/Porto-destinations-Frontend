function SearchBar({ search, filterDestination }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="search destination"
        value={search}
        onChange={filterDestination}
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
