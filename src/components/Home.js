import React from "react";

function Home() {

  let photo = require(`../resources/crescentRunSign.jpeg`);

  return (

    <div className="Home">
      <h2></h2>
      <img src={photo} alt={"Crescent Run Welcome Sign"} />
    </div>

  );
}

export default Home;
