import React from "react";
import "../styles/TalentSolutionHero.css";

const TalentSolutionHero = () => {
  return (
    <section className="talent-hero">
      {/* Left Content Section */}
      <div className="talent-hero-content">
        <h2 className="talent-hero-title">
          We help grow the creative industry
        </h2>
        <p className="talent-hero-description">
          You can monitor and manage your business with the platform we will
          provide
        </p>
        <button className="talent-hero-button">Our Works</button>
      </div>

      {/* Right Image Section */}
      <div className="talent-hero-images">
        <div className="talent-hero-image-left">
          <img
            src="/assets/talentsolutionhero/TalentSolutionHero1.png"
            alt="Team collaboration"
          />
        </div>

        <div className="talent-hero-image-right">
          <img
            src="/assets/talentsolutionhero/TalentSolutionHero.png"
            alt="Creative discussion"
          />
        </div>
      </div>
    </section>
  );
};

export default TalentSolutionHero;
