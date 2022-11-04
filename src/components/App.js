import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import '../stylesheets/App.css';
import Header from "./Header";
import NavBar from "./NavBar";
import Home from "./Home";
import Map from "./Map";
import Photos from "./Photos";
import SearchBar from "./SearchBar";
import Login from "./Login";
import Display from "./Display";
import LotList from "./LotList";
import Sort from "./Sort";
import Admin from "./Admin";
// import ClickMe from "./ClickMe";

// const fetchUrl = "http://localhost:3000/lots"
const fetchUrl = "https://j-than.github.io/crescent-run-directory/db.json/lots"

function App() {

  const [lots, setLots] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchBy, setSearchBy] = useState("displayName");
  const [sortBy, setSortBy] = useState("lot");
  const [lotsToDisplay, setLotsToDisplay] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [blankSearch, setBlankSearch] = useState(true);

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
    setBlankSearch(false);
  }

  function handleLogIn() {
    if (loggedIn) {setLoggedIn(false)}
    if (!loggedIn) {
      if (user === "Test" && password === "123") {
        setLoggedIn(true);
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    };
  }

  function handleNewEntry(newEntry) {
    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    })
    .then((r) => r.json())
    .then((data) => {setLots([...lots, data])})
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      {/* <ClickMe /> */}
      <Switch>
        <Route exact path="/search">
          <SearchBar
            filter={filter}
            onFilter={setFilter}
            searchyBy={searchBy}
            onSearchBy={setSearchBy}
            onSubmit={handleFilterSubmit} />
          <Display search={blankSearch}>
            <Sort sortBy={sortBy} onSortBy={updateSortBy} />
            <LotList lots={lotsToDisplay} />
          </Display>
        </Route>
        <Route exact path="/admin">
          <Login
            loggedIn={loggedIn}
            onLogin={handleLogIn}
            user={user}
            onUser={setUser}
            password={password}
            onPassword={setPassword}
            error={loginError}
            onError={setLoginError} />
          <Admin
            loggedIn={loggedIn}
            onSubmit={handleNewEntry} />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/photos">
          <Photos />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
