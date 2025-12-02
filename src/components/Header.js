import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="middle">
      <div className="header-top">
        <h1>Jim Liriano</h1>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jimliriano"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="linkedin-button"
          >
            <img src={linkedin} alt="LinkedIn" className="icon" />
          </a>
          <a
            href="https://github.com/jim2620"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="github-button"
          >
            <img src={github} alt="GitHub" className="icon" />
          </a>
          <a
            href="mailto:jim.liriano@gmail.com"
            rel="noopener noreferrer"
            data-testid="email-button"
          >
            <img src={gmail} alt="Email" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
