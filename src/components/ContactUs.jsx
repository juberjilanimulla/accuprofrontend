import React from "react";
import "../styles/ContactUs.css";
import contactImg from "/assets/contactus/contactus.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="contactus-section">
      <div className="contactus-wrapper">
        {/* === Left Form === */}
        <div className="contactus-left">
          <h2 className="contactus-title">Get in Touch</h2>
          <p className="contactus-subtitle">
            Have a project in mind that you think we’d be a great fit for?
            <br />
            We’d love to hear what you’re thinking.
          </p>

          <form className="contactus-form">
            <div className="contactus-inputs">
              <input type="text" placeholder="Full Name" required />
            </div>

            <div className="contactus-inputs">
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Mobile Number" required />
            </div>

            <textarea
              placeholder="Write your message here..."
              className="contactus-message"
              required
            ></textarea>

            <button type="submit" className="contactus-btn">
              Send Message
            </button>
          </form>

          <div className="contactus-info">
            <div className="contactus-item">
              <MdEmail />
              <a href="mailto:info@accupro.com">info@accupro.com</a>
            </div>
            <div className="contactus-item">
              <FaPhoneVolume />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
        </div>

        {/* === Right Image === */}
        <div className="contactus-right">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="contactus-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
