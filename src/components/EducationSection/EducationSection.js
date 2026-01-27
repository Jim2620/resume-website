import React from "react";
import SectionList from "../SectionList";
import { useTranslation } from "../contexts/LanguageContext";

export default function EducationSection() {
  const { t } = useTranslation();
  
  const educationData = Object.values(t("education", { returnObjects: true }));

  return <SectionList title={t("educationTitle", { defaultValue: "Education" })} data={educationData} />;
}
