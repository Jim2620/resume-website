import React from "react";
import SectionList from "../SectionList";
import { useTranslation } from "../contexts/LanguageContext"; // assuming your LanguageContext exports a useTranslation hook

export default function ExperienceSection() {
  const { t } = useTranslation();

  // List of IDs in the JSON file for experience jobs
  const experienceIds = ["docgo", "tovuti"];

  // Map each ID to the localized object
  const experienceData = experienceIds.map((id) => t(`experience.${id}`, { returnObjects: true }));

  return <SectionList title={t("experienceTitle", { defaultValue: "Experience" })} data={experienceData} />;
}
