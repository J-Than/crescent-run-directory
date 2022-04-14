import React from "react";

function Sort({ sortBy, onSortBy }) {

  function handleSortBy(e) {
    onSortBy(e.target.value);
  }

  return (
    <div className="Sort">
      <span>Sort By: </span>
      <select value={sortBy} onChange={handleSortBy}>
        <option value="lastName">Last Name</option>
        <option value="firstName">First Name</option>
        <option value="lot">Lot Number</option>
      </select>
    </div>
  );
}

export default Sort;
