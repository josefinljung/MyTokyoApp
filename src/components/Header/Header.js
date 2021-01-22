import Navbar from './Navbar/Navbar';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [isClicked, setClicked] = useState("false");

  const handleToggle = () => {
    setClicked(!isClicked);
  };

  return (
    <React.Fragment>
      <header id="header">
        <div id="headercontainer">
            <div id="headertitle">
              <Link className="headerlinks" to="/">
                <h1>TokyEko</h1>
                <h3>A sustainable guide to Tokyo</h3>
              </Link>
            </div>
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
    </React.Fragment>
  );
}

export default Header;