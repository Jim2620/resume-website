import React from "react";
import SectionList from "./SectionList";
import { educationData } from "../Experience";

export default function EducationSection() {
  return <SectionList title="Education" data={educationData} />;
}
