import React from "react";

function Home() {

  let photo = require(`../resources/crescentRunSign.jpeg`);

  return (

    <div className="Home">
      <h2 />
      <img src={photo} alt={"Crescent Run Welcome Sign"} />
      <p />
      <button >Search Now</button>
    </div>

  );
}

export default Home;
