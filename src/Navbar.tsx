import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo scrolls to top */}
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        Prajwol Shrestha
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;