import React from "react";
import "./App.css";
import MyLinks from "./Header.js";
import MySummary from "./MySummary.js";
import Experience from "./ExperienceSection.js"; 
import Education from "./EducationSection.js";
import Skills from "./SkillsSection.js";

function App() {
  return (
    <div className="resumeBody">
      <div className="page">
        <MyLinks />
        <MySummary />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
