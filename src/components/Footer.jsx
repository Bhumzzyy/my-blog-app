import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} BlogEase. All rights reserved.</p>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;