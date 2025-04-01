import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";
import ProjectInfo, { ProjectEntry } from "./ProjectInfo";
import { PictureAsPdf } from "@mui/icons-material";

const projects: ProjectEntry[] = [
  {
    image: "/img/rgm-pic.png",
    title: "Circuits Lab Rube Goldberg Machine",
    description:
      'This project was created during my Circuits II lab at Cal Poly. Each week, we designed and implemented a different segment of the circuit, building the project step by step. Each segment represents a different part of the circuit, as shown in the block diagram. We showcased our final design at the end of the quarter. Encouraged to be inventive, we designed a Rube Goldberg-style machine, triggered by a user entering a "passcode" by playing a combination of pitches on a capacitive touch piano. The sequence ends with an LCD display, serving as a creative alarm system.',
    details: {
      carouselImages: [
        {
          imageUrl: "/img/rgm-pic.png",
          caption: "Final RGM Integration Design",
        },
        {
          imageUrl: "/img/rgm-block.png",
          caption: "Block Diagram of RGM System",
        },
        {
          imageUrl: "/img/rgm-integration-1.png",
          caption:
            "Schematic of capacitive touch piano, metal detector, and strobe light component integration",
        },
        {
          imageUrl: "/img/rgm-integration-2.png",
          caption:
            "Schematic demonstrating high-level final integration design",
        },
      ],
      ytVideoId: "BtPoyJl9gnM",
    },
  },

  {
    image: "/img/pendubot.png",
    title: "Pendubot PID Controller Designs",
    description:
      'This project was created in EE 302 (Classical Control Systems). The Pendubot system consists of a motor, a pendulum arm, and sensors that measure the angles of both the rotor and the pendulum arm. By controlling the motor, the goal is to stabilize the pendulum in either the suspended or inverted position.  My lab group: (a) focused on the behavior of second-order systems by deriving transfer functions and analyzing the effects of poles and zeros on system responses, (b) designed a single-input single-output (SISO) controller for the Pendulum angle, (c) focused on the application of Root Locus methods to improve transient response behavior, (d) designed and implemented a lead compensator to improve transient response, increase stability margins, and enhance overall system performance, (f) designd a PID controller that effectively minimizes steady-state error while meeting transient response specifications, (f) used two different tuning methods, Manuel and Ziegler-Nichols, to adjust the PID gains (Kp, Ki, and Kd) through simulations and hardware experiments, and (g) utilized frequency response design methods to look at gain and phase margins to help us understand the stability of our system.', 
    details: {
      carouselImages: [
        {
          imageUrl: "/img/pendoubot-simulink.png",
          caption: "Pendubot MATLAB Simulink Design",
        },
       
      ],
    
    },


  },

  {
    image: "/img/riscvmcu.png",
    title: "RISC-V MCU",
    description:
      "This project was completed each week throughout CPE 233: Computer Design & Assembly Language Programming. Using previous knowledge and experience with digital logic & FSMs, I designed a basic CPU through Vivado for simulations & testing, using Assembly to represent the CPU on a Basys3 Board.",
    details: {
      carouselImages: [
        {
          imageUrl: "/img/riscvmcu.png",
          caption: "Final RISC-V  MCU Block Diagram Design",
        },
      ],
      assets: [
        {
          icon: <PictureAsPdf />,
          title: "RISC-V Code: Vivado & Assembly",
          url: "/docs/riscv-mcu.pdf",
        },
      ],
      ytVideoId: "tcR1wvAflqQ",
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
