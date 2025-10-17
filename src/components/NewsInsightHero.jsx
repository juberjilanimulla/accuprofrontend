import React from "react";
import "../styles/NewsInsightHero.css";
import { FiArrowDownRight } from "react-icons/fi";

const NewsInsightsHero = () => {
  return (
    <section className="news-insights">
      <div className="news-insights-container">
        {/* Header */}
        <div className="news-insights-header">
          <h2>
            <span>Discover</span> Insights And Tips For Your Future.
          </h2>
        </div>

        {/* GRID */}
        <div className="news-insights-grid">
          {/* Card 1 */}
          <div className="news-card card1">
            <img
              src="/assets/new&insight/new&insight.png"
              alt="Networking Event"
            />
          </div>

          {/* Card 2 */}
          <div className="news-card card2">
            <img
              src="/assets/new&insight/news&insight1.png"
              alt="Writing Cover Letter"
            />
          </div>

          {/* Card 3 */}
          <div className="news-card light-card card3">
            <div className="news-tag">Tips</div>
            <h4>How to Build a Resume That Stands Out</h4>
            <p>
              Get tips for a strong resume: design, format, and highlight key
              achievements.
            </p>
            <a href="#">
              Learn more <FiArrowDownRight />
            </a>
          </div>

          {/* Card 4 */}
          <div className="news-stats card4">
            <h3>
              86M<span>+</span>
            </h3>
            <p>Available Jobs</p>
            <button className="news-btn">Free Create Resume</button>
          </div>

          {/* Card 5 */}
          <div className="news-card blue-card card5">
            <div className="news-tag green">Insight</div>
            <h4>How to Network Like a Pro in the Digital Age</h4>
            <a href="#">
              Learn more <FiArrowDownRight />
            </a>
          </div>

          {/* Card 6 */}
          <div className="news-card gradient-card card6">
            <div className="news-tag">Tips</div>
            <h4>Mastering the Art of the Cover Letter</h4>
            <a href="#">
              Learn more <FiArrowDownRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsHero;
