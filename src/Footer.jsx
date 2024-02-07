import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-category">
          <h2>Categories</h2>
          <ul>
            <li>
              <a href="/">Running Shoes</a>
            </li>
            <li>
              <a href="/">Yoga Shoes</a>
            </li>
            <li>
              <a href="/">Sport Shoes</a>
            </li>
            <li>
              <a href="/">Casual Shoes</a>
            </li>
          </ul>
        </div>

        <div className="footer-category">
          <h2>Business</h2>
          <ul>
            <li>
              <a href="/">Company Profile</a>
            </li>
            <li>
              <a href="/">Social Resonsibility</a>
            </li>
            <li>
              <a href="/">Brand Kit</a>
            </li>
            <li>
              <a href="/">Media</a>
            </li>
          </ul>
        </div>

        <div className="footer-category">
          <h2>About</h2>
          <ul>
            <li>
              <a href="/">Board of Diretors</a>
            </li>
            <li>
              <a href="/">Company Profile</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Numbers Speak</a>
            </li>
          </ul>
        </div>

        <div className="footer-category">
          <h2>Useful Links</h2>
          <ul>
            <li>
              <a href="/">Return Policies</a>
            </li>
            <li>
              <a href="/">Announcements</a>
            </li>
            <li>
              <a href="/">Have Issues?</a>
            </li>
            <li>
              <a href="/">Media Kit</a>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <h3>Follow Us!</h3>
          <ul>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
