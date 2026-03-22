import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Prajwol Shrestha. Most rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/praj003" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/PrajwolShrestha1" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto: ">
          Email
        </a>
      </div>
    </footer>
  );
}