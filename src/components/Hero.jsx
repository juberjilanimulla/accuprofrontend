import React from "react";
import "../styles/Hero.css";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-container">
          {/* Left Side */}
          <div className="hero-content">
            <span className="hero-tagline">
              <span className="hero-tagline-icon">
                <FaRegPlayCircle />
              </span>
              <span className="hero-tagline-text">
                Inclusive workplaces for all.
              </span>
            </span>
            <h1 className="hero-title">
              <span className="highlight">Job Finder </span>
              with Diversity Focus.
            </h1>
            <p className="hero-subtitle">
              Find jobs at companies focused on diversity and inclusion that
              match your values.
            </p>

            {/* Search Bar */}
            <div className="search-bar">
              <button className="search-btn">
                <span>Find Your Job</span>
                <FiSearch className="search-icon" />
              </button>
              <input type="text" placeholder="ex. graphic designer" />
              <div className="select-wrapper">
                <select>
                  <option>India</option>
                  <option>USA</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hero-image-wrapper">
            <div className="hero-image-bg">
              <img
                src="/assets/hero/hero-main.png"
                alt="job seekers"
                className="hero-image-right"
              />
              <img
                src="/assets/hero/hero-main2.png"
                alt="job seekers"
                className="hero-image-right-2"
              />
              <img
                src="/assets/hero/hero-thread.png"
                alt="thread"
                className="hero-image-thread"
              />
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <div className="hero-footer-left">
            <p className="people-join">
              <strong>+100k</strong> <span>People Join</span>
            </p>
            <div className="social-proof">
              <div className="avatars">
                <img src="/assets/hero/hero-main3.png" />
              </div>
              <div>
                <span className="stars">
                  5.0 <span className="star-icons">★★★★★</span>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-footer-right">
            <div className="hero-footer-number">
              <h1>
                86 <span>M+</span>
              </h1>
              <p>Available Jobs</p>
            </div>
            <div className="hero-footer-para">
              <h2>Where Inclusivity Meets Opportunity.</h2>
              <p>
                <IoIosArrowForward />
                Browse your expertise
              </p>
            </div>
            <div className="hero-footer-image">
              <img src="/assets/hero/hero-section.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
