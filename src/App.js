import logo from "./logo.svg";
import React, { Image } from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Scoober - Takeaway.com</span>
        <span className="sub-title">Win the game or win the job</span>
      </header>
      <p>This is paragraph</p>
    </div>
  );
}

export default App;
