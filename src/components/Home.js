import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Home() {

  let photo = require(`../resources/crescentRunSign.jpeg`);

  // const [time, setTime] = useState(0);
  // const [paused, setPaused] = useState(false);

  // useEffect(() => {
  //   if (!paused) {
  //     const intervalId = setInterval(() => {
  //       setTime(time => time + 1);
  //     }, 1000);
  //     return function() {clearInterval(intervalId)}
  //   }
  // }, [paused])

  // function increment() {
  //   setTime(time => time + 1);
  // }

  // function decrement() {
  //   setTime(time => time - 1);
  // }

  // function pause() {
  //   setPaused(!paused)
  // }

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

      {/* <p />
      <h1>{time}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={pause}>Pause</button> */}

    </div>

  );
}

export default Home;
