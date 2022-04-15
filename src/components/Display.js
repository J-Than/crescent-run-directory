import React from "react";

function Display({ children }) {
  return (
    <div className="Display">
      <h3>Matches:</h3>
      { children }
    </div>
  );
}

export default Display;
