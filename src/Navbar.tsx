import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LPX</div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;