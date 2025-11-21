// Experience.js
import React from "react";
import { experienceData } from "./Experience.js"; // your existing data
import "./App.css"; // make sure your CSS is applied

export default function Experience() {
  return (
    <section className="resumeSection">
      <h2>Experience</h2>

      {experienceData.map((job, index) => (
        <div key={index} className="jobSection">

          <div className="companyLine">
            <div className="leftItems">
              <span className="companyName">{job.companyName},</span>
              <span className="companyLocation">{job.companyLocation}</span>
            </div>

            <div className="timeWorked">{job.timeWorked}</div>
          </div>

          <p className="companyRole">{job.companyRole}</p>

          <ul className="jobDetails">
            {job.jobDetails.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>

        </div>
      ))}
    </section>
  );
}
