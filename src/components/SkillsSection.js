import React from "react";
import { skillsData } from "../Experience";
import "./SkillsSection.css";

export default function SkillsSection() {
  return (
    <section className="resumeSection">
      <h2>Skills</h2>
      <p>{skillsData}</p>
    </section>
  );
}
