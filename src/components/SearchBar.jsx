function SearchBar({ search, filterDestination }) {
  return (
    <input
      type="text"
      placeholder="search destination"
      value={search}
      onChange={filterDestination}
    />
  );
}

export default SearchBar;
