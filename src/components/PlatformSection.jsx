import React from "react";
import "../styles/PlatformSection.css";

const PlatformSection = () => {
  return (
    <section className="platform-section">
      <div className="platform-container">
        {/* Row 1 */}
        <div className="platform-row platform-row-top">
          <div className="platform-image">
            <img
              src="/assets/platformsection/platformsection.png"
              alt="People connecting puzzle pieces"
            />
          </div>

          <div className="platform-content">
            <h2 className="platform-title">
              The ideal platform for your company
            </h2>
            <p className="platform-text">
              We build websites with a distinct product identity, valuable
              branding, and company characteristics. Our SEO experts facilitate
              business marketing, delivering ready-to-use websites that drive
              product sales.
            </p>
            <a href="#" className="platform-link">
              Learn More
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="platform-row platform-row-bottom">
          <div className="platform-content">
            <h2 className="platform-title">
              Craft Your Vision <br /> Digital Solutions
            </h2>
            <p className="platform-text">
              We excel in creating impactful digital experiences with a focus on
              clear communication and measurable results. Our team of
              strategists, designers, and developers collaborate to craft
              solutions that drive engagement and achieve business goals for our
              clients.
            </p>
            <a href="#" className="platform-link">
              Learn More
            </a>
          </div>

          <div className="platform-image">
            <img
              src="/assets/platformsection/platformsection1.png"
              alt="Craft your vision concept"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
