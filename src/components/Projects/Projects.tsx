import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Divider } from '@mui/material';
import ProjectInfo, { ProjectEntry } from './ProjectInfo';
import { PictureAsPdf } from '@mui/icons-material';

const projects: ProjectEntry[] = [

   {
    image: '/img/329cpboard.jpg',
    title: 'EE 329 DSP Guitar Delay Pedal',
    description:
      'The “Repeat-inator” is a custom-designed guitar effects pedal that applies a digital delay to an incoming audio signal. When a guitar is plugged into the input, the analog signal is converted into digital form by the STM32’s built-in ADC, stored temporarily using a circular buffer, and then played back after a delay period via an external DAC. This creates an echo-like repetition of the original sound. Users can adjust the delay time, the amount of feedback (how many times the sound repeats), and the dry/wet mix (balance between original and delayed signals) using potentiometers. These parameters are read in real-time and affect the behavior of the audio output dynamically. The system also features a true bypass button that lets users completely skip the delay effect, passing the guitar signal directly from input to output. The device is optimized for low latency and high-fidelity audio performance, tailored specifically for live or studio guitar use.',

    details: {
      carouselImages: [
        {
          imageUrl: '/img/329schematic.png',
          caption: 'Final DSP Guitar Delay Pedal Schematic',
        },
        
        {
          imageUrl: '/img/ee329inout.png',
          caption:
            'Steady State Input vs Output of Delay Effect with 1500hz Sin Wave Input (orange) and DAC Output (green)',
        },
        
        
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'EE 329 Capstone Project Report',
          url: '/docs/riscv-mcu.pdf',
        },

        {
          icon: <PictureAsPdf />,
          title: 'EE 329 Capstone Project Presentation Slides',
          url: '/docs/329presentation.pdf',
        },

      ],

      ytVideoId: 'Eqc3riIkbCI',
    },
  },


  {
    image: '/img/rgm-pic.png',
    title: 'Circuits Lab Rube Goldberg Machine',
    description:
      'This project was created during my Circuits II lab at Cal Poly. Each week, we designed and implemented a different segment of the circuit, building the project step by step. Each segment represents a different part of the circuit, as shown in the block diagram. We showcased our final design at the end of the quarter. Encouraged to be inventive, we designed a Rube Goldberg-style machine, triggered by a user entering a "passcode" by playing a combination of pitches on a capacitive touch piano. The sequence ends with an LCD display, serving as a creative alarm system.',
    details: {
      carouselImages: [
        {
          imageUrl: '/img/rgm-pic.png',
          caption: 'Final RGM Integration Design',
        },
        {
          imageUrl: '/img/rgm-block.png',
          caption: 'Block Diagram of RGM System',
        },
        {
          imageUrl: '/img/rgm-integration-1.png',
          caption:
            'Schematic of capacitive touch piano, metal detector, and strobe light component integration',
        },
        {
          imageUrl: '/img/rgm-integration-2.png',
          caption:
            'Schematic demonstrating high-level final integration design',
        },
      ],
      ytVideoId: 'BtPoyJl9gnM',
    },
  },

  {
    image: '/img/ee307.png',
    title: 'Digital Logic Interfacing Project',
    description: (
      <>
      This project was created in EE 307 / EE 347 Lab (Semiconductor Device Electronics) at Cal Poly.
      My group and I designed a custom interface for our designed circuits. Throughout the quarter, 
      we analyzed, designed, and constructed digital logic gates, focusing on Positive Emitter-Coupled 
      Logic (PECL), Transistor-Transistor Logic (TTL), and Complementary Metal-Oxide-Semiconductor (CMOS) technologies.
      The project involved building a PECL OR-NOR gate, interfacing TTL to PECL, and further integrating the PECL with the CMOS. 
      </>
    ),

      details: {
        carouselImages: [
          { 
            imageUrl: '/img/ee307schem.png',
            caption: 'Full interfacing circuit layout with custom interfacing schematic',
          },
          { 
            imageUrl: '/img/ee307schematic.png',
            caption: 'Final digital logic interfacing project schematic with custom interfacing',
          },
        ],
      },
  },

  {
    image: '/img/pendubot.png',
    title: 'Pendubot PID Controller Design',
    description: (
      <>
        This project was created in EE 302/EE 342 (Classical Control Systems) at
        Cal Poly. The Pendubot system consists of a motor, a pendulum arm, and
        sensors that measure the angles of both the rotor and the pendulum arm.
        By controlling the motor, the goal is to stabilize the pendulum in
        either the suspended or inverted position. My lab group:
        <ol type="a">
          <li>
            focused on the behavior of second-order systems by deriving transfer
            functions and analyzing the effects of poles and zeros on system
            responses,
          </li>
          <li>
            designed a single-input single-output (SISO) controller for the
            Pendulum angle,
          </li>
          <li>
            focused on the application of Root Locus methods to improve
            transient response behavior,
          </li>
          <li>
            designed and implemented a lead compensator to improve transient
            response, increase stability margins, and enhance overall system
            performance,
          </li>
          <li>
            designed a PID controller that effectively minimizes steady-state
            error while meeting transient response specifications,
          </li>
          <li>
            used two different tuning methods, Manuel and Ziegler-Nichols, to
            adjust the PID gains (Kp, Ki, and Kd) through simulations and
            hardware experiments
          </li>
          <li>
            utilized frequency response design methods to look at gain and phase
            margins to help us understand the stability of our system.
          </li>
        </ol>
      </>
    ),
    details: {
      carouselImages: [
        {
          imageUrl: '/img/pendubot-simulink.png',
          caption: 'Pendubot MATLAB Simulink Design',
        },
      ],
      ytVideoId: 'sQcK0NVclIU',
    },
  },

  {
    image: '/img/riscvmcu.png',
    title: 'RISC-V MCU',
    description:
      'This project was completed each week throughout CPE 233: Computer Design & Assembly Language Programming. Using previous knowledge and experience with digital logic & FSMs, I designed a basic CPU through Vivado for simulations & testing, using Assembly to represent the CPU on a Basys3 Board.',
    details: {
      carouselImages: [
        {
          imageUrl: '/img/riscvmcu.png',
          caption: 'Final RISC-V  MCU Block Diagram Design',
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: 'RISC-V Code: Vivado & Assembly',
          url: '/docs/riscv-mcu.pdf',
        },
      ],
      ytVideoId: 'tcR1wvAflqQ',
    },
  },
];

export default function Projects() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <ProjectInfo entries={projects} />
    </Container>
  );
}
