import React from "react";
import "./ContactUs.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactUs = () => (
  <div className="contactus-container">
    <h1 className="contactus-title">Contact Us</h1>
    <p>We’d love to hear from you! Reach out to us using the details below or the form.</p>
    <ul>
      <li><strong>Email:</strong> support@blogease.com</li>
      <li><strong>Phone:</strong> +91-98765-12345</li>
      <li><strong>Address:</strong> 5th Floor, Creators Hub, Bengaluru, India</li>
    </ul>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
    <p>Follow us on social media:</p>
    <div className="social-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
    </div>
  </div>
);

export default ContactUs;