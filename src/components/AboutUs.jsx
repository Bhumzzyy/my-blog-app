import React from "react";
import "./Aboutus.css";
import { FaFacebook, FaInstagram ,FaTwitter} from "react-icons/fa";

const AboutUs = () => (
  <div className="aboutus-container">
    <h1 className="aboutus-title">About Us</h1>
    <p>
      Welcome to <strong>BlogEase</strong>! Our mission is to empower everyone to share their stories, ideas, and knowledge with the world.
      We believe in the power of words and the importance of community.
    </p>
    <ul>
      <li>Share your thoughts and experiences</li>
      <li>Connect with like-minded people</li>
      <li>Grow your audience and inspire others</li>
    </ul>
    <p>Follow us on social media:</p>
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
    </div>
  </div>
);

export default AboutUs;