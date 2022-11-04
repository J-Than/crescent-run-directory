import React, { useState } from "react";

function ClickMe() {

  const [formInput, setFormInput] = useState("");
  const [sum, setSum] = useState(0);

  function handleInput(e) {
    setFormInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let characters = formInput.length;
    setSum(sum => sum + characters);
    setFormInput("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="text" onChange={handleInput} value={formInput}></input>
        <button type="submit">ClickMe</button>
      </form>
      <h2>{sum}</h2>
    </div>
  )
}

export default ClickMe