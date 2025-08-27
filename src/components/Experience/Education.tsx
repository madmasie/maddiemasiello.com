import { Container, Divider, Typography } from '@mui/material';
import ExperienceInfo, { ExperienceEntry } from './ExperienceInfo';

const entries: ExperienceEntry[] = [
  {
    entity: 'California Polytechnic State University',
    entityLogo: '/img/cp.jpeg',
    location: 'San Luis Obispo, CA',
    title: 'Electrical Engineering, B.S.',
    date: 'September 2021 - Present',
    description:
      'I am currently pursuing a Bachelor of Science degree in Electrical Engineering at Cal Poly, with a minor in Computer Science. Some of my relevant coursework includes:',
    bullets: [
      'Classical Control Systems (EE 302)',
      'Vision Based Robots Manipulation & Lab (EE 470/471)',
      'Microcontroller-Based Systems Design (EE 329)',
      'Circuits I-III',
      'Power Systems Analysis I (EE 406)',
      'Power Electronics & Lab (EE 212/242)',
      'Energy Conversion Electromagnetics (EE 255)',
      'Continuous/Discrete Time Signals & Systems (EE 228/328)',
      'Electromagnetic Fields & Transmission (EE 334/402)',
      'Computer Hardware Architecture and Design (CSC 333)',
      'Digital Design and Assembly Programming (CSC 133/233)',
      'Data Structures (CSC 202)',
      'Object Oriented Programming (CSC 203',
      'Semiconductor Device Electronics',
      'Microprocessor System Design (EE 329)',
      'Electronic Design & Lab (EE 409/449)',
      'Analog Electronics & Integrated Circuits & Lab (EE 307/307/308)',
      
      
      
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
