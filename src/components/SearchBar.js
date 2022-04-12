import React from "react";

function SearchBar() {
  return (
    <div className="Search-bar">
      <select>
        <option value="lastName">Last Name</option>
        <option value="firstName">First Name</option>
        <option value="lotNumber">Lot Number</option>
      </select>
      <form>
        <input type="search" placeholder="Search"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
