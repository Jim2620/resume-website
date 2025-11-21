import { skillsData } from "./Experience.js"; // your existing data

export default function Skills() {
  return (
    <section className="resumeSection">
      <h2>Skills</h2>
      <p>{skillsData}</p>
    </section>
  );
}
