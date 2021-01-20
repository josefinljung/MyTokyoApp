import '../../../Main.scss';
import React from 'react';

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbarcontainer">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li key="article" ><NavLink to="/article" activeClassName="activelink">ARTICLES</NavLink></li>
          <li key="about"><NavLink to="/about" activeClassName="activelink">ABOUT US</NavLink></li>
          <li key="inspiration"><NavLink to="/inspiration" activeClassName="activelink">INSPIRATION</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;