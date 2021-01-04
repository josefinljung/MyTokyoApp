import '../../../Main.scss';
import React from 'react';

import { BrowserRouter as Router, Link } from "react-router-dom";

// import Eat from '../../Eat';
// import Shop from '../../Shop';
// import Article from '../../Article';
// import About from '../../About';
// import Inspiration from '../../Inspiration'
// import LandingPage from './components/Landingpage/Landingpage'

function Navbar() {
  return (
    <div id="navbarcontainer">
      <nav className="navbar">
        <ul className="navbar-nav">
        <Router>
            <li><Link to="/eat">EAT</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/article">ARTICLES</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/inspiration">INSPIRATION</Link></li>
          </Router>
{/* </li>
          <li><a href="https://www.svt.se">EAT</a></li>
          <li><a href="https://www.svt.se">SHOPS</a></li>
          <li><a href="https://www.svt.se">ARTICLES</a></li>
          <li><a href="https://www.svt.se">ABOUT US</a></li>
          <li><a href="https://www.svt.se">INSPIRATION</a></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
