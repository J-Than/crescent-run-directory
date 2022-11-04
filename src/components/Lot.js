import React from "react";

function Lot({ lot }) {

  let photo = null;

  if (lot.photoUrl !== "") {
    photo = require(`../resources/photos/${lot.photoUrl}`);
  }

  return (
    <li className="Lot">
      <h4>Lot {lot.lot} {lot.lastName}</h4>
      <p>{lot.displayName}</p>
      {photo !== null ? <img className="Mid-crop" src={photo} alt={lot.displayName} /> : null }
      {lot.petName !== "" ? <p><small>Pets: {lot.petName}</small></p> : null}
    </li>
  );
}

export default Lot;