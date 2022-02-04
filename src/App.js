import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [greet, setGreet] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setGreet(name);
  }, []);

  return (
    <div className="App">
      <h1>Hello User App</h1>
      <form className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        ></input>
        <button type="button" onClick={() => setGreet(`Welcome ${name}`)}>
          Greet Me!!
        </button>
        <p>{greet}</p>
      </form>
    </div>
  );
}

export default App;