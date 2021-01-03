import '../../../Main.scss';


//html som syns i index

function Navbar() {
  return (
    <div id="navbarcontainer">
      <nav className="navbar">
        <ul className="navbar-nav">
          <h3><li>EAT</li></h3>
          <h3><li>SHOPPS</li></h3>
          <h3><li>MARKETS</li></h3>
          <h3><li>ABOUT US</li></h3>
          <h3><li>INSPIRATION</li></h3>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
