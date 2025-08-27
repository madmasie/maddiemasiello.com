import { Container, Divider, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Typography paragraph>
        Hey there! I'm Maddie, a final-year Electrical Engineering student at
        Cal Poly SLO. I’m passionate about control systems, power, and embedded
        systems.
      </Typography>

      <Typography paragraph>
        Through my coursework and personal projects, I’ve gained hands-on
        experience in PCB design, circuit analysis, and hardware debugging.
        I specialize in Altium, circuit design, and system integration, with a
        strong foundation in circuit theory, power systems, and
        microcontroller programming.
      </Typography>

      <Typography paragraph>
        I’m excited to apply my skills to advanced engineering projects as I
        prepare to graduate in June 2026.
      </Typography>

      <Typography paragraph>
        Outside of engineering, I enjoy skiing, ice hockey, biking, and playing
        both viola and piano.
      </Typography>
    </Container>
  );
}

