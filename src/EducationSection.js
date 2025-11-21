import { educationData } from "./Experience.js";

export default function Education() {
  return (
    <section className="resumeSection">
      {educationData.map((job, index) => (
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
