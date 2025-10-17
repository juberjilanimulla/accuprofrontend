import React from "react";
import "../styles/LookingJob.css";

const LookingJob = () => {
  return (
    <section className="lookingjob">
      <div className="lookingjob-wrapper">
        {/* Left Content */}
        <div className="lookingjob-left">
          <p className="lookingjob-subtitle">Looking for a job?</p>
          <h1 className="lookingjob-title">
            Browse Verified Job Listings Now!
          </h1>
          <button className="lookingjob-btn">Find Your Job</button>
        </div>

        {/* Right Image */}
        <div className="lookingjob-right">
          <img
            src="/assets/lookingJob/lookingforjob.png"
            alt="Looking for a job"
          />
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="lookingjob-stats">
        <div className="lookingjob-leftstat"></div>

        <div className="lookingjob-rightstat">
          <div className="lookingjob-stat">
            <p className="lookingjob-join">
              <span>&gt;100k+</span>People Join
            </p>
            <div className="lookingjob-avatars">
              <img
                src="../../public/assets/lookingJob/lookingjob1.png"
                alt="looking for a job"
              />
            </div>
            <h2>
              86<span>M+</span>
            </h2>
            <p>Available Jobs</p>
          </div>
          <div className="lookingjob-stat">
            <h2>
              5.7<span>M+</span>
            </h2>
            <p>Alumni Has Worked</p>
          </div>
        </div>
      </div> */}
      <div className="lookingjob-stats">
        {/* LEFT SIDE */}
        <div className="lookingjob-leftstat">
          <p className="lookingjob-join">
            <span>&gt;100k+</span> People Join
          </p>
          <div className="lookingjob-avatars">
            <img src="/assets/lookingJob/lookingjob1.png" alt="logo" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lookingjob-rightstat">
          <div className="lookingjob-stat">
            <h2>
              86<span>M+</span>
            </h2>
            <p>Available Jobs</p>
          </div>
          <div className="lookingjob-stat">
            <h2>
              5.7<span>M+</span>
            </h2>
            <p>Alumni Has Worked</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingJob;
