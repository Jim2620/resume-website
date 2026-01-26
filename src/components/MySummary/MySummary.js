import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function MySummary() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="resumeSection">
      <h2>{t("summary.title")}</h2>
      <p className="summaryText">{t("summary.text")}</p>
    </section>
  );
}
