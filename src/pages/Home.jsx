import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Jobs from "../components/Jobs";
import HowItWorks from "../components/HowItWorks";
import Testimonial from "../components/Testimonial";
import LookingJobs from "../components/LookingJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Jobs />
      <HowItWorks />
      <Testimonial />
      <LookingJobs />
    </>
  );
};

export default Home;
