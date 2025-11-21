import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import gmail from "./assets/gmail.svg";

export default function MyLinks() {
  return (
    <div className="middle">
      <h1>Jim Liriano</h1>
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
  );
}
