import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>HappyVeg</h3>
          <p>Fresh and organic vegetables for your daily needs.</p>
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://www.twitter.com/">Twitter</a>
          <a href="https://www.instagram.com/">Instagram</a>
        </div>

        <div className="footer-column">
          <h3>Our Location</h3>
          <p>India</p>
          <p>USA</p>
          <p>France</p>
          <p>Japan</p>
          <p>Russia</p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/accountcreation">Profile Creation</Link>
          <Link to="/login">Login</Link>
          <Link to="/vegetables">Vegetables</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
      </div>

      <div className="footer-bottom">
        Created By My Company | All Rights Reserved!
      </div>
    </footer>
  );
}

export default Footer;