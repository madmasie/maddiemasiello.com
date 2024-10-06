import { Container, Divider, Typography } from "@mui/material";
import ExperienceInfo, { ExperienceEntry } from "./ExperienceInfo";

const entries: ExperienceEntry[] = [
  {
    entity: "Edge Autonomy",
    entityLogo: "/img/edge-autonomy.jpg",
    location: "San Luis Obispo, CA",
    title: "Electrical Production Test Intern",
    date: "June 2024 - September 2024",
    description: "I had a second internship at Edge Autonomy where I...",
    bullets: [
      "Designed multiple PCBs from initial schematic generation to final production using Altium.",
      "Used circuit analysis techniques to construct circuit boards used for testing parts in production.",
      "Integrated ESD protection into PCB designs, developed USB-C power delivery systems, integrating IC controllers for voltage/current regulation onto board.",
      "Contributed 8 complex Altium footprints/3D models to workspace",
      "Utilized SolidWorks to create fixtures for PCB testing and assembly.",
    ],
    tags: [
      "altium",
      "usb-c",
      "esd",
      "3d modeling",
      "pcb design",
      "pcb testing",
      "solidworks",
    ],
  },
  {
    entity: "Edge Autonomy",
    entityLogo: "/img/edge-autonomy.jpg",
    location: "San Luis Obispo, CA",
    title: "Electrical Engineer Intern",
    date: "June 2023 - September 2023",
    description: "In my first internship with Edge Autonomy, I...",
    bullets: [
      "Diagnosed and resolved issues with overheating PCBs, including component replacement and validation.",
      "Initiated the assembly of a ground-based test rig for aircraft system integration.",
      "Conducted root-cause analysis on faulty batteries and helped implement corrective measures.",
      "Drafted and executed testing procedures for coaxial cables using a spectrum analyzer.",
      "Played a key role in resolving non-conformance issues related to air data pods.",
      "Gained experience with JIRA for tracking project progress and managing tasks within a team.",
    ],
    tags: ["pcb design", "pcb validation", "analysis", "jira"],
  },
];

export default function Work() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Work Experience
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <ExperienceInfo entries={entries} />
    </Container>
  );
}
