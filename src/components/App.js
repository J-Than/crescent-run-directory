import React, { useState, useEffect } from "react";
import '../stylesheets/App.css';
import Header from "./Header";
import SearchBar from "./SearchBar";
// import Login from "./Login";
import Display from "./Display";
import LotList from "./LotList";
import Sort from "./Sort";

const fetchUrl = "http://localhost:3001/lots"

function App() {

  const [lots, setLots] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchBy, setSearchBy] = useState("displayName");
  const [sortBy, setSortBy] = useState("lot");
  const [lotsToDisplay, setLotsToDisplay] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
    .then(r => r.json())
    .then(data => {
      setLots(data);
      setLotsToDisplay(data.filter(d => d.displayName !== ""));
    })
  }, [])

  function updateSortBy(sort, lot) {
    let update = lot !== undefined ? lot : lotsToDisplay;
    const sortTerm = sort !== null ? sort : sortBy;
    if (sortTerm === "lot") {
      update = update.sort((a, b) => {return a.lot-b.lot})
    } else {
      update = update.sort((a, b) => {
        const nameA = a[sortTerm].toUpperCase();
        const nameB = b[sortTerm].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    }
    setLotsToDisplay(update);
    if (sort !== null) {setSortBy(sort)};
  }

  function handleFilterSubmit() {
    let lotUpdate = lots.filter(l => l[searchBy] !== "");
    lotUpdate = lotUpdate.filter(lot => {
      return searchBy==="lot" ? lot.lot===parseInt(filter, 10) : lot[searchBy].toUpperCase().includes(filter.toUpperCase());
    })
    updateSortBy(null, lotUpdate);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar
        filter={filter}
        onFilter={setFilter}
        searchyBy={searchBy}
        onSearchBy={setSearchBy}
        onSubmit={handleFilterSubmit} />
      {/* <Login /> */}
      <Display>
        <Sort sortBy={sortBy} onSortBy={updateSortBy} />
        <LotList lots={lotsToDisplay} />
      </Display>
    </div>
  );
}

export default App;
