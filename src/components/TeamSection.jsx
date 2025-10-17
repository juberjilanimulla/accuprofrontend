import React from "react";
import "../styles/TeamSection.css";

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">
        {/* Left side content */}
        <div className="team-left">
          <h2 className="team-title">I will show what our team do.</h2>
          <p className="team-text">
            At Accupro Solutions, we’re more than a tech company; we’re
            innovators. We’ve empowered businesses with solutions, blending
            creativity with tech to craft digital experiences.
          </p>
          <button className="team-button">Learn More</button>
        </div>

        {/* Right side cards */}
        <div className="team-right">
          <div className="team-bg"></div>

          <div className="team-cards">
            {/* Card 1 */}
            <div className="team-card">
              <div className="team-icon"></div>
              <h4 className="team-card-title">UI/UX Design</h4>
              <p className="team-card-text">
                Create 2D / 3D video animation in a short period of time
                designed to promote a company product.
              </p>
            </div>

            {/* Card 2 */}
            <div className="team-card">
              <div className="team-icon"></div>
              <h4 className="team-card-title">Development</h4>
              <p className="team-card-text">
                Change the appearance of a design into code that will be made
                into an amazing website.
              </p>
            </div>

            {/* Card 3 */}
            <div className="team-card team-card-right">
              <div className="team-icon"></div>
              <h4 className="team-card-title">Research</h4>
              <p className="team-card-text">
                Make the appearance of a mobile application that has quality and
                increases user convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
