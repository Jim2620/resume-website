import React from "react";
import "./SectionList.css";

export default function SectionList({ title, data }) {
  return (
    <section className="resumeSection">
      <h2>{title}</h2>
      {data.map((item, index) => (
        <div key={index} className="jobSection">
          <div className="companyLine">
            <div className="leftItems">
              <span className="companyName">{item.companyName},</span>
              <span className="companyLocation">{item.companyLocation}</span>
            </div>
            <div className="timeWorked">{item.timeWorked}</div>
          </div>
          <p className="companyRole">{item.companyRole}</p>
          <ul className="jobDetails">
            {item.jobDetails.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
