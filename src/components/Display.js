import React from "react";

function Display({ search, children }) {
  if (search) {
    return (
      <div className="Display">
        <p />
        <h3>Enter terms above to search for residents.</h3>
      </div>
    );
  } else {
    return (
      <div className="Display">
        <h3>Matches:</h3>
        <p />
        { children }
      </div>
    );
  }
}

export default Display;
