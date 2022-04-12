import React from "react";
import '../stylesheets/App.css';
import Header from "./Header";
import SearchBar from "./SearchBar";
import Login from "./Login";
import Display from "./Display";
import ResidentList from "./ResidentList";
import Sort from "./Sort";

function App() {
  return (
    <div className="App">
      <Header>
        <SearchBar />
        <Login />
      </Header>
      <Display>
        <Sort />
        <ResidentList />
      </Display>
    </div>
  );
}

export default App;
