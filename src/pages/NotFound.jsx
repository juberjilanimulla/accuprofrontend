import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>404</h1>
      <h2 style={{ marginBottom: "15px" }}>Page Not Found</h2>
      <p style={{ marginBottom: "20px" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          background: "#0066ff",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
