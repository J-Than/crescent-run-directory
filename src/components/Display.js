import React from "react";

function Display({ children }) {
  return (
    <div className="Display">
      <h2>Matches:</h2>
      { children }
    </div>
  );
}

export default Display;
