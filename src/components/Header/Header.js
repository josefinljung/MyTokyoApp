import '../../Main.scss';
import Navbar from './Navbar/Navbar';

//html som syns i index

function Header() {
  return (
    <div>
      <header id="header">
        <div id="headercontainer">
            <div id="headertitle">
              <h1>TokyEko</h1>
              <h3>A sustainable guide to Tokyo</h3>
            </div>
            <div id="menu">
              <a href="https:www.svt.se">menu</a>
            </div>
        </div>
      </header>
      <Navbar></Navbar>

    </div>
  );
}

export default Header;