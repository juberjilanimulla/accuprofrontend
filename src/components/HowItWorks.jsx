import React from "react";
import "../styles/HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up and create your free profile with skills, experience, and preferences.",
  },
  {
    number: "02",
    title: "Browse Jobs",
    description:
      "Search and filter jobs that match your career interests and goals.",
  },
  {
    number: "03",
    title: "Apply Easily",
    description:
      "Submit your application with one click and track your progress.",
  },
  {
    number: "04",
    title: "Get Hired",
    description: "Connect with top companies and land your dream job faster.",
  },
];

const HowItWorks = () => {
  return (
    <section className="howitworks">
      <div className="howitworks-container">
        <h2 className="section-title">How Does Find the Job</h2>
        <p className="section-subtitle">
          A simple process to help you land the right job with inclusivity and
          ease.
        </p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
