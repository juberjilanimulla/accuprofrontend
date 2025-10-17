import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="/assets/footer/accurposolutions.png"
        alt="logo"
        className="footer-logo-bg"
      />
      <div className="footer-wrapper">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/assets/footer/footer.png"
                alt="Company Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-description">
              Empowering diverse talent by connecting them with inclusive
              workplaces where everyone belongs.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <IoIosArrowForward /> About Us
              </li>
              <li>
                <IoIosArrowForward /> Diversity Programs
              </li>
              <li>
                <IoIosArrowForward /> Find Jobs
              </li>
              <li>
                <IoIosArrowForward /> Employers
              </li>
              <li>
                <IoIosArrowForward /> Contact
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <IoIosArrowForward /> +91 234 856 7891
              </li>
              <li>
                <IoIosArrowForward /> +91 234 856 7893
              </li>
              <li>
                <IoIosArrowForward /> contact@accuprosolutions.com
              </li>
              <li>
                <IoIosArrowForward />
                Location: 123 Main Street, City, Country
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Join our community and get updates on new opportunities.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Accupro Solutions. All Rights Reserved.
          </p>
          <p className="footer-credits">
            Made with <FaHeart /> by{" "}
            <a
              href="https://firstclusive.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firstclusive
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
