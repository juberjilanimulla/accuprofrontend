import React from "react";
import "../styles/OurWorks.css";

const OurWorks = () => {
  return (
    <section className="ourworks-section">
      <div className="ourworks">
        {/*left seaction */}
        {/* Right section */}
        <div className="ourworks-grid">
          <div className="ourworks-left">
            <h2 className="ourworks-title">Our Works</h2>
            <p className="ourworks-text">
              We are storytellers, crafting visual experiences that resonate.Our
              portfolio showcases invovative design and cutting-edge
              development.
            </p>
            <button className="ourworks-btn">Get Started</button>
          </div>
          <div className="ourworks-card blue-card">
            <h3>
              Empowering Brilliance: <br /> Elevating Talent with AccuPro
              Solutions
            </h3>
            <p className="card-subtitle">Talent Solutions</p>
            <p className="card-text">
              At LuminaTech Solutions, we specialize in providing innovative
              talent solutions that drive business growth and empower
              individuals to reach their full potential.
            </p>
            <a href="#" className="card-link">
              Read More
            </a>
          </div>

          <img
            src="/assets/ourworks/ourworks.png"
            alt="Team work"
            className="ourworks-img"
          />
          <img
            src="/assets/ourworks/ourworks1.png"
            alt="Office discussion"
            className="ourworks-img"
          />
          <img
            src="/assets/ourworks/ourworks2.png"
            alt="Meeting"
            className="ourworks-img"
          />
          <img
            src="/assets/ourworks/ourworks3.png"
            alt="Creative team"
            className="ourworks-img"
          />
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
