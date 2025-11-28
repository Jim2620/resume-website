import React from "react";
import SectionList from "./SectionList";
import { experienceData } from "../Experience";

export default function ExperienceSection() {
  return <SectionList title="Experience" data={experienceData} />;
}
