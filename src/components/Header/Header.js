import '../../Main.scss';
import Navbar from './Navbar/Navbar';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [isClicked, setClicked] = useState("false");

  const handleToggle = () => {
    setClicked(!isClicked);
  };

  return (
    <div>
      <header id="header">
        <div id="headercontainer">
          <Link className="headerlinks" to="/">
            <div id="headertitle">
              <h1>TokyEko</h1>
              <h3>A sustainable guide to Tokyo</h3>
            </div>
          </Link>
          <div id="menucontainer" onClick={handleToggle} className={`${isClicked ? "hide" : "show"}`}>
            <span className="menubutton"></span>
            <span className="menubutton"></span>
            <span className="menubutton"></span>
          </div>
        </div>
      </header>
      <div id="navbar-component" className={`${isClicked ? "hide" : "show"}`}>
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default Header;