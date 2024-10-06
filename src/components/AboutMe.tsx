import { Container, Divider, Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography>
        Motivated EE student with extensive hands-on experience in PCB design,
        circuit analysis, and hardware debugging, specializing in Altium,
        circuit design, and system integration. Proven track record of designing
        complex electrical systems, optimizing production processes, and
        resolving critical hardware issues. Skilled in managing technical
        projects, collaborating across teams, and delivering innovative
        solutions for real-world challenges. Strong foundation in circuit
        theory, power systems, and micro-controller programming, ready to
        contribute effectively to advanced engineering projects.
      </Typography>
    </Container>
  );
}
