import React from "react";
import "./MySummary.css";

const summary =
  "Quality Assurance Engineer with 3 years of focused QA experience, skilled in designing test plans and creating test cases, writing Javascript automated tests in Linux/UNIX environments for complex systems, experience in mobile automated testing and improving QA processes for better cross team use for every team I have worked with.";


export default function MySummary() {
  return (
    <section className="resumeSection">
      <h2>Summary</h2>
      <p className="summaryText">{summary}</p>
    </section>
  );
}
