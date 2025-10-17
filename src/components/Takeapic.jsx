import React from "react";
import "../styles/Takeapic.css";

const Takeapic = () => {
  return (
    <section className="takeapic">
      {/* Left Section - Image with play button */}
      <div className="takeapic-left">
        <div className="takeapic-pattern"></div>
        <div className="takeapic-image-wrapper">
          <img
            src="/assets/takeapic/takeapic.png"
            alt="Happy team watching video"
            className="takeapic-image"
          />
        </div>
      </div>
      {/* Right Section - Text Content */}
      <div className="takeapic-right">
        <h2 className="takeapic-text">
          Want to boost customer engagement with our <br />
          innovative solutions?
          <br />
          <span>Take a peek!</span>
        </h2>
      </div>
    </section>
  );
};

export default Takeapic;
