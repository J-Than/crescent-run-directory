import React from "react";
import Lot from "./Lot";

function LotList({ lots }) {

  return (
    <ul className="Lot-list">
      {lots.map(lot => <Lot key={lot.id} lot={lot} />)}
    </ul>
  );
}

export default LotList;