import '../../Main.scss';
import Navbar from './Navbar/Navbar';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
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
          <div id="menu">
            <button onClick={handleToggle}>menu</button>
          </div>
        </div>
      </header>
      <div id="navbar-component" className={`${isActive ? "hide" : "show"}`}>
        <Navbar></Navbar>
      </div>
    </div>
  );
}

export default Header;