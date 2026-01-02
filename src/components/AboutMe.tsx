import { Container, Divider, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Typography paragraph>
        Hey there! I&apos;m Maddie, a final-year Electrical Engineering student
        at Cal Poly SLO. I&apos;m passionate about control systems, power, and
        embedded systems.
      </Typography>

      <Typography paragraph>
        Through my coursework and personal projects (see below for more!), I’ve
        gained hands-on industry experience in PCB design, circuit analysis, and
        hardware debugging where I specialized in Altium, PCB/circuit design,
        and system integration. I have a strong foundation in the electrical
        engineering fundamentals, and am looking forward to doing more control
        systems work in the future.
      </Typography>

      <Typography paragraph>
        I’m excited to apply my skills to advanced engineering projects in
        industry as I prepare to graduate in June 2026.
      </Typography>

      <Typography paragraph>
        Outside of engineering, I enjoy skiing, ice hockey, biking, and playing
        both viola and piano.
      </Typography>
    </Container>
  );
}
