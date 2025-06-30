import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="custom-header">
    <div className="header-inner">
      <div className="logo-container">
        <span className="logo-title">BlogEase</span>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/aboutus" className="nav-link">About Us</Link>
        <Link to="/contactus" className="nav-link">Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;