import React from "react";

function Map() {
  
  let photo = require(`../resources/crescentRunMap.jpeg`);

  return (
    <div className="Map">
      <img src={photo} className="Large-crop" alt={"Crescent Run Map"} />
    </div>
  );
}

export default Map;
