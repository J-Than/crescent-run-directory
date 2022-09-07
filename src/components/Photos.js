import React from "react";

function Photos() {
  
  let photo1 = require(`../resources/crescentRunHotTubs.jpeg`);
  let photo2 = require(`../resources/crescentRunCenter.jpeg`);
  let photo3 = require(`../resources/crescentRunGrass.jpeg`);
  let photo4 = require(`../resources/crescentRunPool.jpeg`);
  let photo5 = require(`../resources/crescentRunShuffleboard.jpeg`);

  return (
    <div className="Photos">
      <img src={photo1} className="Large-crop" alt={"Crescent Run Hot Tubs"} /><br />
      <img src={photo2} className="Large-crop" alt={"Crescent Run Center"} /><br />
      <img src={photo3} className="Large-crop" alt={"Crescent Run Park"} /><br />
      <img src={photo4} className="Large-crop" alt={"Crescent Run Swimming Pool"} /><br />
      <img src={photo5} className="Large-crop" alt={"Crescent Run Shuffleboard Court"} /><br />
    </div>
  );
}

export default Photos;
