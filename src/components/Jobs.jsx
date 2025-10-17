"use client";
import React, { useMemo, useState, useCallback } from "react";
import "../styles/Jobs.css";
import LookingJob from "./LookingJobs";

const CATEGORIES = [
  "IT & Technology",
  "Marketing",
  "Finance",
  "Healthcare",
  "Creative & Media",
  "Retail",
  "Human Resources",
];

const JOBS = [
  {
    title: "Data Scientist",
    location: "Bangalore, India",
    type: "Full Time",
    mode: "Onsite",
    exp: "2–4 Years",
    posted: "2 days ago",
    applicants: "45 Applicants",
    salary: "₹23K–₹50K/m",
    company: "Picave",
    url: "https://example.com/apply/data-scientist",
    category: "IT & Technology",
  },
  {
    title: "Cybersecurity",
    location: "Chennai, India",
    type: "Full Time",
    mode: "WFH",
    exp: "3–4 Years",
    posted: "3 days ago",
    applicants: "145 Applicants",
    salary: "₹23K–₹50K/m",
    company: "Devkala",
    url: "https://example.com/apply/cybersecurity",
    featured: true,
    category: "IT & Technology",
  },
  {
    title: "AI Consultant",
    location: "Hyderabad, India",
    type: "Full Time",
    mode: "Onsite",
    exp: "2–4 Years",
    posted: "4 days ago",
    applicants: "245 Applicants",
    salary: "₹35K–₹80K/m",
    company: "Alsix",
    url: "https://example.com/apply/ai-consultant",
    category: "IT & Technology",
  },
  {
    title: "Full Stack",
    location: "Hyderabad, India",
    type: "Full Time",
    mode: "Onsite",
    exp: "2–4 Years",
    posted: "5 days ago",
    applicants: "63 Applicants",
    salary: "₹39K–₹80K/m",
    company: "Devxy.co",
    url: "https://example.com/apply/full-stack",
    category: "IT & Technology",
  },
  {
    title: "Cloud Engineer",
    location: "Bangalore, India",
    type: "Full Time",
    mode: "Onsite",
    exp: "2–4 Years",
    posted: "6 days ago",
    applicants: "296 Applicants",
    salary: "₹26K–₹52K/m",
    company: "Coudo",
    url: "https://example.com/apply/cloud-engineer",
    category: "IT & Technology",
  },
  {
    title: "Machine Learning",
    location: "Bangalore, India",
    type: "Full Time",
    mode: "Onsite",
    exp: "2–4 Years",
    posted: "7 days ago",
    applicants: "521 Applicants",
    salary: "₹38K–₹90K/m",
    company: "Mech.io",
    url: "https://example.com/apply/ml-engineer",
    category: "IT & Technology",
  },
  // add non-IT examples to see filters working
  {
    title: "Growth Marketer",
    location: "Remote, India",
    type: "Full Time",
    mode: "WFH",
    exp: "2–3 Years",
    posted: "1 day ago",
    applicants: "98 Applicants",
    salary: "₹25K–₹60K/m",
    company: "Marketify",
    url: "https://example.com/apply/growth-marketer",
    category: "Marketing",
  },
  {
    title: "Finance Analyst",
    location: "Hyderabad, India",
    type: "Full Time",
    mode: "Hybrid",
    exp: "1–3 Years",
    posted: "3 days ago",
    applicants: "61 Applicants",
    salary: "₹28K–₹55K/m",
    company: "Finex",
    url: "https://example.com/apply/finance-analyst",
    category: "Finance",
  },
];

const PAGE_SIZE = 6;

export default function Jobs() {
  const [activeCat, setActiveCat] = useState(CATEGORIES[0]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => JOBS.filter((j) => j.category === activeCat),
    [activeCat]
  );
  console.log("filtered", filtered);

  const visibleJobs = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );
  console.log("visibleJobs", visibleJobs);
  const canSeeMore = visibleCount < filtered.length;

  const handleTabClick = useCallback((cat) => {
    setActiveCat(cat);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleSeeMore = useCallback(() => {
    setVisibleCount((v) => v + PAGE_SIZE);
  }, []);

  const handleApply = useCallback((job) => {
    // replace with your router/modal as needed
    if (job?.url) {
      window.open(job.url, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <section className="jobs" aria-labelledby="jobs-title">
      <div className="jobs-container">
        <h2 id="jobs-title" className="jobs-title">
          <span className="highlight">Latest</span> Job Opportunities
        </h2>

        {/* Category Tabs */}
        <div
          className="job-categories"
          role="tablist"
          aria-label="Job categories"
        >
          {CATEGORIES.map((cat) => {
            const selected = cat === activeCat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={selected}
                className={`tab ${selected ? "active" : ""}`}
                onClick={() => handleTabClick(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Job Grid */}
        <div className="job-grid">
          {visibleJobs.map((job, i) => (
            <article
              className={`job-card ${job.featured ? "featured" : ""}`}
              key={`${job.title}-${i}`}
            >
              <header className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-location">{job.location}</p>
              </header>

              <div className="job-tags">
                <span className="tag">{job.type}</span>
                <span className="tag">{job.mode}</span>
                <span className="tag">{job.exp}</span>
              </div>

              <div className="job-meta">
                <span>{job.posted}</span>
                <span aria-hidden></span>
                <span>{job.applicants}</span>
              </div>

              <div className="job-footer">
                <button
                  className="apply-btn"
                  onClick={() => handleApply(job)}
                  aria-label={`Apply for ${job.title} at ${job.company}`}
                >
                  Apply Now
                </button>
                <p className="job-salary">{job.salary}</p>
              </div>

              <div className="job-company">{job.company}</div>
            </article>
          ))}
        </div>

        {/* Show More */}
        <div className="show-more">
          <button
            className="see-more-btn"
            onClick={handleSeeMore}
            disabled={!canSeeMore}
          >
            {canSeeMore ? "See More Jobs" : "No more jobs"}
          </button>
        </div>
      </div>
      <LookingJob />
    </section>
  );
}
