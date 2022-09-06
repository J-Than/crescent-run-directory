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
    <table className="Search-bar">
      <tbody>
        <tr>
          <td style={{"contentAlign":"left"}}>
            <strong>Search By: </strong>
            <select onChange={handleSearchBy} value={searchBy} >
              <option value="displayName">Resident Name</option>
              <option value="lot">Lot Number</option>
              <option value="petName">Pet Name</option>
            </select>
          </td>
          <td style={{"contentAlign":"right"}}>
            <form onSubmit={handleFilterSubmit}>
              <input
                type="search"
                name="search"
                placeholder="Search Term"
                value={filter}
                onChange={handleFilterState}></input>
              <button type="submit">Search</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SearchBar;
