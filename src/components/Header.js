import React, { useContext } from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import { ThemeContext } from "../ThemeContext";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="middle">
    <div classname="header-top">
      <h1>Jim Liriano</h1>

      <button className="theme-toggle-button" onClick={toggleTheme}>
        <img
          src={theme === "light" ? moonIcon : sunIcon}
          alt={theme === "light" ? "Moon icon" : "Sun icon"}
          className="theme-icon"
        />
      </button>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/jimliriano"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="icon" />
        </a>
        <a
          href="https://github.com/jim2620"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="icon" />
        </a>
        <a href="mailto:jim.liriano@gmail.com" rel="noopener noreferrer">
          <img src={gmail} alt="Email" className="icon" />
        </a>
      </div>
    </div>
    </div>
  );
}
