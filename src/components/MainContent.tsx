import * as React from "react";
import Stack from "@mui/material/Stack";
import Hero from "./Hero";
import Experience from "./Experience/WorkExperience";
import AboutMe from "./AboutMe";
import Projects from "./Projects/Projects";
import Education from "./Experience/Education";

export default function MainContent() {
  return (
    <Stack spacing={4}>
      <AboutMe />
      <Experience />
      <Projects />
      <Education />
    </Stack>
  );
}
