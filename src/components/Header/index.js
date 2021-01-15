import React from "react";
import logo from "../../logo.svg";
import "./style.css";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="title">
          <div className="first-line">Scoober - Takeaway.com</div>
          <div className="sub-title">Win the game or win the job</div>
        </div>
      </header>
    </>
  );
};

export default Header;
