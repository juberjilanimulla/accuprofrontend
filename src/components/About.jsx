import React from "react";
import "../styles/About.css";
import { FiSearch } from "react-icons/fi";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        {/* Left Side (Heading + Description + Stats) */}
        <div className="about-left">
          <h3 className="about-left-tagline">About us</h3>
          <h2 className="about-left-title">
            Inclusive Opportunities, Tailored for You.
          </h2>
          <div className="about-stats">
            <div className="about-stats-box1">
              <h1>
                86<span>M+</span>
              </h1>
              <p>Available Jobs</p>
            </div>
            <div className="about-stats-box2">
              <h1>
                546<span>+</span>
              </h1>
              <p>Free Courses</p>
            </div>
            <div className="about-stats-box3">
              <h1>
                5.7<span>M+</span>
              </h1>
              <p>Alumni Has Worked</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="about-right">
          <h3 className="about-subtitle">
            {" "}
            Jobs That Embrace Your Uniquesness.
          </h3>
          <p className="about-desc">
            Empowering individuals to find workplaces that value diversity and
            uniquesness.
          </p>
          <p className="about-join">
            <span>+100k</span> People Join
          </p>
          <div className="about-img-wrapper">
            <div className="about-people">
              <img src="/assets/hero/hero-main3.png" alt="" />
            </div>
            <button className="about-button">
              <h1>Tracer Study</h1>
              <FiSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
