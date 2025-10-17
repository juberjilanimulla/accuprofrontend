import React, { useEffect, useState } from "react";
import "../styles/FindJobs.css";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const jobData = [
  {
    id: 1,
    title: "Data Scientist",
    location: "Bangalore, India",
    type: "Full Time",
    mode: "Onsite",
    experience: "2–4 Years",
    posted: "2 days ago",
    applicants: 45,
    salary: "₹23K–₹50K/m",
    company: "Picave",
    companyRating: "2.360–5.468",
    applyLink: "#",
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Hyderabad, India",
    type: "Full Time",
    mode: "Hybrid",
    experience: "1–3 Years",
    posted: "3 days ago",
    applicants: 32,
    salary: "₹18K–₹40K/m",
    company: "Firstclusive",
    companyRating: "3.120–5.000",
    applyLink: "#",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    location: "Pune, India",
    type: "Full Time",
    mode: "Remote",
    experience: "3–5 Years",
    posted: "1 day ago",
    applicants: 58,
    salary: "₹40K–₹80K/m",
    company: "TechNova",
    companyRating: "3.800–5.000",
    applyLink: "#",
  },
  {
    id: 4,
    title: "Machine Learning Engineer",
    location: "Chennai, India",
    type: "Full Time",
    mode: "Onsite",
    experience: "2–4 Years",
    posted: "4 days ago",
    applicants: 27,
    salary: "₹30K–₹60K/m",
    company: "NeuroSoft",
    companyRating: "2.890–5.200",
    applyLink: "#",
  },
  {
    id: 5,
    title: "Cloud DevOps Engineer",
    location: "Mumbai, India",
    type: "Full Time",
    mode: "Hybrid",
    experience: "3–6 Years",
    posted: "5 days ago",
    applicants: 39,
    salary: "₹35K–₹75K/m",
    company: "SkyNet Systems",
    companyRating: "3.000–5.400",
    applyLink: "#",
  },
];

const FindJobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    setFilteredJobs(jobData);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const result = jobData.filter(
      (job) =>
        job.title.toLowerCase().includes(title.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(result);
  };

  return (
    <section className="findjobs-page">
      {/* Header  */}

      <div className="findjobs-header">
        <h1 className="findjobs-title">Job Finder</h1>
        <p className="findjobs-subtitle">
          Find jobs tailored to your experience, connect with top employers, and
          build the career you deserve
        </p>
      </div>

      {/*Search Bar  */}
      <form onSubmit={handleSearch} className="findjobs-search">
        <div className="findjobs-search-input">
          <FiSearch className="findjobs-icon" />
          <input
            type="text"
            placeholder="Search by Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="findjobs-search-input">
          <GoLocation className="findjobs-icon" />
          <input
            type="text"
            placeholder="Choose Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="findjobs-search-btn" type="submit">
          Search
        </button>
      </form>

      {/* Result  */}
      <div className="findjobs-results">
        {filteredJobs.length > 0 ? (
          <div className="findjobs-grid">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p>{job.location}</p>
                  </div>
                  <BsFillBookmarkCheckFill className="bookmark-icon" />
                </div>

                <div className="job-tags">
                  <span>{job.type}</span>
                  <span>{job.mode}</span>
                  <span>{job.experience}</span>
                </div>

                <div className="job-meta">
                  <p>
                    {job.posted} • {job.applicants} Applicants
                  </p>
                  <h4>{job.salary}</h4>
                </div>

                <div className="job-footer">
                  <a href={job.applyLink} className="apply-btn">
                    Apply Now
                  </a>
                  <div className="company-info">
                    <p>{job.company}</p>
                    <span>
                      <FaUsers /> {job.companyRating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="findjobs-noresult">
            No jobs found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
};

export default FindJobs;
