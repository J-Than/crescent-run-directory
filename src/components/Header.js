import React from "react";

function Header({ children }) {
  return (
    <header className="App-header">
      <h1>Crescent Run</h1>
      <h2 style={{"textAlign":"right"}}>Resident Directory</h2>
      { children }
    </header>
  );
}

export default Header;
