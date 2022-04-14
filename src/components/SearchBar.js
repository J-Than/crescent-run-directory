import React from "react";

function SearchBar({ filter, onFilter, searchBy, onSearchBy, onSubmit }) {

  function handleFilterState(e) {
    onFilter(e.target.value);
  }

  function handleFilterSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  function handleSearchBy(e) {
    onSearchBy(e.target.value);
  }

  return (
    <div className="Search-bar">
      <select onChange={handleSearchBy} value={searchBy} >
        <option value="displayName">Resident Name</option>
        <option value="lot">Lot Number</option>
        <option value="petName">Pet Name</option>
      </select>
      <form onSubmit={handleFilterSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search Term"
          value={filter}
          onChange={handleFilterState}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
