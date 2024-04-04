import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }

  function handleHeadingClick() {
    setHeading("You clicked the heading!");
  }

  function handleDelete() {
    // Reset the heading and input field
    setHeading("");
    setName("");
  }

  return (
    <div className="container">
      <h1 onClick={handleHeadingClick}>Selamat Datang  {headingText}</h1>
      <form onSubmit={handleClick}>
        <input 
          onChange={handleChange}
          type="text" 
          placeholder="What's your name?"
          value={name}
        />
        <button 
          type="submit"
          style={{backgroundColor: isMousedOver ? "black" : "white"}}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
      {/* Button to delete heading and input value */}
      <button onClick={handleDelete}>Delete</button>

      
    </div>
  );
}

export default App;
