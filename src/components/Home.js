import React from "react";
import { NavLink } from "react-router-dom";

function Home() {

  let photo = require(`../resources/crescentRunSign.jpeg`);

  return (

    <div className="Home">
      <h2 />
      <img src={photo} alt={"Crescent Run Welcome Sign"} />
      <p />
      <NavLink
        to="/search"
        exact
        className={"Search-now"}
        activeStyle={{
          color: "white"
        }}
      >
        Search Now
      </NavLink>
    </div>

  );
}

export default Home;
