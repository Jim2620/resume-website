import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import MySummary from "./MySummary";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import moonIcon from "./assets/moon.svg";
import sunIcon from "./assets/sun.svg";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  <button className="theme-toggle-button" onClick={toggleTheme}>
    <img
      src={theme === "light" ? moonIcon : sunIcon}
      alt={theme === "light" ? "Moon icon" : "Sun icon"}
      className="theme-icon"
    />
  </button>;

  return (
    <div className="resumeBody">
      <div className="page">
        <Header />
        <MySummary />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </div>
    </div>
  );
}

export default App;
