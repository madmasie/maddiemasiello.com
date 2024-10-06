import { Container, Divider, Typography } from "@mui/material";
import ExperienceInfo, { ExperienceEntry } from "./ExperienceInfo";

const entries: ExperienceEntry[] = [
  {
    entity: "California Polytechnic State University",
    entityLogo: "/img/cp.jpeg",
    location: "San Luis Obispo, CA",
    title: "Electrical Engineering, B.S.",
    date: "September 2021 - Present",
    description:
      "I am currently pursuing a Bachelor of Science degree in Electrical Engineering at Cal Poly. Some of my relevant coursework includes:",
    bullets: [
      "Electric Circuits I-III",
      "Energy Conversion Electromagnetics",
      "Continuous/Discrete Time Signals & Systems",
      "Probability & Random Processes",
      "Electromagnetic Fields & Transmission",
      "Physics I-III",
      "Data Structures",
      "Object Oriented Programming",
      "Digital Design and Assembly Programming",
      "Semiconductor Device Electronics",
      "Microprocessor System Design",
      "Modern Physics",
    ],
  },
];

export default function Education() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Education / Training
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <ExperienceInfo entries={entries} />
    </Container>
  );
}
