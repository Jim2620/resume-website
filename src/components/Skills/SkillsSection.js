import React from "react";
import { useTranslation } from "../contexts/LanguageContext";
import "./SkillsSection.css";

export default function SkillsSection() {
  const { t } = useTranslation();

  // pull the localized skills object
  const skills = t("skills", { returnObjects: true });

  return (
    <section className="resumeSection">
      <h2>{t("skillsTitle", { defaultValue: "Skills" })}</h2>

      <p>
        <strong>Test Frameworks:</strong>{" "}
        {skills.testFrameworks.join(", ")}
        <br />

        <strong>Languages:</strong>{" "}
        {skills.languages.join(", ")}
        <br />

        <strong>Tools & Platforms:</strong>{" "}
        {skills.toolsAndPlatforms.join(", ")}
        <br />

        <strong>Other:</strong>{" "}
        {skills.other.join(", ")}
      </p>
    </section>
  );
}
