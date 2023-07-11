import React, { useState } from "react";
import "./Welcome.css"

function Welcome() {
  const [role, setRole] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setRole(event.target.value);
  }

  function handleSubmit() {
    console.log("Submit button clicked");
    // Add your logic for handling the submit button click here
  }

  function handleClear() {
    console.log("Clear button clicked");
    setRole("");
  }

  return (
    <div className="container">
      <h1>Hello {role}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your role?"
        value={role}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Welcome;
