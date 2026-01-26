import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MySummary from "./components/MySummary/MySummary";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/Skills/SkillsSection";
import moonIcon from "./assets/moon.svg";
import sunIcon from "./assets/sun.svg";
import { ThemeContext } from "./components/contexts/ThemeContext";
import { LanguageProvider, LanguageContext } from "./components/contexts/LanguageContext";

function AppContent() {
  // Theme context
  const { theme, toggleTheme } = useContext(ThemeContext);
  // Language context
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="resumeBody">
      <div className="page">
        <div className="top-controls">
          {/* Language dropdown */}
          <select
            className="language-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>

          {/* Theme toggle button */}
          <button className="theme-toggle-button" onClick={toggleTheme}>
            <img
              src={theme === "light" ? moonIcon : sunIcon}
              alt={theme === "light" ? "Moon icon" : "Sun icon"}
              className="theme-icon"
            />
          </button>
        </div>
        <Header />
        <MySummary />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </div>
    </div>
  );
}

// Wrap the whole app in LanguageProvider
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
